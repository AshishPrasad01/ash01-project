import './App.css';
import Navbarr from "./Components/Nav/Navbarr"
// import bootstrap from "../nodemodules/bootstrap/dist/css/bootstrap.css"
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CShome from './Components/ClientServer/CShome';

import Gitsearch from './Components/Githubsearch/Gitsearch';
import home from './Components/Home/home';
import Ghh from './Components/Githubhome/Ghh';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbarr />

        <Switch>
              <Route exact path="/" component={home} />
              <Route path="/Gitsearch" component={Gitsearch} />
              <Route path="/reduxdata" component={CShome } />
              <Route path="/Login" component={Login} />
        </ Switch >



      </BrowserRouter>

    </div>
  );
}

export default App;