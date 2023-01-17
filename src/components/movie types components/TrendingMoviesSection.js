/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import '../style/MoviesGroupper.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MovieBigCard from '../MovieBigCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from 'axios';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
function TrendingMoviesSection() {
    // Trending Movies
  const [getTrendMovie, setGetTrendMovie] = useState([])
  const [getTrendMovieLoading, setGetTrendMovieLoading] = useState(false)
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&page=1')
    .then(res => {
      setGetTrendMovie( res.data.results )
      console.log(res.data);
      setGetTrendMovieLoading(true)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

    return (
        <div id='trending'>
                <div className='movie-groupper-genre-title-with-see-all-btn'>
                    <h1 className='h1-movie-groupper'>Trending Movies</h1>
                    <div className='movie-groupper-see-all-btn-with-icon'>
                        <a href>See all</a>
                        <KeyboardArrowRightIcon style={{ fontSize: '1vw'}} />
                    </div>
                </div>
                <div className='moviesGroupper-movies-caraousel-container'>
                    <div className="swiper-button image-swiper-button-next trending-movies-next-arrow-for-swiper">
                        <KeyboardArrowRightIcon style={{ fontSize: '1.3vw' }} />
                    </div>
                    <div className="swiper-button image-swiper-button-prev trending-movies-prev-arrow-for-swiper">
                        <KeyboardArrowLeftIcon style={{ fontSize: '1.3vw' }} />
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={1}
                        slidesPerGroup={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        centeredSlides={false}
                        navigation={{
                            nextEl: ".trending-movies-next-arrow-for-swiper",
                            prevEl: ".trending-movies-prev-arrow-for-swiper",
                            disabledClass: "swiper-button-disabled"
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {getTrendMovie.slice(0, 18).map( item => <SwiperSlide><MovieBigCard title={item.title} mediaType={"movie"} movieId={item.id} releaseDate={item.release_date} rating={item.vote_average} image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} /></SwiperSlide> )}
                    </Swiper>
                </div>
                {/* <div style={{ display: 'flex', gap: '2vw', marginBottom: '4vh' }}>
                    <MovieBigCard title="Army of the dead" releaseDate="2021" rating="7.9"
                    image="https://assets.dicebreaker.com/zombicide-army-of-the-dead-board-game-movie-art.png/BROK/thumbnail/1600x900/format/jpg/quality/80/zombicide-army-of-the-dead-board-game-movie-art.png" />
                    <MovieBigCard title="Gunpowder milkshake" releaseDate="2021" rating="7.5"
                    image="https://www.michigansportszone.com/wp-content/uploads/2021/07/GUNPOWDER-MILKSHAKE-NETFLIX-REVIEW.jpg" />
                    <MovieBigCard title="AVATAR: THE WAY OF WATER" releaseDate="2022" rating="8.0"
                    image="https://cdn.theplaylist.net/wp-content/uploads/2022/05/14164920/Avatar-2-The-Way-Of-Water.jpg" />
                </div> */}
                <br/>
            </div>
    )
}

export default TrendingMoviesSection
