/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './style/MovieDetails.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorder from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LinearScaleIcon from '@mui/icons-material/LinearScale';


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { useParams } from 'react-router-dom';


function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

function MovieDetails() {
    SwiperCore.use([Autoplay]);

    const { mediaType, id } = useParams()

    const [ movieData, setMovieData ] = useState([])
    const [ imagesBackdrops, setImagesBackdrops ] = useState([])
    const [ imagesPoster, setImagesPoster ] = useState([])
    const [ movieGenres, setMovieGenres ] = useState([])
    const [ movieActors, setMovieActors ] = useState([])
    const [ movieDuration, setMovieDuration ] = useState([])

    const [similarMovies, setSimilarMovies] = useState([])

    let sNum
    let epNum

    let mediaStream = mediaType === "movie" ? `https://autoembed.to/movie/tmdb/${id}` : `https://autoembed.to/tv/imdb/${id}-${sNum}-${epNum}`
    let mediaTrailer = mediaType === "movie" ? `https://autoembed.to/trailer/movie/${id}` : `https://autoembed.to/trailer/tv/${id}`


    useEffect(() => {
        let data = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=b5d2609c326586f7f753f77b085a0b31&append_to_response=images,credits`
        axios.get(data)
        .then(res => {
            console.log(res.data)
            setMovieData(res.data)
            setImagesBackdrops(res.data.images.backdrops)
            setImagesPoster(res.data.poster_path)
            setMovieGenres(res.data.genres)
            setMovieActors(res.data.credits.cast)
            setMovieDuration(toHoursAndMinutes(res.data.runtime))
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    console.log(imagesBackdrops);

    useEffect(() => {
        let data = `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&page=1`
        axios.get(data)
        .then(res => {
            console.log('similar', res.data)
            setSimilarMovies(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        document.title = `TBM | Movie Section`;
      }, []);

    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    // update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
        setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
    })

    return (
        <div className={"MovieDetails-div-for-css"} >
            <Swiper
                className={ "mySwiper-movie-details-backdrop-images" }
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {imagesBackdrops.map( item => <SwiperSlide><div className={ hideAsideMenu === "show" ? 'movie-details-big-backdrop-image-show-asidemenu' : 'movie-details-big-backdrop-image'} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.file_path})` }}>{}</div></SwiperSlide> )}
            </Swiper>
            <div style={{ position: 'absolute', zIndex: '100' }}>
                <div className={ hideAsideMenu === "show" ? 'movie-details-big-backdrop-image-shadow-effect' : 'hide-aside-menu-movie-details-big-backdrop-image-shadow-effect' }></div>
                <div className='movie-details-circularProgressbar-and-text-div'>
                    <CircularProgressbar className='movie-details-circularProgressbar' backgroundPadding={5} background={true} value={movieData.vote_average} maxValue={10} text={movieData.vote_average} styles={
                    buildStyles({
                    strokeLinecap: 'butt',
                    textSize: '1.5svw',
                    pathColor: 'red',
                    textColor: 'red',
                    trailColor: 'black',
                    backgroundColor: 'black',
                    })} />
                    <div className='movie-details-text-div'>
                        <h3>{movieData.vote_count} VOTES</h3>
                        <p>{movieData.vote_average > 6 ? 'Our Users Are Recommending it' : ''}</p>
                    </div>
                    <div className={ hideAsideMenu === "show" ? 'movie-details-play-trailer-btn-div-show-asidemenu' : 'movie-details-play-trailer-btn-div' }>
                        <PlayArrowIcon style={{ fontSize: '2vw' }} className='movie-details-play-trailer-btn-icon-div'/>
                        <a className='movie-details-play-trailer-btn-text-div' href>TRAILER</a>
                    </div>
                </div>
            </div>


            <div className='movie-details-content'>
                <div className='left-section'>
                    <div className='movie-details-watch-poster-title-ex-container'>
                        <img className='movie-details-images-poster' src={`https://image.tmdb.org/t/p/original${imagesPoster}`} alt='img' />
                        <div className='movie-details-title-btns-ex'>
                            <h1>{movieData.title}</h1>
                            <div className='movie-details-movie-types'>
                                {movieGenres.map( item => <div className="movie-details-movie-genres">{item.name}</div> )}
                            </div>
                            <div className='movie-details-btns'>
                                <a href><PlayArrowIcon style={{ fontSize: '1.3vw' }}/><label>WATCH</label></a>
                                <div><FavoriteBorder/></div>
                                <div><ShareIcon/></div>
                                <div><LinearScaleIcon/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='right-section'>
                    <hr/>
                    <div>
                        {similarMovies.slice(0, 3).map( item => (
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5vh' }}>
                                <img className='movie-details-similar-movie-images-poster' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='img' />
                                <div className='movie-details-similar-movie-title-votes-container'>
                                    <a className='movie-details-similar-movie-title' href>{item.title}</a>
                                    <br/>
                                    <a href>{item.vote_average}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className={ hideAsideMenu === "show" ? "show-aside-menu-movie-details-storyline-cast-container" : "movie-details-storyline-cast-container" } >
                    <div>
                        <h3>{movieData.status}</h3>
                        <h3>{movieData.release_date}</h3>
                        <h3>{movieDuration.hours}H {movieDuration.minutes}MIN</h3>
                    </div>
                    <table>
                        <tr>
                            <th>STORYLINE</th>
                            <th>CAST</th>
                        </tr>
                        <tr>
                            <td>{movieData.overview}</td>
                            <td>
                                { movieActors.slice(0, 4).map( item =>
                                    <div className='movie-details-actorCards-container'>
                                        <img className='movie-details-actorCards-pic' src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt='img'></img>
                                        <div className='movie-details-actorCards-names'>
                                            <p>{item.name}</p>
                                            <p>{item.character}</p>
                                        </div>
                                    </div>
                                 ) }
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='right-section'>
                    <hr/>
                    <div>
                        <h2>More Like This:</h2>
                        {similarMovies.slice(0, 9).map( item => (
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5vh' }}>
                                <img className='movie-details-similar-movie-images-poster' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='img' />
                                <div className='movie-details-similar-movie-title-votes-container'>
                                    <a className='movie-details-similar-movie-title' href>{item.title}</a>
                                    <br/>
                                    <a href>{item.vote_average}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='watch-section-container'>
                <div className='watch-section'>
                    <iframe
                        width="1000vw"
                        height="600vh"
                        src={mediaStream}
                        frameBorder="0"
                        allowFullScreen
                        title={movieData.title}
                        onLoad={()=> setTimeout( console.clear() , 1)}
                    />
                </div>
            </div>


        </div>
    )
}

export default MovieDetails
