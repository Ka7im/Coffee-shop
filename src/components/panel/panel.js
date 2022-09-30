import SearchPanel from "../search-panel/search-panel";
import FilterPanel from "../filter-panel/filter-panel";

import './panel.scss';

function Panel({searchCoffee, searchCountry}) {
    return (
        <div className="panel">
            <SearchPanel searchCoffee={searchCoffee} />
            <FilterPanel searchCountry={searchCountry} />
        </div>
    );
}

export default Panel;