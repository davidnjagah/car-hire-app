import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Container, HStack, IconButton, Icon, Box } from "native-base";
import {LinearGradient} from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { MaterialIcons } from "@expo/vector-icons";

import DrawerContainer from '../screens/drawer';

let customFonts = {
  'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
  'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
  'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  'Avenir-Black': require('../../assets/fonts/Avenir-Black.ttf'),
  'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
  'Avenir-Light': require('../../assets/fonts/Avenir-Light.ttf'),

};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount(){
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <Box>
      <Box safeAreaTop bg="violet.600" />
        <HStack  bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center">
        <HStack alignItems="center">
            <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} onPress={() => { }}/>
            <Text style={{ fontFamily: 'Avenir-Heavy', color: 'white', fontSize: 20, marginLeft: 10 }}>Homepage</Text>
        </HStack>
        <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} onPress={() => { this.props.navigation.navigate('Search') }}/>
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
        </HStack>
        </Box>
    );
  }
}
