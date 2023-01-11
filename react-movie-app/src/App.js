import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h1>{movie.title}</h1>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
