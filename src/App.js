import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import VideogameDetail from './components/VideogameDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route path='/' component={NavBar}/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/Home' component={Home}/>
        <Route path='/videogames/:id' component={VideogameDetail}/>     
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
