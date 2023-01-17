import React from 'react'
import './style/MovieCards.css'
import AddIcon from '@mui/icons-material/Add';
import imdbLogo from '../img/imdb-logo.svg'
import { Link } from 'react-router-dom';

function MovieBigCard(props) {
    return (
        <div className='movie-card-space-around-so-it-can-expand'>
            <div className='movie-card-cover-image' onLoad={console.log('image loaded')} style={{ backgroundImage: `url(${props.image})` }}>
                {/* <img className='movie-card-cover-image' src={ArmyOfTheDeadImage} alt='images'/> */}
                <div className='movie-card-cover-image-shadow-effect'></div>
                <div className='movie-card-name-date-rating-btns-container'>
                    <Link to={`/movieDtails/${props.mediaType}/${props.movieId}`} style={{ color: 'white', textDecoration: 'none' }}>
                        <div className='movie-card-name-date-rating'>
                            <h2 title={props.title} className='movie-card-movie-name'>{props.title}</h2>
                            <h3 className='movie-card-movie-release-date'>{props.releaseDate}</h3>
                            <div className='movie-card-movie-rating'>
                                <div alt='imdb-logo' className='imdb-logo-card' style={{ backgroundImage: `url(${imdbLogo})` }}></div>
                                <p className='movie-card-movie-rating-txt'>{props.rating} rating</p>
                            </div>
                        </div>
                    </Link>
                    <div className='movie-card-btns'>
                        <a className='movie-card-btn-watch-now' href>Watch now</a>
                        <a href className='movie-card-btn-add'><AddIcon style={{ fontSize: '1.3vw' }}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBigCard
