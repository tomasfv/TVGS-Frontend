import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import VideogameDetail from './components/VideogameDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UserCreate from './components/UserCreate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route exact path='/' component={LandingPage}/>
        <Route path='/' component={NavBar}/>
      <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/videogames/:id' component={VideogameDetail}/>     
        <Route path='/usercreate' component={UserCreate}/>     
      </Switch>
        <Route path='/' component={Footer}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
