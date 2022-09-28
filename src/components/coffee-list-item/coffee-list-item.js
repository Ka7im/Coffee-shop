import './coffee-list-item.scss';

function CoffeeListItem({img, title, price, country, best}) {
    switch(best) {
        case false : return(
            <div className="coffee-list-item">
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