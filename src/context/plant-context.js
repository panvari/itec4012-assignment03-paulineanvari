import React, {useState} from 'react';

const PlantContext = React.createContext({
    plants: [],
    initializePlants: () => {},    
});

//create context provider to wrap around app
export const PlantContextProvider = (props) => {
    //define plants using the use state hook
    const [plants, setPlants] = useState([]);

    //initialize the plants from the api
    const initializePlants = (plantsFromApi) => {
        //set plants to the plants from the api
        setPlants(plantsFromApi);
    }
    
    //return the plant context provider with the plants and initialize plants function
    return (<PlantContext.Provider
     value={{plants: plants, initializePlants: initializePlants}}
    >
        {props.children}
    </PlantContext.Provider>)

} 

export default PlantContext;