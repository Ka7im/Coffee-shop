import './body.scss';

import Divider from '../divider/divider';
import CoffeeList from '../coffee-list/coffee-list';
import {Component} from 'react';
import nextId from 'react-id-generator';

import aromisto from '../../images/aromisto.png';

class Body extends Component {

    state = {
        data: [
            {id: nextId(), img: aromisto, title: 'Solimo Coffee Beans 2 kg', country: 'India', price: 10.73},
            {id: nextId(), img: aromisto, title: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 15.99},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        ]
    }

    render() {
        return (
            <>
            <div className="about-us">
                <div className="container">
                    <h2 className="about-us__title">About Us</h2>
                    <Divider color={'black'}/>
                    <p className="about-us__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className="about-us__descr">
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>
            <div className="our-best">
                <div className="container">
                    <h2 className='our-best__title'>Our best</h2>
                    <CoffeeList data={this.state.data} best={true}/>
                </div>
            </div>
            </>
        );
    }
}

export default Body;