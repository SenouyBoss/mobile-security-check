import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { View,Text } from 'react-native';
//import {HomeScreen, RegisterScreen, DetectScreen} from './Screens'
import HomeScreen from "./Screens/HomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import DetectScreen from "./Screens/DetectScreen";
import Api_db from "./Api_db";
import * as firebase from "firebase";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detect: DetectScreen,
    Register: RegisterScreen

  },  

    
    {
      initialRouteName: 'Home',

      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
);

const AppContainer = createAppContainer(RootStack );

//firebase.initializeApp(Api_db.FirebaseConfig);

export default class App extends React.Component {
 /*  constructor(props){
    super(props);
  // intialize fire base
  if (!firebase.apps.length) { firebase.initializeApp(Api_db.FirebaseConfig); }

} */
  render() {
    return (
      
        <AppContainer />
      
    );
  }
}

//#f4511e