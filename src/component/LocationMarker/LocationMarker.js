import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import './LocationMarker.css'

function LocationMarker({ lat, lng, onClick }) {
    return (
        <div className="location__marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location__icon"/>    
        </div>
    )
}

export default LocationMarker;
