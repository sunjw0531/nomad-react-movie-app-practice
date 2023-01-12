import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const data = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovieData(json.data.movie);
    };
    data();
  }, []);
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <h1>details</h1>
      <img src={movieData.medium_cover_image} alt={movieData.title} />
      <h1>{movieData.title}</h1>
      <p>Rating : {movieData.rating}</p>
      <p>Runtime : {movieData.runtime}min</p>
      <p>{movieData.summary}</p>
    </div>
  );
}

export default Detail;
