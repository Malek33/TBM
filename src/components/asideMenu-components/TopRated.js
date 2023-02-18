import React from 'react'
import './style/main.css'

function TopRated() {

    window.localStorage.setItem("asideMenuSection", "topRated")
    window.dispatchEvent(new Event("storageChangesAsideMenuSction"));

    return (
        <div>
            <h1>TopRated</h1>
        </div>
    )
}

export default TopRated
