import './coffee-list-item.scss';

function CoffeeListItem({img, title, price}) {
    return(
        <div className="coffee-list-item">
            <img src={img} alt="" />
            <div className="coffee-list-item__title">{title}</div>
            <div className="coffee-list-item__price">{`${price}$`}</div>
        </div>
    )
}

export default CoffeeListItem;