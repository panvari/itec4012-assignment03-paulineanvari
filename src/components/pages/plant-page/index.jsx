import "./styles.css";
import { 
    useParams 
} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import PlantContext from "../../../context/plant-context";

export const PlantPage = (props) => {
    const {id} = useParams();

    const [plant, setPlant] = useState({});

    const globalState = useContext(PlantContext);

    useEffect (() => {
        const plantItem = globalState.plants.find(
            (plantItem) => plantItem.id.stringValue === id
        );
        setPlant(plantItem);
        console.log(plantItem);
    },[])

    if (plant) {
        return (
            <div className="plant-page">
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
                </div>
            </div>
        )
    }

    else {
        return <p>Sorry, this plant does not exist in our shop!</p>
    }
}