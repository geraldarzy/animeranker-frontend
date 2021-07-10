import './App.css';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './components/Landingpage';
import RankShows from './components/RankShows';

function App() {
  return (
    <>
    <Switch>
      
      <Route exact path='/'>
        <Landingpage />
      </Route>

      <Route exact path='/rankshows'>
        <RankShows/>
      </Route>

    </Switch>
    </>
  );
}

export default App;
