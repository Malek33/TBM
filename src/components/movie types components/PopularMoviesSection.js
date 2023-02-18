/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import '../style/MoviesGroupper.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MovieSmallCard from '../MovieSmallCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PopularMoviesSection(props) {
    // Top Rated Movies
    const [getPopularMovies, setGetPopularMovies] = useState([])
    const [getPopularMoviesLoading, setGetPopularMoviesLoading] = useState(false)
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/${props.mediaType || 'movie'}/popular?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&page=1`)
      .then(res => {
        console.log('popular', res);
        setGetPopularMovies( res.data.results )
        setGetPopularMoviesLoading(true)
      })
    }, [] )

    return (
        <div>
            <div id='popular'>
                <div className='movie-groupper-genre-title-with-see-all-btn' >
                    <Link className='home-explore-big-titles' to={`/explore/${props.mediaType}/popularity`}><h1 style={{ display: 'flex', alignItems: 'center' }} className='h1-movie-groupper'>What's Popular</h1></Link>
                    <div className='movie-groupper-see-all-btn-with-icon'>
                        <a>See all</a>
                        <KeyboardArrowRightIcon style={{ fontSize: '1vw'}} />
                    </div>
                </div>
                <div>
                    <div className='moviesGroupper-movies-caraousel-container'>
                        <div className="swiper-button image-swiper-button-next popular-movies-next-arrow-for-swiper">
                            <KeyboardArrowRightIcon style={{ fontSize: '1.3vw' }} />
                        </div>
                        <div className="swiper-button image-swiper-button-prev popular-movies-prev-arrow-for-swiper">
                            <KeyboardArrowLeftIcon style={{ fontSize: '1.3vw' }} />
                        </div>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={2}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".popular-movies-next-arrow-for-swiper",
                                prevEl: ".popular-movies-prev-arrow-for-swiper",
                                disabledClass: "swiper-button-disabled"
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            >
                            {getPopularMovies.slice(0, 18).map( item => <SwiperSlide key={item.id}><MovieSmallCard title={item.title || item.original_title || item.name} mediaType={props.mediaType} movieId={item.id} releaseDate={item.release_date || item.first_air_date} rating={item.vote_average} image={`https://image.tmdb.org/t/p/original${item.poster_path}`} /></SwiperSlide> )}
                        </Swiper>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default PopularMoviesSection
