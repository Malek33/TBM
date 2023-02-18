/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AppfuncHomeMovieGender = () => {

    const[ hideAsideMenu, setHideAsideMenu ] = useState(window.localStorage.getItem("AsideMenuVisibility") || "show")
    //update wenever licalstorage chnages https://stackoverflow.com/questions/56660153/how-to-listen-to-localstorage-value-changes-in-react
    window.addEventListener('storage', () => {
      setHideAsideMenu(window.localStorage.getItem("AsideMenuVisibility"))
  })

  const { id } = useParams()

  const [searchApiLoaded, setSearchApiLoaded] = useState(false);
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=b5d2609c326586f7f753f77b085a0b31&language=en-US`)
    .then(res => {
      setSearchResults(res.data.genres)
      setSearchApiLoaded(true)
      console.log('genresSercions:', res.data)
    })
  }, [])


    return(
    <div className={ hideAsideMenu === "show" ? "genres-container" : "aside-menu-hidden-genres-container" } >
        {searchApiLoaded ? searchResults.map( item =>
        <Link key={item.id} to={`/genre/${item.id}`} className={ id === `${item.id}` ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } style={{ marginRight: '1vw', padding: '0.5vw 1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap' }} >{item.name}</Link>
        ) : null}
    </div>
  )}
  //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

  // eslint-disable-next-line no-lone-blocks
  {/*
  <Link to={"/genre/action"} className={ movieGenderisActive === 'Action' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Action' ? setMovieGenderisActive('') : setMovieGenderisActive('Action') } href>Action</Link>
  <Link to={"/genre/adventure"} className={ movieGenderisActive === 'Adventure' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Adventure' ? setMovieGenderisActive('') : setMovieGenderisActive('Adventure') } href>Adventure</Link>
  <Link to={"/genre/animation"} className={ movieGenderisActive === 'Animation' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Animation' ? setMovieGenderisActive('') : setMovieGenderisActive('Animation') } href>Animation</Link>
  <Link to={"/genre/comedy"} className={ movieGenderisActive === 'Comedy' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Comedy' ? setMovieGenderisActive('') : setMovieGenderisActive('Comedy') } href>Comedy</Link>
  <Link to={"/genre/crime"} className={ movieGenderisActive === 'Crime' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Crime' ? setMovieGenderisActive('') : setMovieGenderisActive('Crime') } href>Crime</Link>
  <Link to={"/genre/documentary"} className={ movieGenderisActive === 'Documentary' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Documentary' ? setMovieGenderisActive('') : setMovieGenderisActive('Documentary') } href>Documentary</Link>
  <Link to={"/genre/drama"} className={ movieGenderisActive === 'Drama' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Drama' ? setMovieGenderisActive('') : setMovieGenderisActive('Drama') } href>Drama</Link>
  <Link to={"/genre/family"} className={ movieGenderisActive === 'Family' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Family' ? setMovieGenderisActive('') : setMovieGenderisActive('Family') } href>Family</Link>
  <Link to={"/genre/fantasy"} className={ movieGenderisActive === 'Fantasy' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Fantasy' ? setMovieGenderisActive('') : setMovieGenderisActive('Fantasy') } href>Fantasy</Link>
  <Link to={"/genre/History"} className={ movieGenderisActive === 'History' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'History' ? setMovieGenderisActive('') : setMovieGenderisActive('History') } href>History</Link>
  <Link to={"/genre/Horror"} className={ movieGenderisActive === 'Horror' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Horror' ? setMovieGenderisActive('') : setMovieGenderisActive('Horror') } href>Horror</Link>
  <Link to={"/genre/Music"} className={ movieGenderisActive === 'Music' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Music' ? setMovieGenderisActive('') : setMovieGenderisActive('Music') } href>Music</Link>
  <Link to={"/genre/Mystery"} className={ movieGenderisActive === 'Mystery' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Mystery' ? setMovieGenderisActive('') : setMovieGenderisActive('Mystery') } href>Mystery</Link>
  <Link to={"/genre/Romance"} className={ movieGenderisActive === 'Romance' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Romance' ? setMovieGenderisActive('') : setMovieGenderisActive('Romance') } href>Romance</Link>
  <Link to={"/genre/ScienceFiction"} className={ movieGenderisActive === 'ScienceFiction' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'ScienceFiction' ? setMovieGenderisActive('') : setMovieGenderisActive('ScienceFiction') } href>ScienceFiction</Link>
  <Link to={"/genre/Thriller"} className={ movieGenderisActive === 'Thriller' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Thriller' ? setMovieGenderisActive('') : setMovieGenderisActive('Thriller') } href>Thriller</Link>
  <Link to={"/genre/TVMovie"} className={ movieGenderisActive === 'TVMovie' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'TVMovie' ? setMovieGenderisActive('') : setMovieGenderisActive('TVMovie') } href>TVMovie</Link>
  <Link to={"/genre/War"} className={ movieGenderisActive === 'War' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'War' ? setMovieGenderisActive('') : setMovieGenderisActive('War') } href>War</Link>
  <Link to={"/genre/Western"} className={ movieGenderisActive === 'Western' ? 'aside-menu-genre-btn-active' : 'aside-menu-genre-btn' } onClick={ () => movieGenderisActive === 'Western' ? setMovieGenderisActive('') : setMovieGenderisActive('Western') } href>Western</Link> */}
  export default AppfuncHomeMovieGender
