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
import { Link, useParams } from 'react-router-dom';

import userImageIcon from '../img/user.png'
import MovieSmallCard from './MovieSmallCard';

function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

function MovieDetails() {
    SwiperCore.use([Autoplay]);

    const { mediaType, id, seasonNum, episodeNumber } = useParams()

    const [ movieData, setMovieData ] = useState([])
    const [ imagesBackdrops, setImagesBackdrops ] = useState([])
    const [ imagesPoster, setImagesPoster ] = useState([])
    const [ movieGenres, setMovieGenres ] = useState([])
    const [ movieActors, setMovieActors ] = useState([])
    const [ movieDuration, setMovieDuration ] = useState([])

    const [similarMovies, setSimilarMovies] = useState([])
    const [traillerWindowIsOpen, setTraillerWindowIsOpen] = useState(false);
    const [catstsWindowIsOpen, setCatstsWindowIsOpen] = useState(false);

    const [tvShowSeasons, setTvShowSeasons] = useState([])
    const [tvEpisodes, setTvEpisodes] = useState([])
    const [tvEpisode, setTvEpisode] = useState([])

    const toggleMediaTraillerPopup = () => {
        setTraillerWindowIsOpen(!traillerWindowIsOpen);
    }

    const toggleCastsPopup = () => {
        setCatstsWindowIsOpen(!catstsWindowIsOpen);
    }

    let mediaStream = mediaType === "movie" ? `https://autoembed.to/movie/tmdb/${id}` : `https://autoembed.to/tv/tmdb/${id}-${seasonNum}-${episodeNumber}`
    let mediaTrailer = mediaType === "movie" ? `https://autoembed.to/trailer/movie/${id}` : `https://autoembed.to/trailer/tv/${id}`


    useEffect(() => {
        let data = `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US`
        axios.get(data)
        .then(res => {
            setTvEpisodes(res.data.episodes)
        })
        .catch(err => {
            console.log(err)
        })
    }, [seasonNum])

    // https://api.themoviedb.org/3/tv/119051/season/1/episode/2?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US
    useEffect(() => {
        let data = `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}/episode/${episodeNumber}?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US`
        axios.get(data)
        .then(res => {
            console.log('episodeData:', res.data)
            setTvEpisode(res.data)
            setMovieData(res.data)
            setImagesBackdrops(res.data.images.backdrops)
            setImagesPoster(res.data.still_path)
            setMovieGenres(res.data.genres)
            setMovieActors(res.data.credits.cast)
            setMovieDuration(toHoursAndMinutes(res.data.air_date))
        })
        .catch(err => {
            console.log(err)
        })
    }, [episodeNumber])


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
            mediaType === 'tv' ? setTvShowSeasons(res.data.seasons) : setTvShowSeasons(undefined)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])
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
    }, [id])

    useEffect(() => {
        document.title = `TBM | Movie Section`;
      }, []);

    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    // update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
        setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
    })

    const Popup = props => {
        return (
          <div className="popup-box">
            <div className="box">
              <span className="close-icon" onClick={props.handleClose}>x</span>
              {props.content}
            </div>
          </div>
        );
      };

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
                        <a onClick={toggleMediaTraillerPopup} className='movie-details-play-trailer-btn-text-div' href>TRAILER</a>
                    </div>
                </div>
            </div>


            <div className='movie-details-content'>
                <div className='left-section'>
                    <div className='movie-details-watch-poster-title-ex-container'>
                        <img className='movie-details-images-poster' src={`https://image.tmdb.org/t/p/original${imagesPoster}`} alt='img' />
                        <div className='movie-details-title-btns-ex'>
                            <h1>{movieData.title || movieData.original_name || movieData.name}</h1>
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
                                <p style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleCastsPopup}>show all</p>
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
                                    <a className='movie-details-similar-movie-title' href>{item.title || item.name || item.original_name}</a>
                                    <br/>
                                    <a href>{item.vote_average}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', width: '73vw', justifyContent: 'center' }}>


            {
                seasonNum === undefined ?
                    mediaType === 'tv' ?
                    tvShowSeasons.filter( item => item.air_date != null ? item : null  ).map( item => <MovieSmallCard title={item.name} RemoveStars={'yes'}
                         mediaType={'tv'} movieId={id} releaseDate={item.air_date} isTvSeriesSection={true} seasonNum={item.season_number}
                         image={`https://image.tmdb.org/t/p/original${item.poster_path}`} /> )
                    : null
                :
                tvEpisodes.map( item => <MovieSmallCard title={item.name} rating={item.vote_average} isTvSeriesSection={false}
                mediaType={'tv'} movieId={id} releaseDate={item.air_date} episodeNumber={item.episode_number} seasonNum={seasonNum}
                image={`https://image.tmdb.org/t/p/original${item.still_path}`} /> )
            }
            </div>

            {/* {
                mediaType === 'movie' ?
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
            : null
            } */}

            {
                episodeNumber !== undefined ?
                <div className='watch-section-container'>
                <div className='watch-section'>
                    <iframe
                        width="1000vw"
                        height="600vh"
                        src={mediaStream}
                        frameBorder="0"
                        allowFullScreen
                        title={movieData.title}
                        onLoad={()=> setTimeout( console.log(mediaStream) , 1)}
                    />
                </div>
            </div>
            : null
            }

            {/* popup windows */}
            {
                traillerWindowIsOpen && <Popup content={<>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <iframe
                            style={{
                                borderRadius: '1vw'
                            }}
                            width="900vw"
                            height="500vh"
                            src={mediaTrailer}
                            frameBorder="0"
                            allowFullScreen
                            title={movieData.title}
                            onLoad={()=> setTimeout( console.clear() , 1)}
                        />
                    </div>
                    <br/>
                </>}
                handleClose={toggleMediaTraillerPopup}/>
            }

            {/* toggleCastsPopup */}
            {
                catstsWindowIsOpen && <Popup content={<>
                <br/>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1vw' }}>
                { movieActors.map( item =>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img className='movie-details-actorCards-pic' src={ item.profile_path === undefined || item.profile_path === null ? `${userImageIcon}` : `https://image.tmdb.org/t/p/original${item.profile_path}` } alt='img'></img>
                                        <div className='movie-details-actorCards-names'>
                                            <p>{item.name}</p>
                                            <p>{item.character}</p>
                                        </div>
                                    </div>
                                 )}
                </div>
                <br/>
                </>}
                handleClose={toggleCastsPopup}/>
            }
        </div>
    )
}

export default MovieDetails
