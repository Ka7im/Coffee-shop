import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.scss';

function CoffeeList({data, page, onSelectItem}) {
        const elements = data.map((item) => {
            const {id, ...itemProps} = item;
            return(
                <CoffeeListItem key={id} 
                                {...itemProps} 
                                page={page} 
                                onSelectItem={onSelectItem}
                                id={id} />
            );
        })

        return(
            <ul className="coffee-list">
                {elements}
            </ul>
        );
}

export default CoffeeList;