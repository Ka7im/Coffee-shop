import coffeeBean from '../../icons/divider_img.png';
import blackCoffeeBean from '../../icons/divider_img_black.png';
import './divider.scss';


function Divider({color}) {
    return (
        <div className="divider">
            <div className={`divider__line ${color}`}></div>
            <img src={color === 'white' ? coffeeBean : blackCoffeeBean} alt="coffeeBean" />
            <div className={`divider__line ${color}`}></div>
        </div>
    );
}

export default Divider;