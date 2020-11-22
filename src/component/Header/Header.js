import './Header.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

function Header() {
    return (
        <div className="header">
            <h1><Icon icon={locationIcon} /> Wildfire Tracker (Powered By NASA)</h1>
        </div>
    )
}

export default Header;
