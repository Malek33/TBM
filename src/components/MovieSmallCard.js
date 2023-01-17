import React from 'react'
import './style/MovieCards.css'
import AddIcon from '@mui/icons-material/Add';
// import imdbLogo from '../img/imdb-logo.svg'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

function MovieSmallCard(props) {
    return (
        <div className='movie-small-card-space-around-so-it-can-expand'>
            <div className='movie-small-card-cover-image' style={{ backgroundImage: `url(${props.image})` }}>
                <div className='movie-small-card-cover-image-shadow-effect'></div>
                <div className='movie-small-card-rating-star-icon-with-value-container'>
                    <p className='movie-small-card-rating-star-icon'><StarIcon style={{ fontSize: '0.9vw', marginLeft: '-0.3vw' }} /></p>
                    <p>{props.rating}</p>
                </div>
                { props.movieTypeIsAvailable ?
                <div className='movie-small-card-media-type-container'>
                    <p>{props.mediaType}</p>
                </div> : null
                }
                <div className='movie-small-card-name-date-rating-btns-container'>
                    <Link to={`/movieDtails/${props.mediaType}/${props.movieId}`} style={{ color: 'white', textDecoration: 'none' }}>
                        <div className='movie-small-card-name-date-rating'>
                            <h2 title={props.title} className='movie-small-card-movie-name'>{props.title}</h2>
                            <h3 className='movie-small-card-movie-release-date'>{props.releaseDate}</h3>
                            {/* <div className='movie-small-card-movie-rating'>
                                <div alt='imdb-logo' className='imdb-logo-card' style={{ backgroundImage: `url(${imdbLogo})` }}></div>
                                <p className='movie-small-card-movie-rating-txt'>{props.rating} rating</p>
                            </div> */}
                        </div>
                    </Link>
                    <div className='movie-small-card-btns'>
                        <a className='movie-small-card-btn-watch-now' href>Watch now</a>
                        <a href className='movie-small-card-btn-add'><AddIcon style={{ fontSize: '1.3vw' }}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSmallCard
