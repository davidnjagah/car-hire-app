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
      <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      padding={4}
      shadow={6}
      backgroundColor= "white"
      shadowOffset= {{ width: "3", height: 3 }}
      shadowColor= '#000000'
      shadowRadius= {5}
      shadowOpacity= {0.3}
      borderTopRightRadius= {25}
      borderTopLeftRadius= {25}
    >
      <HStack
        alignItems="center"
        justifyContent="space-evenly"
      >
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/home.png')} height={22} width={22} />
          <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy', color: 'white' }}>
            Homepage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/clipboard.png')} height={22} width={22} />
          <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy', color: 'white' }}>
            Works
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../assets/addIcon.png')}
            style={{
              borderColor: '#F0F1F3',
              borderWidth: 6,
              borderRadius: 66 / 2,
              height: 66,
              width: 66,
              marginTop: -20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/date.png')} height={22} width={22} />
          <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy', color: 'white' }}>
            Calendar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/account.png')} height={22} width={22} />
          <Text style={{ fontSize: 10, fontFamily: 'Avenir-Heavy', color: 'white' }}>
            Profile
          </Text>
        </TouchableOpacity>
      </HStack>
    </Box>
    );
  }
}
