import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  I18nManager,
  Alert, 
  BackHandler,
  Text,
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator,createAppContainer, createStackNavigator,NavigationActions } from '@react-navigation/stack';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import SafeAreaView from 'react-native-safe-area-view';

/**********************************************************************
*
*                               Screens
*
**********************************************************************/

import DrawerContainer from './src/screens/drawer'
import SplashScreen from './src/screens/SplashScreen';
import Logic from './src/screens/Logic';
import Intro from './src/screens/intro';
import Home from './src/screens/home';
import Login from './src/screens/Login';
import Search from './src/screens/search';
import SearchNearBy from './src/screens/searchNearby';
import Car from './src/screens/car';


const Stack = createStackNavigator();


function Navigator (){
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Logic" component={Logic} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchNearBy" component={SearchNearBy} />
      <Stack.Screen name="Car" component={Car} />
    </Stack.Navigator>
    </NavigationContainer>
 );
     
}

const RootStack = createDrawerNavigator({
  Stack: { screen: Navigator },
},
{
  drawerPosition: I18nManager.isRTL ? 'right' : 'left',
  contentComponent: DrawerContainer,
  drawerType:'back',
  navigationOptions: {
     drawerLockMode: 'locked-closed'
  }
}``
);

const AppContainer = createAppContainer(RootStack);


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
   await AsyncStorage.getItem('Intro').then((Intro) => {
      if (!Intro) {
         this.navigator.dispatch({
            type: NavigationActions.NAVIGATE,
            routeName: 'Intro',
         });
         
      }
   })
  }
  getActiveRouteName(navigationState) {
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
          <AppContainer 
               ref={nav => (this.navigator = nav)}
                onNavigationStateChange={(prevState, currentState) => {
                   const currentScreen = this.getActiveRouteName(currentState);
                   const prevScreen = this.getActiveRouteName(prevState);
                   this.state.currentScreen = currentScreen;
                   {/*if (prevScreen !== currentScreen) {
                     // the line below uses the Google Analytics tracker
                     // change the tracker here to use other Mobile analytics SDK.
                     tracker.trackScreenView(currentScreen);
                   }*/}
                 }}
             />
    );
  }
  
  //return (
    //
    // <NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen name="SplashScreen" component={SplashScreen} />
    //   <Stack.Screen name="Logic" component={Logic} />
    //   <Stack.Screen name="Intro" component={Intro} />
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Search" component={Search} />
    //   <Stack.Screen name="SearchNearBy" component={SearchNearBy} />
    //   <Stack.Screen name="Car" component={Car} />
    // </Stack.Navigator>
    // </NavigationContainer>
 // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
