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
    <Navbar />
    <Switch>
      <Route exact path="/">
        <PlantHomePage />
      </Route>
      <Route path="/plant/:id">
        <PlantPage/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
