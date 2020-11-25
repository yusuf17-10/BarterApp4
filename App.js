import * as React from 'react';
import {View} from 'react-native';

import SignUpLoginScreen from "./Screens/SignUpLoginScreen";


export default class App extends React.Component {
  render() {
    return (

    <View style={styles.container}>
      <SignUpLoginScreen/>
    <Header
      backgroundColor={'orange'}
      centerComponent={{
        text: 'Barter App',
        style: { color: '#fff', fontSize: 20 },
      }}
    />
    </View>

    );
  }
}

