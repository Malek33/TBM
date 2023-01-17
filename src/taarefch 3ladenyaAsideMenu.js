// function AsideMenu() {

//     const[ asideMenuSection, setAsideMenuSection ] = useState("home")
//     const[ hideAsideMenu, setHideAsideMenu ] = useState("show")

//     return (
//         <div className='Aside-menu-parent-container'>
//             <div className='Aside-menu-child-container'>

//                 <div className='website-logo-with-aside-menu-btn-container'>
//                     <MenuIcon onClick={ () => hideAsideMenu === 'show' ? setHideAsideMenu("hide") : setHideAsideMenu("show")} style={{ fontSize: '1.3vw' }} className='aside-menu-slider-btn'/>
//                     <img className='website-logo-aside-menu' src={websiteLogo} alt="logo" />
//                 </div>

//                 <div className='Aside-menu-child-child-container'>

//                     <label className={ asideMenuSection === "home" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("home")}>
//                         {asideMenuSection === "home" ? <HomeIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <HomeIconOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "home" ? "text-aside-menu-active" : "text-aside-menu"}>Home</label>
//                         <div className={ asideMenuSection === "home" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label >

//                     <label className={ asideMenuSection === "discovery" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("discovery")}>
//                     {asideMenuSection === "discovery" ? <ExploreIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <ExploreOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "discovery" ? "text-aside-menu-active" : "text-aside-menu" }>Discovery</label>
//                         <div className={ asideMenuSection === "discovery" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <label className={ asideMenuSection === "community" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("community")}>
//                     {asideMenuSection === "community" ? <GroupsIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <GroupsOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "community" ? "text-aside-menu-active" : "text-aside-menu" }>Community</label>
//                         <div className={ asideMenuSection === "community" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <label className={ asideMenuSection === "ComingSoon" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("ComingSoon")}>
//                         {asideMenuSection === "ComingSoon" ? <AlarmIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <AlarmOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "ComingSoon" ? "text-aside-menu-active" : "text-aside-menu" }>Coming soon</label>
//                         <div className={ asideMenuSection === "ComingSoon" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                         <div className='trying-top-make-it-to-right-red-notification-bubble'>2</div>
//                     </label>

//                     <hr className='hr-asideMenu'/>

//                     <label className={ asideMenuSection === "Recent" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Recent")}>
//                         {asideMenuSection === "Recent" ? <AccessTimeIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <AccessTimeOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "Recent" ? "text-aside-menu-active" : "text-aside-menu" }>Recent</label>
//                         <div className={ asideMenuSection === "Recent" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <label className={ asideMenuSection === "Favorites" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Favorites")}>
//                         {asideMenuSection === "Favorites" ? <FavoriteBorder style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <FavoriteBorderOutlinedIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "Favorites" ? "text-aside-menu-active" : "text-aside-menu" }>Favorites</label>
//                         <div className={ asideMenuSection === "Favorites" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <label className={ asideMenuSection === "Bookmarked" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Bookmarked")}>
//                         {asideMenuSection === "Bookmarked" ? <BookmarkBorderIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <BookmarkBorderOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "Bookmarked" ? "text-aside-menu-active" : "text-aside-menu" }>Bookmarked</label>
//                         <div className={ asideMenuSection === "Bookmarked" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <label className={ asideMenuSection === "TopRated" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("TopRated")}>
//                         {asideMenuSection === "TopRated" ? <StarBorderIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <StarBorderOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "TopRated" ? "text-aside-menu-active" : "text-aside-menu" }>Top Rated</label>
//                         <div className={ asideMenuSection === "TopRated" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <hr className='hr-asideMenu'/>

//                     <label className={ asideMenuSection === "Settings" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Settings")}>
//                         {asideMenuSection === "Settings" ? <SettingsIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <SettingsOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "Settings" ? "text-aside-menu-active" : "text-aside-menu" }>Settings</label>
//                         <div className={ asideMenuSection === "Settings" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>

//                     <label className={ asideMenuSection === "Help" ? "icon-text-aside-menu-active" : "icon-text-aside-menu" } onClick={ () => setAsideMenuSection("Help")}>
//                         {asideMenuSection === "Help" ? <InfoIcon style={{ fontSize: '1.3vw' }} className="icon-aside-menu-active" /> : <InfoOutlined style={{ fontSize: '1.3vw' }} className="icon-aside-menu" />}
//                         <label className={ asideMenuSection === "Help" ? "text-aside-menu-active" : "text-aside-menu" }>Help</label>
//                         <div className={ asideMenuSection === "Help" ? 'trying-top-make-it-to-right-red-bar-active' : "none-trying-top-make-it-to-right-red-bar-active" }></div>
//                     </label>
//                 </div>
//             </div>
//         </div>
//     )
// }


