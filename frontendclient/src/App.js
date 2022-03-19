import React, {Fragment, useEffect} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';
import {useDispatch, useSelector} from 'react-redux';
import * as userAction from './actions/userActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.getUserFromToken());
  }, [])

  return (
    <Router>
      <Fragment>
        {showRoutes(routes)}
      </Fragment>
    </Router>
  );
}

const showRoutes = routes => {
  let result = null;

  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return <Route
        path={route.path}
        exact={route.exact}
        component={route.main}
        key={index}/>
    });
  }

  return <Switch>{result}</Switch>
}

export default App;

// =============================  Ctrl M để format code jsx use jsx-beautify
// =======================================