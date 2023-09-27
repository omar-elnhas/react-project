import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Movies.module.scss'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
export default function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  let getTrendingMovies = async () => {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=e026fbf033de598e76d307bb614d5368"
    );
    setTrendingMovies(data.results);
    console.log(data.results);
  };
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="row my-3 py-5">
        <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center" >
            <div className="container">
            <div className={`${styles.brdr} w-25 mb-4`}></div>
            <h3>Trending</h3>
            <h3>Movies</h3>
            <h3>To watch now</h3>
            <span className="text-muted">most watched movies by day</span>
            <div className={`${styles.brdr} mt-4 w-100`}></div>
            </div>
          
        </div>
        {trendingMovies.map((item, index) => (
          <div key={index} className="col-md-2 col-sm-6">
            <div className="container">
            <Link className="nav-link" to={`/details/${item.id}/${item.media_type}`}>
            <div className="item">
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
              />
              <h6>
                {item.title}
                {item.name}
              </h6>
            </div>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
