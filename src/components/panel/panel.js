import SearchPanel from "../search-panel/search-panel";
import FilterPanel from "../filter-panel/filter-panel";

import './panel.scss';

function Panel({searchCoffee}) {
    return (
        <div className="panel">
            <SearchPanel searchCoffee={searchCoffee} />
            <FilterPanel />
        </div>
    );
}

export default Panel;