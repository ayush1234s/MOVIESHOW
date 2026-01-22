import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import MovieList from './components/MovieList/MovieList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Navbar />
        <MovieList type="popular" title="Popular" />
        <MovieList type="top_rated" title="Top Rated" />
        <MovieList type="upcoming" title="Upcoming" />
        <main></main>
      </div>
      </>
  );
};


export default App;
