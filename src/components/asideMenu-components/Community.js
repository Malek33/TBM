import React from 'react'
import './style/main.css'

function Community() {

    window.localStorage.setItem("asideMenuSection", "community")
    window.dispatchEvent(new Event("storageChangesAsideMenuSction"));

    return (
        <div>
            <h1>Community</h1>
        </div>
    )
}

export default Community
