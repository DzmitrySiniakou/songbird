import React from 'react';
import {
  Redirect, Route, Switch, BrowserRouter,
} from 'react-router-dom';

import SongBirdPage from './pages/SongBirdPage';
import PATH from './constants/path';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={PATH.SONG_BIRD} component={SongBirdPage} />
          <Redirect to={{ pathname: PATH.SONG_BIRD }} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
