import './header.scss';
import Nav from '../nav/nav';
import Divider from '../divider/divider';

function Header({page, selectPage, onSelectItem}) {
    switch(page) {
        case 'goods' : return ( 
            <header className="preview-goods">
                <div className="container">
                    <Nav color={'white'} selectPage={selectPage} />
                    <h1>For your pleasure</h1>
                </div>
            </header>);

        case 'coffee': return (
            <header className="preview-coffee">
                <div className="container">
                    <Nav color={'white'} selectPage={selectPage} />
                    <h1>Our Coffee</h1>
                </div>
            </header>);

        default: return (
            <header className="preview-main">
                <div className="container">
                    <Nav color={'white'} selectPage={selectPage}/>
                    <h1>Everything You Love About Coffee</h1>
                    <Divider color={'white'}/>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button className="preview-main__btn">More</button>
                </div>
            </header>);
    }
    
}
export default Header;