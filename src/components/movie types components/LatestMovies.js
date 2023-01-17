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

function LatestMovies() {

    const [getPopularMovies, setGetPopularMovies] = useState([])
    const [getPopularMoviesLoading, setGetPopularMoviesLoading] = useState(false)
    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&page=1')
      .then(res => {
        setGetPopularMovies( res.data.results )
        setGetPopularMoviesLoading(true)
      })
    }, [] )

    return (
        <div>
            <div id='latest'>
                <div className='movie-groupper-genre-title-with-see-all-btn' >
                    <h1 style={{ display: 'flex', alignItems: 'center' }} className='h1-movie-groupper'>Latest Movies</h1>
                    <div className='movie-groupper-see-all-btn-with-icon'>
                        <a href>See all</a>
                        <KeyboardArrowRightIcon style={{ fontSize: '1vw'}} />
                    </div>
                </div>
                <div>
                    <div className='moviesGroupper-movies-caraousel-container'>
                        <div className="swiper-button image-swiper-button-next latest-movies-next-arrow-for-swiper">
                            <KeyboardArrowRightIcon style={{ fontSize: '1.3vw' }} />
                        </div>
                        <div className="swiper-button image-swiper-button-prev latest-movies-prev-arrow-for-swiper">
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
                                nextEl: ".latest-movies-next-arrow-for-swiper",
                                prevEl: ".latest-movies-prev-arrow-for-swiper",
                                disabledClass: "swiper-button-disabled"
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {getPopularMovies.slice(0, 18).map( item => <SwiperSlide><MovieSmallCard title={item.title} mediaType={"movie"} movieId={item.id} releaseDate={item.release_date} rating={item.vote_average} image={`https://image.tmdb.org/t/p/original${item.poster_path}`} /></SwiperSlide> )}
                        </Swiper>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default LatestMovies
