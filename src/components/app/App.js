import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import {Component} from 'react';
import nextId from 'react-id-generator';

import aromisto from '../../images/aromisto.png';

class App extends Component {
    state = {
        data: [
            {id: nextId(), img: aromisto, title: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 10.73, description: 'First'},
            {id: nextId(), img: aromisto, title: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 15.99, description: 'Second'},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, description: 'Third'},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Fourth'},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Fifth'},
            {id: nextId(), img: aromisto, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Sixth'}
        ],
        page: 'main',
        term: '',
        country: '',
        isItemPage: false,
        selectedItemId: '' 
    }

    selectPage = (page, isItemPage) => {
        this.setState({page, isItemPage});
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

    searchCountry = (country) => {
        this.setState({country});
    }
   
    countryHandle = (datas, country) => {
        if (!country) {
            return datas;
        }

        return datas.filter(data => {
            return data.country === country;
        })
    } 
    
    onSelectItem = (isItemPage, selectedItemId) => {
        this.setState({isItemPage, selectedItemId});
    }

    findSelectedItem = (data, id) => {
        return data.find(item => item.id === id);
    }

    render() {
        const searcedData = this.searchData(this.state.data, this.state.term);
        const sendCountry = this.countryHandle(searcedData, this.state.country)
        return (
            <>
                <Header page={this.state.page} 
                        selectPage={this.selectPage}
                        onSelectItem={this.onSelectItem} />

                <Body data={sendCountry} 
                      page={this.state.page} 
                      searchCoffee={this.searchCoffee} 
                      searchCountry={this.searchCountry}
                      onSelectItem={this.onSelectItem}
                      isItemPage={this.state.isItemPage} 
                      selectedItem={this.findSelectedItem(sendCountry, this.state.selectedItemId)} />

                <Footer selectPage={this.selectPage} 
                        onSelectItem={this.onSelectItem} />
            </>
        );
    }
}

export default App;