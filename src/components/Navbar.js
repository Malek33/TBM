import React, { useState, useEffect } from 'react'
import './style/Navbar.css'
import MalekPic from '../img/spider-malek.png'

import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();

    const [activeNavbar, setActiveNavbar] = useState("Movies")

    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    // update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
        setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
    })

    const [keyword, setKeyword] = useState("");
    const [searchApiLoaded, setSearchApiLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then(res => {
          setSearchResults(res.data.results)
          console.log('search:', res.data)
          setSearchApiLoaded(true)
        })
      }, [keyword])

    const [showSearchResults, setShowSearchResults] = useState(false);

    const searchSubmitHandler = () => {
        navigate(`/search/${keyword}`);
    }

    return (
        <div>
            <div style={{paddingTop: '1vh'}} className={hideAsideMenu === "show" ? 'Nav' : 'Nav-while-aside-menu-btn-clicked'} >
                <div>
                    <ul className='ul-navbar'>
                        <li><a className={ activeNavbar === 'Movies' ? 'navbar-a-active' : 'navbar-a' } onClick={ () => setActiveNavbar('Movies') } href>Movies</a></li>
                        <li><a className={ activeNavbar === 'Series' ? 'navbar-a-active' : 'navbar-a' } onClick={ () => setActiveNavbar('Series') } href>Series</a></li>
                        <li><a className={ activeNavbar === 'TVShows' ? 'navbar-a-active' : 'navbar-a' } onClick={ () => setActiveNavbar('TVShows') } href>TV Shows</a></li>
                    </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <SearchOutlinedIcon style={{ fontSize: '1.5vw' }} className='Searchbar-icon' />
                        <form onSubmit={searchSubmitHandler}>
                            <input className='searchbar-input' onInput={ event => {setKeyword(event.target.value)}} onClick={ () => showSearchResults ? setShowSearchResults(false) : setShowSearchResults(true) } placeholder='Search for Movies/TV Shows' />
                        </form>
                        <div className='Searchbar-filter-icon'><TuneIcon style={{ fontSize: '1vw' }} /></div>
                            <div style={ showSearchResults ? {display: 'block'} : {display: 'none'} } className='search-content-container'>
                                <Link to={`/search/${keyword}`} style={{ color: 'white', textDecoration: 'none' }}><p style={{ marginLeft: '1vh' }}>click here to search for "{keyword}"</p></Link>
                                { searchApiLoaded ?
                                searchResults.slice(0, 10).map( item =>
                                    <Link to={`/movieDtails/${item.media_type}/${item.id}`} style={{ color: '#a3a3a3', textDecoration: 'none' }}>
                                        <div className='navbar-inner-search-results'>
                                            <img className='navbar-search-results-details-image' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
                                            <div>
                                                <div>{item.title || item.original_name}</div>
                                                <div>{item.release_date}</div>
                                            </div>
                                        </div>
                                    </Link> )
                                : <p></p> }
                            </div>
                    </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw'}}>
                    <a className='icon-btn-beside-userpic-navbar' href><SensorsOutlinedIcon style={{ fontSize: '1.3vw' }} /></a>
                    <a className='icon-btn-beside-userpic-navbar' href><NotificationsNoneOutlinedIcon style={{ fontSize: '1.3vw' }} /></a>
                    <a className='icon-btn-beside-userpic-navbar' href><AppsOutlinedIcon style={{ fontSize: '1.3vw' }} /></a>
                    <div className='navbar-usersection-name-image-mail' style={{ display: 'flex', alignItems: 'center' }}>
                        <img className='image-profile-pic-navbar' src={MalekPic} alt='profile pic' />
                        <div style={{ marginRight: '0.5vw' }}>
                            <label className='navbar-username'>Malek Maghraoui</label>
                            <label className='navbar-usermail'>malek.maghraoui@gmail.com</label>
                        </div>
                        <KeyboardArrowDownOutlinedIcon style={{ marginRight: '1.5vw', fontSize: '1.3vw' }} />
                    </div>
                </div>
            </div>
            <hr className='hr-navBar'/>
        </div>
    )
}

export default Navbar
