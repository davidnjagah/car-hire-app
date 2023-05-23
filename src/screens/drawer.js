import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default class DrawerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Drawer.Navigator initialRouteName="Logic" 
      drawerPosition={I18nManager.isRTL ? 'right' : 'left'}
      drawerType="back"
      screenOptions={{
        drawerLockMode: 'locked-closed',
      }}>
        <Drawer.Screen name="SplashScreen" component={SplashScreen} />
        <Drawer.Screen name="Logic" component={Logic} />
        <Drawer.Screen name="Intro" component={Intro} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    );
  }
}
