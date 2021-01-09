import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import SignUpLoginScreen from "./Screens/SignUpLoginScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "./Screens/HomeScreen";
import ExchangeScreen from "./Screens/exchangeScreen";

export default class App extends React.Component {
  render() {
    return (

     <AppContainer/>

    );
  }

}

var AppTabNavigator=createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
})

var SwitchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{screen:SignUpLoginScreen},
  AppTabNavigator:{screen:AppTabNavigator}
})                   

var AppContainer=createAppContainer(SwitchNavigator)