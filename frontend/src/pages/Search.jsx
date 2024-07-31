import { useState } from 'react'
import styles from './Search.module.css'
import MovieBox from '../components/MovieBox'

const TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2ZiN2RhMDI3ZDEzYjczMTYzMWY5MTlmZjk0MjA4ZSIsIm5iZiI6MTcyMTU5NTA3MS44MjkyMzIsInN1YiI6IjY2NjcxMjM2MWZmZWRhMjRkMjE1Y2ZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FA5XHgFbue1MA_0ezKOyBH668y8_J6MHGZlnFWJm-ls'
const OPTIONS = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
  }
};

export default function Search() {
  const [ movies, setMovies ] = useState([]);

  function getMovies(movie) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, OPTIONS)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results);
    })
    .catch(err => console.error('error:' + err))
  }
  
  function submissionHandler(e) {
    e.preventDefault();
    getMovies(e.target[0].value);
  }

  return (
    <>
      <form onSubmit={submissionHandler} className={styles.ui}>
        <h3>Movie Search:</h3>
        <input className={styles.termBox} type="text"/>
        <input className={styles.submit} type="submit" value="Submit"/>
      </form>
      <section>
        {movies?.map((movie) => <MovieBox key={movie.id} movie={movie}/>)}
      </section>
    </>
    )
}
