/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AsideMenu from "./components/AsideMenu";
import Navbar from "./components/Navbar";
import MoviesGroupper from './components/MoviesGroupper';
import TvShowsGroupper from './components/TvShowsGroupper'
import P404 from "./components/P404";
import MovieDetails from "./components/MovieDetails";
import MediaSearch from "./components/MediaSearch";
import GenrePage from "./components/GenrePage";
import AppfuncHomeMovieGender from "./components/AppfuncHomeMovieGender";
import Footer from "./components/Footer";
import { Offline, Online } from "react-detect-offline";
import connctionLostImage from './img/connection_lost.png'
import './index.css'
import ExploreMovies from './components/ExploreMovies'

import Help from "./components/asideMenu-components/Help";
import Discover from "./components/asideMenu-components/Discover";
import Community from "./components/asideMenu-components/Community";
import Upcoming from "./components/asideMenu-components/Upcoming";
import Recent from "./components/asideMenu-components/Recent";
import Favorites from "./components/asideMenu-components/Favorites";
import Bookmarked from "./components/asideMenu-components/Bookmarked";
import TopRated from "./components/asideMenu-components/TopRated";
import Settings from "./components/asideMenu-components/Settings";
import LoadingCubes from "./components/tools-components/loading-cubes/LoadingCubes";
import Profile from "./components/userData/Profile";
import Login from "./components/userData/Login";
import Signup from "./components/userData/Signup";

function App() {

    const [movieGenderisActive, setMovieGenderisActive] = useState("");
    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    //update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
      setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
  })


    const AppfuncMediaPage = (props) => {
      return (
        <div>
          <AsideMenu />
          <div style={ hideAsideMenu === "show" ? { marginLeft: '16vw' } : { marginLeft: '5vw' } }>
            <Navbar />
            <div style={{ marginTop: '9vh' }}>
              {/* <Offline>
                <br/>
                <div className="appHomeOfflinePage">
                  <img style={{width: '20vw'}} src={connctionLostImage} alt="connection lost" />
                  <h1>Your'e Offline</h1>
                </div>
              </Offline>
              <Online> */}
                { props.showGenreBar ? <div><AppfuncHomeMovieGender/><br/></div> : null}
                <props.page/>
                <img style={{ display: 'none' }} src={connctionLostImage} alt="connection lost" />
              {/* </Online> */}
            </div>
          </div>
          <br/>
          {/* <Footer/> */}
        </div>
      )
    }



  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<AppfuncMediaPage showGenreBar={true} pageName={"MoviesGroupper"} page={MoviesGroupper} />}/>
        <Route path={"/movie"} element={<AppfuncMediaPage showGenreBar={true} pageName={"MoviesGroupper"} page={MoviesGroupper} />}/>
        <Route path={"/tv"} element={<AppfuncMediaPage showGenreBar={true} pageName={"TvShowsGroupper"} page={TvShowsGroupper} />}/>

        <Route path={"/discover"} element={<AppfuncMediaPage showGenreBar={true} pageName={"Discover"} page={Discover} />}/>
        <Route path={"/community"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Community"} page={Community} />}/>
        <Route path={"/upcoming"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Upcoming"} page={Upcoming} />}/>
        <Route path={"/recent"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Recent"} page={Recent} />}/>
        <Route path={"/favorites"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Favorites"} page={Favorites} />}/>
        <Route path={"/bookmarked"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Bookmarked"} page={Bookmarked} />}/>
        <Route path={"/top-rated"} element={<AppfuncMediaPage showGenreBar={false} pageName={"TopRated"} page={TopRated} />}/>
        <Route path={"/settings"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Settings"} page={Settings} />}/>
        <Route path={"/help"} element={<AppfuncMediaPage showGenreBar={false} pageName={"Help"} page={Help} />}/>

        <Route path={"/explore/:mediaType/:section"} element={<AppfuncMediaPage showGenreBar={true} pageName={"ExploreMovies"} page={ExploreMovies} />}/>
        <Route path={"/genre/:id"} element={<AppfuncMediaPage showGenreBar={true} pageName={"GenrePage"} page={GenrePage} />}/>
        <Route path={"/movieDtails/:mediaType/:id"} showGenreBar={false} pageName={"MovieDetails"} element={<AppfuncMediaPage page={MovieDetails} />}/>
        <Route path={"/movieDtails/:mediaType/:id/season/:seasonNum"} showGenreBar={false} pageName={"MovieDetails"} element={<AppfuncMediaPage page={MovieDetails} />}/>
        <Route path={"/movieDtails/:mediaType/:id/season/:seasonNum/episode/:episodeNumber"} showGenreBar={false} pageName={"MovieDetails"} element={<AppfuncMediaPage page={MovieDetails} />}/>
        <Route path={"/search/:keyword"} showGenreBar={false} pageName={"MediaSearch"} element={<AppfuncMediaPage page={MediaSearch} />}/>
        <Route path={"/loader"} showGenreBar={false} pageName={"LoadingCubes"} element={<AppfuncMediaPage page={LoadingCubes} />}/>

        <Route path={"/profile"} showGenreBar={false} pageName={"Profile"} element={<AppfuncMediaPage page={Profile} />}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/signup"} element={<Signup/>}/>
        
        <Route path={"*"} element={<P404/>}/>
      </Routes>
    </div>
  );
}

export default App;
