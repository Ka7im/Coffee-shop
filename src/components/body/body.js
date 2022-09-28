import './body.scss';

import Divider from '../divider/divider';
import CoffeeList from '../coffee-list/coffee-list';
import {Component} from 'react';
import women from '../../images/coffee_women.jpg';
import Panel from '../panel/panel';


class Body extends Component {
    render() {
        switch(this.props.page) {
            case 'coffee': return (
                <div className='about-our-beans'>
                    <div className="container">
                        <div className="about-our-beans__wrapper">
                            <img src={women} alt="women" className='about-our-beans__women'/>
                            <div className="about-our-beans__text">
                                <div className="about-our-beans__title">About our beans</div>
                                <Divider color={'black'} />
                                <div className="about-our-beans__descr">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />
                                    Afraid at highly months do things on at. Situation <br /> recommend objection do intention <br />
                                    so questions.<br />
                                    As greatly removed calling pleased improve an. Last ask him cold feel <br />
                                    met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                                    is song that held help face.
                                </div>
                            </div>
                        </div>

                        <div className="about-our-beans__line"></div>

                        <Panel searchCoffee={this.props.searchCoffee} />
                        <CoffeeList data={this.props.data} best={false}/>
                    </div>
                </div>
            );
            default: return (
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
                        <CoffeeList data={this.props.data} best={true}/>
                    </div>
                </div>
                </>
            );
        }
    }
}

export default Body;