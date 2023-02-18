/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import './style/Navbar.css'
// import MalekPic from '../img/spider-malek.png'

import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
// import { account } from "../appwriteConfig";

import poster404 from '../img/poster404.png'

function Navbar() {
const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({});
  const [userImage, setUserImage] = useState('');
  const [userLogged, setUserLogged] = useState(false);

  const auth = getAuth();
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserDetails(user)
          setUserLogged(true)
          setUserImage(user.photoURL)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          console.log(user);
          // ...
        }
        else{
            setUserLogged(false)
        }
      });
}, [userDetails]);

//   useEffect(() => {
//     const getData = account.get();
//     getData.then(
//       function (res) {
//         setUserDetails(res);
//         console.log(res);
//       },
//       function (err) {
//         console.log(err);
//       }
//     );
//   }, []);

  const handleLogout = async () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log(auth);
      }).catch((error) => {
        // An error happened.
        console.error(error);
    });
    navigate('/login')
    // try {
    //   await account.deleteSession("current");
    //   navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
  };

    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    // update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
        setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
    })

    const [selectedMediaTypeNavbar, setSelectedMediaTypeNavbar] = useState(window.localStorage.getItem("navMediaType") || "movie")
    window.addEventListener('storage', () => {
        setSelectedMediaTypeNavbar(window.localStorage.getItem("navMediaType"))
    })

    const [keyword, setKeyword] = useState("");
    const [searchApiLoaded, setSearchApiLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState({});
    const [showParamsWindow, setShowParamsWindow] = useState(false);
    const [hideEmailNavBar, setHideEmailNavBar] = useState(false);

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
                        <li><Link to="/movie" className={ selectedMediaTypeNavbar === 'movie' ? 'navbar-a-active' : 'navbar-a' }>Movies</Link></li>
                        <li><Link to="/tv" className={ selectedMediaTypeNavbar === 'tv' ? 'navbar-a-active' : 'navbar-a' }>TV Shows</Link></li>
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
                                            <img className='navbar-search-results-details-image' src={item.poster_path === undefined || item.poster_path === null ? `${poster404}` : `https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw'}}>
                    <a className='icon-btn-beside-userpic-navbar'><SensorsOutlinedIcon style={{ fontSize: '1.3vw' }} /></a>
                    <a className='icon-btn-beside-userpic-navbar'><NotificationsNoneOutlinedIcon style={{ fontSize: '1.3vw' }} /></a>
                    <a onClick={ () => setShowParamsWindow(!showParamsWindow) } className='icon-btn-beside-userpic-navbar'><AppsOutlinedIcon style={{ fontSize: '1.3vw' }} /></a>
                        {
                            showParamsWindow ?
                                <div className='navBarParamsWindow-container'>
                                    <p onClick={ handleLogout }>disconnect</p>
                                    <p onClick={ () => setHideEmailNavBar(!hideEmailNavBar) }>hide email</p>
                                </div>
                            : null
                        }
                        {userLogged ?
                            <Link style={{ textDecoration: 'none' }} to={'/profile'}>
                                <div className='navbar-usersection-name-image-mail' style={{ display: 'flex', alignItems: 'center' }}>
                                    <img className='image-profile-pic-navbar' src={userImage} alt='profile pic' />
                                    <div style={{ marginRight: '0.5vw' }}>
                                        <label className='navbar-username'>{userDetails.displayName}</label>
                                        <label className={ hideEmailNavBar ? 'navbar-usermail-hide' : 'navbar-usermail' }>{userDetails.email}</label>
                                    </div>
                                </div>
                            </Link>
                        :
                        <Link style={{ textDecoration: 'none', color: 'white', marginRight: '3vw' }} to="/login">
                            <span className="movie-card-btn-watch-now">Login</span>
                        </Link>
                        }
                        {/* <KeyboardArrowDownOutlinedIcon style={{ marginRight: '1.5vw', fontSize: '1.3vw' }} /> */}
                </div>
            </div>
            <hr className='hr-navBar'/>
        </div>
    )
}

export default Navbar
