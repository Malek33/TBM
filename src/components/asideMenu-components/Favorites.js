import React from 'react'
import './style/main.css'

function Favorites() {

    window.localStorage.setItem("asideMenuSection", "favorites")
    window.dispatchEvent(new Event("storageChangesAsideMenuSction"));

    return (
        <div>
            <h1>Favorites</h1>
        </div>
    )
}

export default Favorites
