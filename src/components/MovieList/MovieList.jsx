import { useEffect, useState } from 'react';
import _ from 'lodash';
import './MovieList.css';
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);

    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    });

    // fetch movies
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=094ef3abfe2380cc211616fc47eb0e8e"
        );

        const data = await response.json();

        setMovies(data.results);
        setAllMovies(data.results);
    };

    // ⭐ FILTER
    const handleFilter = (rate) => {
        let updatedMovies = allMovies;

        if (rate !== minRating) {
            updatedMovies = allMovies.filter(
                movie => movie.vote_average >= rate
            );
            setMinRating(rate);
        } else {
            setMinRating(0);
        }

        // apply sorting after filtering
        if (sort.by !== "default") {
            updatedMovies = _.orderBy(
                updatedMovies,
                [sort.by],
                [sort.order]
            );
        }

        setMovies(updatedMovies);
    };

    // ⭐ SORT
    const handleSort = (e) => {
        const { name, value } = e.target;

        const newSort = { ...sort, [name]: value };
        setSort(newSort);

        let sortedMovies = [...movies];

        if (newSort.by !== "default") {
            sortedMovies = _.orderBy(
                sortedMovies,
                [newSort.by],
                [newSort.order]
            );
        }

        setMovies(sortedMovies);
    };

    return (
        <section className="movie_list">

            <header className="align_center movie_list_header">
                <h2 className="movie_list_heading">Popular 🔥</h2>

                <div className="align_center movie_list_fs">

                    <FilterGroup
                        minRating={minRating}
                        handleFilter={handleFilter}
                        ratings={[8, 7, 6]}
                    />

                    <select
                        name="by"
                        value={sort.by}
                        onChange={handleSort}
                        className="movie_sorting"
                    >
                        <option value="default">Sort By</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>

                    <select
                        name="order"
                        value={sort.order}
                        onChange={handleSort}
                        className="movie_sorting"
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>

                </div>
            </header>

            <div className="movie_cards">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

        </section>
    );
};

export default MovieList;
