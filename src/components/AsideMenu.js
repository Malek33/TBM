/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './style/AsideMenu.css'

import MenuIcon from '@mui/icons-material/Menu';
import websiteLargeLogo from '../img/the box movies.png'
import websiteMiniLogo from '../img/TBM.png'


import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import ExploreOutlined from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';

import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';

import AlarmIcon from '@mui/icons-material/AccessAlarmTwoTone';
import AlarmOutlined from '@mui/icons-material/Alarm';

import AccessTimeIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import AccessTimeOutlined from '@mui/icons-material/AccessTime';

import FavoriteBorder from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';

import BookmarkBorderIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorder';

import StarBorderIcon from '@mui/icons-material/Star';
import StarBorderOutlined from '@mui/icons-material/StarBorder';


import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import InfoOutlined from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';

import { Link, useNavigate } from 'react-router-dom';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import poster404 from '../img/poster404.png'

// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

//nav color #1a161f
//activeElement color #e91b23
//notActiveElement color #5e5e62

function AsideMenu(props) {
    const navigate = useNavigate();

    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    //update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.localStorage.setItem("AsideMenuVisibility", hideAsideMenu === "show" ? "show" : "hide")
    window.dispatchEvent(new Event("storage"));

    const[ asideMenuSection, setAsideMenuSection ] = useState(window.localStorage.getItem("asideMenuSection") || "home")
    window.addEventListener('storageChangesAsideMenuSction', () => {
        setAsideMenuSection(window.localStorage.getItem("asideMenuSection"))
  })

    const [showSearchResults, setShowSearchResults] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [searchApiLoaded, setSearchApiLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState({});

  const searchSubmitHandler = () => {
    navigate(`/search/${keyword}`);
}

useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US&query=${keyword}&page=1&include_adult=false`)
    .then(res => {
      setSearchResults(res.data.results)
      console.log('search:', res.data)
      setSearchApiLoaded(true)
    })
  }, [keyword])


    return (
        <div className={ hideAsideMenu === 'show' ? 'Aside-menu-parent-container' : 'Aside-menu-parent-container-hide' }>
            <div className='website-logo-with-aside-menu-btn-container'>
                <MenuIcon onClick={ () => hideAsideMenu === 'show' ? setHideAsideMenu("hide") : setHideAsideMenu("show")} id="fixMobileMuiIconSize" className='aside-menu-slider-btn'/>
                <Link to={`/`} ><img className={hideAsideMenu === "show" ? 'website-logo-aside-menu' : 'website-mini-logo-aside-menu'} src={ hideAsideMenu === "show" ? websiteLargeLogo : websiteMiniLogo } alt="logo" /></Link>
            </div>
            <div className={ hideAsideMenu === 'show' ? 'Aside-menu-child-container' : 'Aside-menu-btn-clicked-menu-child-container' }>
                <div className='Aside-menu-child-child-container'>
                    <div className='navInsideAsideMenuForMobileUsers'>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <SearchOutlinedIcon style={{ fontSize: '1.5vw' }} className='mobile-Searchbar-icon' />
                            <form onSubmit={searchSubmitHandler}>
                                <input className='mobile-searchbar-input' onInput={ event => {setKeyword(event.target.value)}} onClick={ () => showSearchResults ? setShowSearchResults(false) : setShowSearchResults(true) } placeholder='Search for Movies/TV Shows' />
                            </form>
                            <div className='mobile-Searchbar-filter-icon'><TuneIcon style={{ fontSize: '1vw' }} /></div>
                                <div style={ showSearchResults ? {display: 'block'} : {display: 'none'} } className='mobile-search-content-container'>
                                    <Link to={`/search/${keyword}`} style={{ color: 'white', textDecoration: 'none' }}><p style={{ marginLeft: '1vh' }}>click here to search for "{keyword}"</p></Link>
                                    { searchApiLoaded ?
                                    searchResults.slice(0, 10).map( item =>
                                        <Link to={`/movieDtails/${item.media_type}/${item.id}`} style={{ color: '#a3a3a3', textDecoration: 'none' }}>
                                            <div className='mobile-navbar-inner-search-results'>
                                                <img className='mobile-navbar-search-results-details-image' src={item.poster_path === undefined || item.poster_path === null ? `${poster404}` : `https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
                                                <div>
                                                    <div title={item.title || item.original_name}>{item.title || item.original_name}</div>
                                                    <div>{item.media_type}</div>
                                                    <div>{item.release_date}</div>
                                                </div>
                                            </div>
                                        </Link> )
                                    : <p></p> }
                            </div>
                        </div>
                    </div>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/`}><label className={ asideMenuSection === "home" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "home" ? <HomeIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <HomeIconOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "home" ? "text-aside-menu-active" : "text-aside-menu"}>Home</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "home" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label ></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/discover`}><label className={ asideMenuSection === "discover" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "discover" ? <ExploreIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <ExploreOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "discover" ? "text-aside-menu-active" : "text-aside-menu"}>Discovery</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "discover" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/community`}><label className={ asideMenuSection === "community" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "community" ? <GroupsIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <GroupsOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "community" ? "text-aside-menu-active" : "text-aside-menu"}>Community</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "community" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/upcoming`}><label className={ asideMenuSection === "upcoming" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "upcoming" ? <AlarmIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <AlarmOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "upcoming" ? "text-aside-menu-active" : "text-aside-menu"}>Coming Soon</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "upcoming" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                        {/* <div className='trying-top-make-it-to-right-red-notification-bubble'>2</div> */}
                    </label></Link>

                    <hr className={ hideAsideMenu === 'show' ? 'hr-asideMenu' : 'hr-menu-btn-clicked-asideMenu'}/>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/recent`}><label className={ asideMenuSection === "recent" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "recent" ? <AccessTimeIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <AccessTimeOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "recent" ? "text-aside-menu-active" : "text-aside-menu"}>Recent</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "recent" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/favorites`}><label className={ asideMenuSection === "favorites" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "favorites" ? <FavoriteBorder id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <FavoriteBorderOutlinedIcon id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "favorites" ? "text-aside-menu-active" : "text-aside-menu"}>Favorites</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "favorites" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/bookmarked`}><label className={ asideMenuSection === "bookmarked" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "bookmarked" ? <BookmarkBorderIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <BookmarkBorderOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "bookmarked" ? "text-aside-menu-active" : "text-aside-menu"}>Bookmarked</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "bookmarked" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/top-rated`}><label className={ asideMenuSection === "top-rated" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "top-rated" ? <StarBorderIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <StarBorderOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "top-rated" ? "text-aside-menu-active" : "text-aside-menu"}>Top Rated</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "top-rated" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <hr className={ hideAsideMenu === 'show' ? 'hr-asideMenu' : 'hr-menu-btn-clicked-asideMenu'}/>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/settings`}><label className={ asideMenuSection === "settings" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "settings" ? <SettingsIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <SettingsOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "settings" ? "text-aside-menu-active" : "text-aside-menu"}>Settings</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "settings" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>

                    <Link style={{ color: '#5e5e62', textDecoration: 'none'}} to={`/help`}><label className={ asideMenuSection === "help" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" }>
                        {asideMenuSection === "help" ? <InfoIcon id="fixMobileMuiIconSize" className="icon-aside-menu-active" /> : <InfoOutlined id="fixMobileMuiIconSize" className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "help" ? "text-aside-menu-active" : "text-aside-menu"}>Help</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "help" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label></Link>
                </div>
            </div>
        </div>
    )
}

export default AsideMenu
