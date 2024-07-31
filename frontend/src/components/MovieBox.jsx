import styles from './MovieBox.module.css'

export default function MovieBox({ movie }) {
  let url = 'public/PosterNotFound.png';
  if (movie?.poster_path) url = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

  return (
    <div className={styles.container} style={{backgroundImage: `url(${url})`}}>
      <p>{movie?.title}</p>
      <div className={styles.details}>
        <p>{movie?.original_title}</p>
        <p>{movie?.release_date}</p>
        <p>{movie?.overview}</p>
        <p>Rating: {movie?.vote_average} / 10</p>
        <p>Likes: {movie?.vote_count}</p>
      </div>
    </div>
  )
}
