import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './People.module.scss'
import img from '../../img/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function People() {
  const [trendingPeople, setTrendingPeople] = useState([]);
  useEffect(() => {
    getTrendingPeople();
  }, []);

  let getTrendingPeople = async () => {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day?api_key=e026fbf033de598e76d307bb614d5368"
    );
    setTrendingPeople(data.results);
  };
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="row my-3 py-5">
        <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className={`${styles.brdr} w-25 mb-4`}></div>
            <h3>Trending</h3>
            <h3>People</h3>
            <h3>To watch now</h3>
            <span className="text-muted">most watched People by day</span>
            <div className={`${styles.brdr} mt-4 w-100`}></div>
          </div>
        </div>
        {trendingPeople.map((item, index) => (
          <div key={index} className="col-md-2 col-sm-6">
             <Link className="nav-link" to={`/details/${item.id}/${item.media_type}`}>
            <div className="item">
                {item.profile_path?<img
                className="w-100"
                
                src={`https://image.tmdb.org/t/p/original${item.profile_path
            }`}
                alt=""
              />:<img
              className="w-100"
              
              src={img}
              alt=""
            />}
              
              <h6>
                {item.title}
                {item.name}
              </h6>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
