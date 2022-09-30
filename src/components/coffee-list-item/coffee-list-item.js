import './coffee-list-item.scss';

function CoffeeListItem({id, img, title, price, country, page, onSelectItem}) {
    switch(page) {
        case 'goods' : return (
            <div className="coffee-list-item-goods" onClick={() => onSelectItem(true, id)}>
                <img src={img} alt="" />
                <div className="coffee-list-item-goods__title">{title}</div>
                <div className="coffee-list-item-goods__country">{country}</div>
                <div className="coffee-list-item-goods__price">{`${price}$`}</div>
            </div>
        );
        case 'coffee' : return(
            <div className="coffee-list-item" onClick={() => onSelectItem(true, id)}>
                <img src={img} alt="" />
                <div className="coffee-list-item__title">{title}</div>
                <div className="coffee-list-item__country">{country}</div>
                <div className="coffee-list-item__price">{`${price}$`}</div>
            </div>
        );
        default: return(
            <div className="coffee-list-item-best">
                <img src={img} alt="" />
                <div className="coffee-list-item-best__title">{title}</div>
                <div className="coffee-list-item-best__price">{`${price}$`}</div>
            </div>
        );
    }
    
}

export default CoffeeListItem;