import { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard';

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
    setAllMovies(data.results); // ⭐ important
};

// Filter movies based on rating
     const handleFilter = (rate) => {
    setMinRating(rate);

    const filtered = allMovies.filter(
        movie => movie.vote_average >= rate
    );

    setMovies(filtered);
};


        

    return (
    <section className="movie_list">
        <header className="align_center movie_list_header">
            <h2 className="align_center movie_list_heading">Popular🔥</h2>

            <div className="align_center movie_list_fs">
                <ul className="align_center movie_filter">
                   <li
    className={`movie_filter_item ${minRating === 8 ? "active" : ""}`}
    onClick={() => handleFilter(8)}
>
    8+ Star
</li>

<li
    className={`movie_filter_item ${minRating === 7 ? "active" : ""}`}
    onClick={() => handleFilter(7)}
>
    7+ Star
</li>

<li
    className={`movie_filter_item ${minRating === 6 ? "active" : ""}`}
    onClick={() => handleFilter(6)}
>
    6+ Star
</li>

                </ul>

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