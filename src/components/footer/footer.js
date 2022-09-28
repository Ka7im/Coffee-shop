import Nav from '../nav/nav';
import Divider from '../divider/divider';

import './footer.scss';

function Footer(props) {
    return (
        <footer className='footer'>
            <div className="container">
                <Nav color={'black'} selectPage={props.selectPage}/>
                <Divider color={'black'}/>
            </div>
        </footer>
    )
}

export default Footer;