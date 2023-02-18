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
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TopRatedMoviesSection(props) {
    // Top Rated Movies
  const [getTopRatedMovies, setGetTopRatedMovies] = useState([])
  const [getTopRatedMoviesLoading, setGetTopRatedMoviesLoading] = useState(false)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${props.mediaType || 'movie'}/top_rated?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&page=1`)
    .then(res => {
      setGetTopRatedMovies( res.data.results )
      setGetTopRatedMoviesLoading(true)
    })
  }, [] )

    return (
        <div>
            <div id='top-rated'>
                <div className='movie-groupper-genre-title-with-see-all-btn' >
                    <Link className='home-explore-big-titles' to={`/explore/${props.mediaType}/top-rated`} ><h1 style={{ display: 'flex', alignItems: 'center' }} className='h1-movie-groupper'>Top Rated {props.mediaType ==='tv' ? 'TV Show' : 'Movie'}s</h1></Link>
                    <div className='movie-groupper-see-all-btn-with-icon'>
                        <a>See all</a>
                        <KeyboardArrowRightIcon style={{ fontSize: '1vw'}} />
                    </div>
                </div>
                <div>
                    <div className='moviesGroupper-movies-caraousel-container'>
                        <div className="swiper-button image-swiper-button-next top-rated-movies-next-arrow-for-swiper">
                            <KeyboardArrowRightIcon style={{ fontSize: '1.3vw' }} />
                        </div>
                        <div className="swiper-button image-swiper-button-prev top-rated-movies-prev-arrow-for-swiper">
                            <KeyboardArrowLeftIcon style={{ fontSize: '1.3vw' }} />
                        </div>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={3}
                            slidesPerGroup={3}
                            loop={true}
                            initialSlide={0}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".top-rated-movies-next-arrow-for-swiper",
                                prevEl: ".top-rated-movies-prev-arrow-for-swiper",
                                disabledClass: "swiper-button-disabled"
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {getTopRatedMovies.slice(0, 18).map( item => <SwiperSlide key={item.id}><MovieSmallCard title={item.title || item.original_title || item.name} mediaType={props.mediaType} movieId={item.id} releaseDate={item.release_date || item.first_air_date} rating={item.vote_average} image={`https://image.tmdb.org/t/p/original${item.poster_path}`} /></SwiperSlide> )}
                        </Swiper>
                    </div>
{/*
                    <MovieSmallCard title="Army of the dead" releaseDate="2021" rating="7.9"
                    image="https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UY720_.jpg" />
                    <MovieSmallCard title="Gunpowder milkshake" releaseDate="2021" rating="7.5"
                    image="https://image.tmdb.org/t/p/w500/9p5b37jaeSoYFTMda3WYLoFVKOK.jpg" />
                    <MovieSmallCard title="AVATAR: THE WAY OF WATER" releaseDate="2022" rating="8.0"
                    image="https://i.pinimg.com/originals/91/1a/2d/911a2db55ff3a1faa44a7e766b9a1b3e.jpg" />
                    <MovieSmallCard title="The Shawshank Redemption" releaseDate="1994" rating="9.3"
                    image="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg" />
                    <MovieSmallCard title="The Dark Knight" releaseDate="2008" rating="9.0"
                    image="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg" />
                    <MovieSmallCard title="The Godfather Part II" releaseDate="1974" rating="9.0"
                    image="https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg" /> */}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default TopRatedMoviesSection
