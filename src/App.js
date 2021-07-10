import './App.css';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './components/Landingpage';
import RankShows from './components/RankShows';
import RankMovies from './components/RankMovies';

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

      <Route exact path='/rankmovies'>
        <RankMovies/>
      </Route>

    </Switch>
    </>
  );
}

export default App;
