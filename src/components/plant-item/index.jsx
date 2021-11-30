import './styles.css';
import {
    Link
} from 'react-router-dom';
import {Button} from '../button';

export const PlantItem  = (props) => {
    const {image, name, price, description, id} = props;

    return (
        <div className="plant">
            <Link to={`/plant/${id}`}>
                <img className="plant-photo" src={image} alt={name + "photo"}/>
            </Link>
            <Link to={`/plant/${id}`}>
                <h1 className="plant-name">{name}</h1>
            </Link>
            <p className="plant-description">{description}</p>
            <p className="plant-price">${price}</p>
            <Button text="Add to Cart" type="primary" isDisabled={false}/>
        </div>
    )
}