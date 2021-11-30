import './styles.css';
import {
    Link
} from 'react-router-dom';
import {Button} from '../button';

export const PlantItem  = (props) => {
    //define props for item card
    const {image, name, price, description, id} = props;

    //return item card that uses props
    return (
        <div className="plant">
            {/*link image to details page*/}
            <Link to={`/plant/${id}`}>
                {/*define plant image using prop*/}
                <img className="plant-photo" src={image} alt={name + "photo"}/>
            </Link>
            {/*link name to details page*/}
            <Link to={`/plant/${id}`}>
                {/*define plant name using prop*/}
                <h1 className="plant-name">{name}</h1>
            </Link>
            {/*define plant description using prop*/}
            <p className="plant-description">{description}</p>
            {/*define plant price using prop*/}
            <p className="plant-price">${price}</p>
            {/*use button component to add item to cart*/}
            <Button text="Add to Cart" type="primary" isDisabled={false}/>
        </div>
    )
}