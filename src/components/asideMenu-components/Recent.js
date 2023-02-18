import React from 'react'
import './style/main.css'

function Recent() {

    window.localStorage.setItem("asideMenuSection", "recent")
    window.dispatchEvent(new Event("storageChangesAsideMenuSction"));

    return (
        <div>
            <h1>Recent</h1>
        </div>
    )
}

export default Recent
