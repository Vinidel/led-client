import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/indexReducer';
import App from './components/App';
import CleaningHistory from './components/Led';
import Layout from './components/LayoutComponent';
import checkToken from './middlewares/checkToken';
import {persistStore, autoRehydrate} from 'redux-persist'

require('./style.css');
let middlewareChain = [thunk];

if(process.env.NODE_ENV !== 'production') {
  middlewareChain = [...middlewareChain]
}

const routes = <Route component={App}>
  <Route component={Layout}>
    <Route path="/led" component={CleaningHistory} />
  </Route>
</Route>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewareChain), autoRehydrate()));

persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
