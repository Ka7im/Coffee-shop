import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.scss';

function CoffeeList({data, best}) {
        const elements = data.map((item) => {
            const {id, ...itemProps} = item;
            return(
                <CoffeeListItem key={id} {...itemProps} best={best} />
            );
        })

        return(
            <ul className="coffee-list">
                {elements}
            </ul>
        );
}

export default CoffeeList;