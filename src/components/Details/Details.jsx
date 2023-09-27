import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Details() {
  const [itemDetails, setItemDetails] = useState({})
  let params=useParams()

  let getItemDetails=async()=>{
   let {data}= await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=e026fbf033de598e76d307bb614d5368`)
  setItemDetails(data)
  console.log(data);
  }
useEffect(() => {
 getItemDetails()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="row py-5">
      <div className="col-md-5 col-sm-7">
        {params.mediaType==='person'?<img className='w-100' src={`https://image.tmdb.org/t/p/original${itemDetails.profile_path}`} alt="" />: <img className='w-100' src={`https://image.tmdb.org/t/p/original${itemDetails.poster_path}`} alt="" />

}
      </div>
      <div className="col-md-7 col-sm-5">
        <h2>{itemDetails.title} {itemDetails.name}</h2>
        {itemDetails.place_of_birth?<h5><span className='text-primary'>place_of_birth </span>: {itemDetails.place_of_birth}</h5>:''}
       
        <p className='text-muted'>{itemDetails.overview} {itemDetails.biography}</p>
        <span className='text-primary'>voting : {itemDetails.vote_average} {itemDetails.popularity}</span>
      </div>
    </div>
    </>
  )
}
