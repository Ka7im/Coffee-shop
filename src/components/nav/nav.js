import logo from '../../icons/logo.png';
import blackLogo from '../../icons/logo_black.png';
import './nav.scss';

function Nav({color, selectPage}) {
    return (
        <nav className='nav'>
            <div className={`nav__item ${color}`}
                 onClick={() => selectPage('main', false)}>
                <img src={color === 'black' ? blackLogo : logo} alt="coffeeBean" />
                Coffee house
            </div>
            <div className={`nav__item ${color}`}
                 onClick={() => selectPage('coffee', false)}>
                Our coffee
            </div>
            <div className={`nav__item ${color}`}
                 onClick={() => selectPage('goods', false)}>
                For your pleasure
            </div>
        </nav>
    );
}

export default Nav;