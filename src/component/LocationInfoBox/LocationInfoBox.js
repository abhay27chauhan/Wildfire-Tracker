import React from 'react'
import './LocationInfoBox.css'

function LocationInfoBox({ info }) {
    return (
        <div className="location__info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;
