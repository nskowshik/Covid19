import React from 'react';
import './style.css';
import StateCard from './StateCard'
import {BrowserRouter ,Route} from 'react-router-dom'
import DistrictCard from './DistrictCard';
import { createBrowserHistory } from "history";
class App extends React.Component {
  render(){
    const history = createBrowserHistory();
    return (
      <div className="App">
        <BrowserRouter  history={history} basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={ StateCard}/>
          <Route exact path="/:state_id" component={DistrictCard}/>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
