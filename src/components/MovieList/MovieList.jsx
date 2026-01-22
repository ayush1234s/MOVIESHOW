import { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';

// MovieList Component

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);

    // Fetch movies on component mount
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=094ef3abfe2380cc211616fc47eb0e8e"
        );

        const data = await response.json();

        setMovies(data.results);
        setAllMovies(data.results); // Store all movies for filtering
    };

    // Filter movies based on rating
    const handleFilter = (rate) => {
        // toggle off
        if (rate === minRating) {
            setMinRating(0);
            setMovies(allMovies);
        } else {
            setMinRating(rate);

            const filtered = allMovies.filter(
                movie => movie.vote_average >= rate
            );

            setMovies(filtered);
        }
    };





    return (
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">Popular🔥</h2>

                <div className="align_center movie_list_fs">
                    <FilterGroup minRating={minRating} 
                    handleFilter={handleFilter} 
                    ratings = {[8,7,6]}
                    />

                    <select name="" id="" className="movie_sorting">
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>

                    <select name="" id="" className="movie_sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}




export default MovieList;