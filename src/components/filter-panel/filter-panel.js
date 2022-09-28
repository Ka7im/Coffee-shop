import {Component} from 'react';

import './filter-panel.scss';

class FilterPanel extends Component {


    render() {
        return (
            <div className="filter-panel">
                <div className="filter-panel__label">Or filter</div>
                <div className="filter-panel__btn-group">
                    <div className="filter-panel__btn">Brazil</div>
                    <div className="filter-panel__btn">Kenya</div>
                    <div className="filter-panel__btn">Columbia</div>
                </div>
            </div>
        );
    }
}

export default FilterPanel;