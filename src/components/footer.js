import React, { Component } from 'react';
import { Text,TouchableOpacity,Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Icon, HStack, Center, Pressable, Box } from "native-base";
import * as Font from 'expo-font';

let customFonts = {
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
    'Avenir-Black': require('../../assets/fonts/Avenir-Black.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Light': require('../../assets/fonts/Avenir-Light.ttf'),

  };

  const { height, width } = Dimensions.get("window");

export default class Footer2 extends Component {
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
        <Box flex={1} bg="white" safeAreaTop width="100%" maxW= {width} alignSelf="center">
        <HStack style={{
            backgroundColor: 'white',
            shadowOffset: { width: 3, height: 3 },
            shadowColor: '#000000',
            shadowRadius: 5,
            shadowOpacity: 0.3,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',

        }} bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/home.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Homepage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/clipboard.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Works</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{

                marginTop: -20,
            }}>
                <Image source={require('../../assets/addIcon.png')} style={{ marginTop: -2, borderColor: '#F0F1F3', borderWidth: 6, borderRadius: 66 / 2, height: 66, width: 66 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/date.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/account.png')} height={22} width={22} />
                <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy' }}>Profile</Text>
            </TouchableOpacity>
      </HStack>
      </Box>
    );
  }
}
