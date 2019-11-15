import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './utils/router'; // we prepared react-router for you here
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path="/" exact component={Contacts} />
          </Switch>
        </View>
      </Router>
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
