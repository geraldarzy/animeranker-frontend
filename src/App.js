import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './components/Landingpage';

function App() {
  return (
    <>
    <Switch>
      
      <Route exact path='/'>
        <Landingpage />
      </Route>

      <Route exact path='/trial'>
        <div>trialpage</div>
      </Route>

    </Switch>
    </>
  );
}

export default App;
