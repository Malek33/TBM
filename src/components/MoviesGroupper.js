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

    window.localStorage.setItem("navMediaType", "movie")
    window.dispatchEvent(new Event("storage"));

    window.localStorage.setItem("asideMenuSection", "home")
    window.dispatchEvent(new Event("storageChangesAsideMenuSction"));

    return (
        <div className='Movies-groupper-big-container'>
            <TrendingMoviesSection mediaType={'movie'} />
            <PopularMoviesSection mediaType={'movie'} />
            <TopRatedMoviesSection mediaType={'movie'} />
            <LatestMovies mediaType={'movie'} />
        </div>
    )
}

export default MoviesGroupper
