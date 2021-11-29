import './styles.css';
//import {Button} from '../button';
import {
    Link
} from 'react-router-dom';

export const PlantItem  = (props) => {
    const {image, name, price, description, id} = props;

    return (
        <div className="plant">
            <img className="plant-photo" src={image} alt={name + "photo"}/>
            <h1 className="plant-name">{name}</h1>
            <p className="plant-description">{description}</p>
            <p className="plant-price">${price}</p>
        </div>
    )
}