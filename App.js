import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NativeBaseProvider } from 'native-base';
import {
  I18nManager,
  Alert, 
  BackHandler,
  Text,
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator, createStackNavigator, NavigationActions } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import SafeAreaView from 'react-native-safe-area-view';

/**********************************************************************
*
*                               Screens
*
**********************************************************************/

import DrawerContainer from './src/screens/drawer';
import SplashScreen from './src/screens/SplashScreen';
import Logic from './src/screens/Logic';
import Intro from './src/screens/intro';
import Home from './src/screens/home';
import Login from "./src/screens/Login";
import Search from './src/screens/search';
import SearchNearBy from './src/screens/searchNearby';
import Car from "./src/screens/car";


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


const Navigator = () => (
<NativeBaseProvider>
  <Stack.Navigator
    initialRouteName="Logic"
    screenOptions={{
      headerShown: false,
      // You can add custom transition configuration here
    }}
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Logic" component={Logic} />
    <Stack.Screen name="Intro" component={Intro} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="SearchNearBy" component={SearchNearBy} />
    <Stack.Screen name="Car" component={Car} />
  </Stack.Navigator>
</NativeBaseProvider>
);

const RootStack = () => (
  <Drawer.Navigator
    drawerPosition={I18nManager.isRTL ? 'right' : 'left'}
    drawerType="back"
    drawerContent={DrawerContainer}
    screenOptions={{
      drawerLockMode: 'locked-closed',
    }}
  >
    <Drawer.Screen name="Stack" component={Navigator} />
  </Drawer.Navigator>
);


export default class App extends Component{
  constructor(properties) {
    super(properties);
    this.state ={
       currentScreen:''
    }
    //disable Yellow Box
    console.disableYellowBox = true;
  } 

  async componentDidMount(){
   // this.navigator.dispatch({
   //    type: NavigationActions.NAVIGATE,
   //    routeName: 'SplashScreen',
   // });
   const navigation = this.props.navigation;

    const onNavigationStateChange = (prevState, currentState) => {
      const currentScreen = this.getActiveRouteName(currentState);
      const prevScreen = this.getActiveRouteName(prevState);
      // Do whatever you need with the currentScreen and prevScreen values
    };

    navigation.addListener('state', onNavigationStateChange);
   await AsyncStorage.getItem('Intro').then((Intro) => {
      if (!Intro) {
         this.navigator.dispatch({
            type: NavigationActions.NAVIGATE,
            routeName: 'Intro',
         });
         
      }
   })
  }

  componentWillUnmount() {
    const navigation = this.props.navigation;
    navigation.removeListener('state', onNavigationStateChange);
  }

  
  getActiveRouteName = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
       return this.getActiveRouteName(route);
    }
    return route.routeName;
 }
render(){
    return (
     <NavigationContainer>
       <RootStack />
     </NavigationContainer>
 );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
