import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import {PlantItem} from '../../plant-item';
import PlantContext from "../../../context/plant-context";

export const PlantHomePage = () => {

  //use the use state hook to define the plants state
  const [plants, setPlants] = useState([]);
  //use the use state hook to define the loading state
  const [loading, setLoading] = useState(true);

  //use the use context hook to define the globate state using custom context
  const globalState = useContext(PlantContext);

  //use the use effect hook to perform the get plant function
  useEffect(
    () => {

      getPlants();
    }, []
  );

  //defining the function to get plants from api
  const getPlants = async() => {
    try {
      //fetch data from firebase api
      const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-assignment-03/databases/(default)/documents/plants/')
      const data = await response.json();
      //map through api to get plant data
      const formattedData = data.documents.map((item) => {
        return item.fields
      });

      //set the plants to the formatted data from the api
      setPlants(formattedData); 
      //pass the formatted data to the intialize plants function in the global context
      globalState.initializePlants(formattedData); 
      //set loading to false
      setLoading(false);  
    } catch (err) {
      //log error if fetching from api does not work
      console.log (err);
      //set loading to false
      setLoading(false);
    }
  }

  //return page with item cards for each plant in api
  return (
    <div className="plants-page">
      <h1 className="plants-title">Shop Our Plants</h1>
      <div className="plants-container">
        {
          //map through plants and create an item card for each
          plants.map((plant) => (
            <PlantItem 
              //pass the component data from the api as props
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
          //define the loading state
          loading && <div class="loader"></div>
        }
      </div>
    </div>
  );
};
