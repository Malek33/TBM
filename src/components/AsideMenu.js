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
import { Link } from 'react-router-dom';

// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

//nav color #1a161f
//activeElement color #e91b23
//notActiveElement color #5e5e62

function AsideMenu(props) {

    const[ asideMenuSection, setAsideMenuSection ] = useState("home")
    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")

    //update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.localStorage.setItem("AsideMenuVisibility", hideAsideMenu === "show" ? "show" : "hide")
    window.dispatchEvent(new Event("storage"));

    return (
        <div className='Aside-menu-parent-container'>
                <div className='website-logo-with-aside-menu-btn-container'>
                    <MenuIcon onClick={ () => hideAsideMenu === 'show' ? setHideAsideMenu("hide") : setHideAsideMenu("show")} style={{ fontSize: '1.3vw' }} className='aside-menu-slider-btn'/>
                    <Link to={`/`} ><img className={hideAsideMenu === "show" ? 'website-logo-aside-menu' : 'website-mini-logo-aside-menu'} src={ hideAsideMenu === "show" ? websiteLargeLogo : websiteMiniLogo } alt="logo" /></Link>
                </div>
            <div className={ hideAsideMenu === 'show' ? 'Aside-menu-child-container' : 'Aside-menu-btn-clicked-menu-child-container' }>


                <div className='Aside-menu-child-child-container'>

                    <label className={ asideMenuSection === "home" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("home")}>
                        {asideMenuSection === "home" ? <HomeIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <HomeIconOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "home" ? "text-aside-menu-active" : "text-aside-menu"}>Home</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "home" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label >

                    <label className={ asideMenuSection === "discovery" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("discovery")}>
                        {asideMenuSection === "discovery" ? <ExploreIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <ExploreOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "discovery" ? "text-aside-menu-active" : "text-aside-menu"}>Discovery</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "discovery" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <label className={ asideMenuSection === "community" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("community")}>
                        {asideMenuSection === "community" ? <GroupsIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <GroupsOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "community" ? "text-aside-menu-active" : "text-aside-menu"}>Community</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "community" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <label className={ asideMenuSection === "ComingSoon" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("ComingSoon")}>
                        {asideMenuSection === "ComingSoon" ? <AlarmIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <AlarmOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "ComingSoon" ? "text-aside-menu-active" : "text-aside-menu"}>Coming Soon</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "ComingSoon" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                        {/* <div className='trying-top-make-it-to-right-red-notification-bubble'>2</div> */}
                    </label>

                    <hr className={ hideAsideMenu === 'show' ? 'hr-asideMenu' : 'hr-menu-btn-clicked-asideMenu'}/>

                    <label className={ asideMenuSection === "Recent" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Recent")}>
                        {asideMenuSection === "Recent" ? <AccessTimeIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <AccessTimeOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "Recent" ? "text-aside-menu-active" : "text-aside-menu"}>Recent</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "Recent" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <label className={ asideMenuSection === "Favorites" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Favorites")}>
                        {asideMenuSection === "Favorites" ? <FavoriteBorder style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <FavoriteBorderOutlinedIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "Favorites" ? "text-aside-menu-active" : "text-aside-menu"}>Favorites</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "Favorites" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <label className={ asideMenuSection === "Bookmarked" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Bookmarked")}>
                        {asideMenuSection === "Bookmarked" ? <BookmarkBorderIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <BookmarkBorderOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "Bookmarked" ? "text-aside-menu-active" : "text-aside-menu"}>Bookmarked</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "Bookmarked" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <label className={ asideMenuSection === "TopRated" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("TopRated")}>
                        {asideMenuSection === "TopRated" ? <StarBorderIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <StarBorderOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "TopRated" ? "text-aside-menu-active" : "text-aside-menu"}>Top Rated</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "TopRated" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <hr className={ hideAsideMenu === 'show' ? 'hr-asideMenu' : 'hr-menu-btn-clicked-asideMenu'}/>

                    <label className={ asideMenuSection === "Settings" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Settings")}>
                        {asideMenuSection === "Settings" ? <SettingsIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <SettingsOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "Settings" ? "text-aside-menu-active" : "text-aside-menu"}>Settings</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "Settings" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>

                    <label className={ asideMenuSection === "Help" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Help")}>
                        {asideMenuSection === "Help" ? <InfoIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <InfoOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
                        { hideAsideMenu === "show" ? <label className={ asideMenuSection === "Help" ? "text-aside-menu-active" : "text-aside-menu"}>Help</label> : <label className="hide"></label> }
                        { hideAsideMenu === "show" ? <div className={ asideMenuSection === "Help" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div> : <div className="hide"></div> }
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AsideMenu
