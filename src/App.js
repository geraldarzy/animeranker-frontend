import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      
      <Route exact path='/'>
        <div>Homepage</div>
      </Route>

      <Route exact path='/trial'>
        <div>trialpage</div>
      </Route>

    </Switch>
    </>
  );
}

export default App;
