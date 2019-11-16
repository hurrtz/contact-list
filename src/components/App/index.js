import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from 'utils/router'; // we prepared react-router for you here
import OverviewPage from 'pages/Overview';
import AddContactPage from 'pages/AddContact';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path="/" exact component={OverviewPage} />
            <Route path="/addContact" exact component={AddContactPage} />
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
