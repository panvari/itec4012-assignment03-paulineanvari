import React, {useState} from 'react';

const PlantContext = React.createContext({
    plants: [],
    initializePlants: () => {},    
});

export const PlantContextProvider = (props) => {
    const [plants, setPlants] = useState([]);

    const initializePlants = (plantsFromApi) => {
        setPlants(plantsFromApi);
    }
    
    return (<PlantContext.Provider
     value={{plants: plants, initializePlants: initializePlants}}
    >
        {props.children}
    </PlantContext.Provider>)

} 

export default PlantContext;