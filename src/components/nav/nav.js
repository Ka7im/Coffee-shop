import logo from '../../icons/logo.png';
import blackLogo from '../../icons/logo_black.png';
import './nav.scss';

function Nav({color}) {
    return (
        <nav className='nav'>
            <div className={`nav__item ${color}`}>
                <img src={color === 'black' ? blackLogo : logo} alt="coffeeBean" />
                Coffee house
            </div>
            <div className={`nav__item ${color}`}>
                Our coffee
            </div>
            <div className={`nav__item ${color}`}>
                For your pleasure
            </div>
        </nav>
    );
}

export default Nav;