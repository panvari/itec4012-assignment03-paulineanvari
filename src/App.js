import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/navbar';
import { PlantHomePage } from './components/pages/plant-home-page';
import { PlantPage } from './components/pages/plant-page';

function App() {
  return (
    <Router>
      {/*include nav bar component on all pages*/}
    <Navbar/>
    <Switch>
      {/*set route for homepage and use homepage component*/}
      <Route exact path="/">
        <PlantHomePage />
      </Route>
      {/*set route for details page, using the plant's id, and use plant details component*/}
      <Route path="/plant/:id"> 
        <PlantPage/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
