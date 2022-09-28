import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import {Component} from 'react';
import nextId from 'react-id-generator';

import aromisto from '../../images/aromisto.png';

class App extends Component {
    state = {
        data: [
            {id: nextId(), img: aromisto, title: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 10.73},
            {id: nextId(), img: aromisto, title: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 15.99},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        ],
        page: 'main',
        term: ''
    }

    selectPage = (page) => {
        this.setState({page});
    }

    searchCoffee = (term) => {
        this.setState({term});
    }

    searchData = (data, term) => {
        if (term.lenght === 0) {
            return data;
        } else {
            return data.filter(item => {
                return item.title.indexOf(term) > -1;
            })
        }
    }
   
    render() {
        const searcedData = this.searchData(this.state.data, this.state.term);
        return (
            <>
                <Header page={this.state.page} selectPage={this.selectPage}/>
                <Body data={searcedData} page={this.state.page} searchCoffee={this.searchCoffee}/>
                <Footer selectPage={this.selectPage}/>
            </>
        );
    }
}

export default App;