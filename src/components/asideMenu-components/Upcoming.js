import React from 'react'
import './style/main.css'

function Upcoming() {

    window.localStorage.setItem("asideMenuSection", "upcoming")
    window.dispatchEvent(new Event("storageChangesAsideMenuSction"));

    return (
        <div>
            <h1>upcoming</h1>
        </div>
    )
}

export default Upcoming
