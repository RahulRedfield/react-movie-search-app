import React, { useState } from "react";
import Movie from "./Movie";

export default function MovieSearch() {

    const [query, setQuery] = useState("Star Wars");
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=420b0a1b9a56325c833c1adf16cf31fd&language=en-US&query=${query}&pages=1&iclude_adult=false`

        try {
            const res = await fetch(url);
            const data = await res.json();

            setMovies(data.results);
            console.log(movies)
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <form className="form" onSubmit={searchMovie}>
                <label htmlFor="query" className="label">Search Your Movie</label>
                <input type="text" name="query" className="input"
                    placeholder="i.e. Star Wars" onChange={(e) => setQuery(e.target.value)}></input>
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => {
                    return (<Movie movie={movie} key={movie.id} />)
                })}
            </div>

        </>

    )
}