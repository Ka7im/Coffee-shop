import {Component} from 'react';

import './filter-panel.scss';

class FilterPanel extends Component {

    state = {
        term: ''
    }
    filterElement = (e) => {
        const filter = e.target.textContent;
        this.props.searchCountry(filter);
    };

    render() {
        return (
            <div className="filter-panel">
                <div className="filter-panel__label">Or filter</div>
                <div className="filter-panel__btn-group">
                    <div className="filter-panel__btn" onClick={this.filterElement}>Brazil</div>
                    <div className="filter-panel__btn" onClick={this.filterElement}>Kenya</div>
                    <div className="filter-panel__btn" onClick={this.filterElement}>Columbia</div>
                </div>
            </div>
        );
    }
}

export default FilterPanel;