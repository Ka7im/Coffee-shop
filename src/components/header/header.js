import './header.scss';
import Nav from '../nav/nav';
import Divider from '../divider/divider';

function Header() {
    return (
            <header className="preview">
                <div className="container">
                    <Nav color={'white'}/>
                    <h1>Everything You Love About Coffee</h1>
                    <Divider color={'white'}/>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button className="preview__btn">More</button>
                </div>
            </header>
    );
}
export default Header;