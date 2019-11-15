import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'utils/router'; // we prepared react-router for you here
import Contacts from 'components/Contacts';
import createReducer from './reducer';

function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <View style={styles.container}>
            <Switch>
              <Route path="/" exact component={Contacts} />
            </Switch>
          </View>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

export default App;
