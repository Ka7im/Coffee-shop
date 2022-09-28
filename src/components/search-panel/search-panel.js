import {Component} from 'react';

import './search-panel.scss';

class SearchPanel extends Component {
    state = {
        term: ''
    }

    searchCoffee = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.searchCoffee(term);
    }

    render() {
        return (
            <div className="search-panel">
                <label htmlFor="search" className="search-panel__label">Lookiing for</label>
                <input type="text" 
                       className="search-panel__input" 
                       id="search" 
                       placeholder='start typing here...'
                       value={this.state.term}
                       onChange={(e) => this.searchCoffee(e)} />
            </div>
        );
    }
}

export default SearchPanel;