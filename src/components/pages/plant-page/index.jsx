import "./styles.css";
import { 
    useParams 
} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import PlantContext from "../../../context/plant-context";
import {Button} from '../../button';

export const PlantPage = (props) => {
    //use the use params hook to define the id
    const {id} = useParams();

    //use the use state hook to define the plant state
    const [plant, setPlant] = useState({});

    //use the use context hook to define the global state using the custom context
    const globalState = useContext(PlantContext);

    //use the use effect hook to determine which plant has been selected
    useEffect (() => {
        //find the specific plant in the global state using the plant's id
        const plantItem = globalState.plants.find(
            (plantItem) => plantItem.id.stringValue === id
        );
        //set the plant to the found plant
        setPlant(plantItem);
    },[])

    //if there is a plant, return the details about the plant
    if (plant) {
        return (
            <div className="plant-page">
                {/*get the details from the selected plant in the api and display them on the page*/}
                <h1 className="plants-title">{plant.plant?.stringValue}</h1>
                <div className="image-container">
                    <img className="image" src={plant.image?.stringValue} alt="Plant Image"/>
                </div>
                <div className="text-container">
                    <p className="price">${plant.price?.stringValue}</p>
                    <p className="description">{plant.description?.stringValue}</p>
                    <p className="description-long">{plant.descriptionLong?.stringValue}</p>
                    <p className="care">Plant Care</p>
                    <ul className="care-list">
                        <li>
                            <p className="light">{plant.light?.stringValue}</p>
                        </li>
                        <li>
                            <p className="water">{plant.water?.stringValue}</p>
                        </li>
                    </ul>
                    <Button text="Add to Cart" type="primary" isDisabled={false}/>
                </div>
            </div>
        )
    }

    //if there is no plant with the matching id, display that the plant doesn't exist
    else {
        return <p>Sorry, this plant does not exist in our shop!</p>
    }
}