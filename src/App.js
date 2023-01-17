/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AsideMenu from "./components/AsideMenu";
import Navbar from "./components/Navbar";
import MoviesGroupper from './components/MoviesGroupper';
import P404 from "./components/P404";
import MovieDetails from "./components/MovieDetails";
import MediaSearch from "./components/MediaSearch";

function App() {

    const [movieGenderisActive, setMovieGenderisActive] = useState("");
    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    //update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
      setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
  })
    const AppfuncHomeMovieGender = () => {
      return(
      <div className={ hideAsideMenu === "show" ? "genres-container" : "aside-menu-hidden-genres-container" } >
        <a className={ movieGenderisActive === 'Action' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Action' ? setMovieGenderisActive('') : setMovieGenderisActive('Action') } href>Action</a>
        <a className={ movieGenderisActive === 'Adventure' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Adventure' ? setMovieGenderisActive('') : setMovieGenderisActive('Adventure') } href>Adventure</a>
        <a className={ movieGenderisActive === 'Animation' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Animation' ? setMovieGenderisActive('') : setMovieGenderisActive('Animation') } href>Animation</a>
        <a className={ movieGenderisActive === 'Comedy' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Comedy' ? setMovieGenderisActive('') : setMovieGenderisActive('Comedy') } href>Comedy</a>
        <a className={ movieGenderisActive === 'Crime' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Crime' ? setMovieGenderisActive('') : setMovieGenderisActive('Crime') } href>Crime</a>
        <a className={ movieGenderisActive === 'Documentary' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Documentary' ? setMovieGenderisActive('') : setMovieGenderisActive('Documentary') } href>Documentary</a>
        <a className={ movieGenderisActive === 'Drama' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Drama' ? setMovieGenderisActive('') : setMovieGenderisActive('Drama') } href>Drama</a>
        <a className={ movieGenderisActive === 'Family' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Family' ? setMovieGenderisActive('') : setMovieGenderisActive('Family') } href>Family</a>
        <a className={ movieGenderisActive === 'Fantasy' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Fantasy' ? setMovieGenderisActive('') : setMovieGenderisActive('Fantasy') } href>Fantasy</a>
        <a className={ movieGenderisActive === 'History' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'History' ? setMovieGenderisActive('') : setMovieGenderisActive('History') } href>History</a>
        <a className={ movieGenderisActive === 'Horror' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Horror' ? setMovieGenderisActive('') : setMovieGenderisActive('Horror') } href>Horror</a>
        <a className={ movieGenderisActive === 'Music' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Music' ? setMovieGenderisActive('') : setMovieGenderisActive('Music') } href>Music</a>
        <a className={ movieGenderisActive === 'Mystery' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Mystery' ? setMovieGenderisActive('') : setMovieGenderisActive('Mystery') } href>Mystery</a>
        <a className={ movieGenderisActive === 'Romance' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Romance' ? setMovieGenderisActive('') : setMovieGenderisActive('Romance') } href>Romance</a>
        <a className={ movieGenderisActive === 'ScienceFiction' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'ScienceFiction' ? setMovieGenderisActive('') : setMovieGenderisActive('ScienceFiction') } href>ScienceFiction</a>
        <a className={ movieGenderisActive === 'Thriller' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Thriller' ? setMovieGenderisActive('') : setMovieGenderisActive('Thriller') } href>Thriller</a>
        <a className={ movieGenderisActive === 'TVMovie' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'TVMovie' ? setMovieGenderisActive('') : setMovieGenderisActive('TVMovie') } href>TVMovie</a>
        <a className={ movieGenderisActive === 'War' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'War' ? setMovieGenderisActive('') : setMovieGenderisActive('War') } href>War</a>
        <a className={ movieGenderisActive === 'Western' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Western' ? setMovieGenderisActive('') : setMovieGenderisActive('Western') } href>Western</a>
      </div>
    )}

    const AppfuncMediaPage = (props) => {
      return (
        <div>
          <AsideMenu />
          <div style={ hideAsideMenu === "show" ? { marginLeft: '16vw' } : { marginLeft: '5vw' } }>
            <Navbar />
            <div style={{ marginTop: '9vh' }}>
              { props.pageName === "MoviesGroupper" ? <div><AppfuncHomeMovieGender/><br/></div> : null}
              <props.page/>
            </div>
          </div>
        </div>
      )
    }



  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<AppfuncMediaPage pageName={"MoviesGroupper"} page={MoviesGroupper} />}/>
        <Route path={"/movieDtails/:mediaType/:id"} element={<AppfuncMediaPage page={MovieDetails} />}/>
        <Route path={"/search/:keyword"} element={<AppfuncMediaPage page={MediaSearch} />}/>
        <Route path={"*"} element={<P404/>}/>
      </Routes>
    </div>
  );
}

export default App;