// .Aside-menu-parent-container{
//     color: #5e5e62;
//     position: fixed;
//     top: 0;
//     left: 0;
// }

// .Aside-menu-child-container{
//     background-color: #1a161f;
//     width: 13vw;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-left: 1vw;
// }

// .Aside-menu-child-child-container{
//     display: flex;
//     flex-direction: column;
//     row-gap: 1.5vw;
//     margin-top: 10vh;
//     font-size: 1vw;
// }

// label{
//     display: flex;
//     align-items: center;
// }

// .hr-asideMenu{
//     border: none;
//     width: 11vw;
//     height: 0.2vh;
//     border-radius: 100vh;
//     background-color: #414141;
//     margin-right: 1.5vw
// }

// .icon-aside-menu{
//     margin-right: 0.7vw;
// }

// .icon-text-aside-menu:hover{
//     color: white;
// }

// .icon-text-aside-menu{
//     cursor: pointer;
//     transition: 0.3s ease-in-out;
// }

// /* .icon-text-aside-menu-active{
//     animation: trying-to-make-it-right-red-bar-active-anim 0.6s linear 0s infinite alternate;
// } */

// .trying-top-make-it-to-right-red-bar-active{
//     display: block;
//     position: absolute;
//     right: 0vw;
//     background-color: #e91b23;
//     width: 0.3vw;
//     height: 3vh;
//     border-radius: 100vw 0vw 0vw 100vw;
// }

// .none-trying-top-make-it-to-right-red-bar-active{
//     display: none;
// }

// .icon-text-aside-menu label{
//     cursor: pointer;
// }

// .text-aside-menu-active{
//     color: white;
// }

// .icon-aside-menu-active{
//     margin-right: 0.7vw;
//     color: #e91b23;
// }

// .aside-menu-genre-section{
//     display: flex;
//     flex-wrap: wrap;
//     row-gap: 1vh;
//     color: #5e5e62;
//     justify-content: center;
// }

// .aside-menu-genre-btn{
//     background-color: #252525;
//     margin-right: 1vw;
//     padding: 1vh;
//     border-radius: 100vw;
//     cursor: pointer;
//     padding-bottom: 1.2vh;
//     transition: 0.3s ease-in-out;
// }

// .aside-menu-genre-btn:hover{
//     background-color: #414141;
//     margin-right: 1vw;
//     padding: 1vh;
//     border-radius: 100vw;
//     cursor: pointer;
//     padding-bottom: 1.2vh;
// }

// .aside-menu-genre-btn-active{
//     background-color: #e91b23;
//     color: black;
//     margin-right: 1vw;
//     padding: 1vh;
//     border-radius: 100vw;
//     cursor: pointer;
//     padding-bottom: 1.2vh;
// }

// td{
//     height:5vh;
//     text-align: center;
// }

// .trying-top-make-it-to-right-red-notification-bubble{
//     margin-left: 2vw;
//     background-color: #e91b23;
//     border-radius: 100%;
//     padding: 0.09vw 0.5vw 0.19vw 0.5vw;
//     color: #1a161f;
//     font-weight: bold;
//     transform: scale(0.9);
//     animation: trying-to-make-it-right-red-bar-active-anim 0.5s linear 0s infinite alternate;
// }

// @keyframes trying-to-make-it-right-red-bar-active-anim {
//     from {
//         transform:scale(0.7)
//       }
//       to {
//         transform:scale(0.85)
//       }
// }

// .website-logo-with-aside-menu-btn-container{
//     margin-top: 2.2vh;
//     /* background-color: blue; */
//     display: flex;
//     align-items: center;
//     gap: 1vw;
//     margin-left: -1vw;
// }

// .aside-menu-slider-btn{
//     border-radius: 100vw;
//     margin: 0.3vw;
//     cursor: pointer;
// }

// .aside-menu-slider-btn:hover{
//     background-color: #252525;
//     border-radius: 100vw;
//     margin: 0;
//     padding: 0.3vw;
// }

// .website-logo-aside-menu{
//     width: 9vw;
// }

// /* .visible{
//     display: block;
// }

// .invisible{
//     display: none;
// } */