import React, {useEffect} from 'react'
import "swiper/css";
import "swiper/css/pagination";
import './style/MoviesGroupper.css'
import TrendingMoviesSection from './movie types components/TrendingMoviesSection';
import TopRatedMoviesSection from './movie types components/TopRatedMoviesSection';
import PopularMoviesSection from './movie types components/PopularMoviesSection';
import LatestMovies from './movie types components/LatestMovies';


function MoviesGroupper() {

    useEffect(() => {
        document.title = `The Box Movies`;
      }, []);

    return (
        <div className='Movies-groupper-big-container'>
            <TrendingMoviesSection/>
            <PopularMoviesSection/>
            <TopRatedMoviesSection/>
            <LatestMovies/>
        </div>
    )
}

export default MoviesGroupper
