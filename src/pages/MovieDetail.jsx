import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  // https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    axios
      .get(movieDetailURL)
      .then((res) => {
        console.log(res);
        setMovieDetail(res.data);
      })
      .catch((error) => console.log(error));
  }, [movieDetailURL]);
  return (
    <div>
      <div className="container py-5">
        <h1 className="text-center">{movieDetail?.title}</h1>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={baseImageUrl + movieDetail?.poster_path}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 d-flex flex-column ">
              <div className="card-body">
                <h5 className="card-title">Overview</h5>
                <p className="card-text">{movieDetail?.overview}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {"Release Date : " + movieDetail?.release_date}
                </li>
                <li className="list-group-item">
                  {"Rate : " + movieDetail?.vote_average}
                </li>
                <li className="list-group-item">
                  {"Total Vote : " + movieDetail?.vote_count}
                </li>
                <li className="list-group-item">
                  <Link to={-1} className="card-link">
                    Go Back
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
