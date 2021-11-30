import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import {PlantItem} from '../../plant-item';
import PlantContext from "../../../context/plant-context";

export const PlantHomePage = () => {

  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  const globalState = useContext(PlantContext);

  useEffect(
    () => {

      getPlants();
    }, []
  );

  const getPlants = async() => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-assignment-03/databases/(default)/documents/plants/')
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((item) => {
        return item.fields
      });

      console.log(formattedData);

      setPlants(formattedData); 
      globalState.initializePlants(formattedData); 
      setLoading(false);  

    } catch (err) {
      console.log (err);
      setLoading(false);
    }
  }

  return (
    <div className="plants-page">
      <h1 className="plants-title">Shop Our Plants</h1>
      <div className="plants-container">
        {
          plants.map((plant) => (
            <PlantItem 
              key={plant.id.stringValue}
              image={plant.image.stringValue} 
              name={plant.plant.stringValue} 
              description={plant.description.stringValue} 
              price={plant.price.stringValue} 
              id={plant.id.stringValue}>
            </PlantItem>
          ))
        }
        {
          loading && <p>Loading plants...</p>
        }
      </div>
    </div>
  );
};
