import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Router, Switch, Route } from 'utils/router'; // we prepared react-router for you here
import ContactListPage from 'pages/ContactList';
import ContactAddPage from 'pages/ContactAdd';
import ContactDetailsPage from 'pages/ContactDetails';

import styles from './styles';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path="/" exact component={ContactListPage} />
            <Route path="/new" exact component={ContactAddPage} />
            <Route path="/details" exact component={ContactDetailsPage} />
          </Switch>
        </View>
      </Router>
    );
  }
}

export default App;
