import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Easing, } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
    'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
    'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
    'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
    'Avenir-Black': require('../../assets/fonts/Avenir-Black.ttf'),
    'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
    'Avenir-Light': require('../../assets/fonts/Avenir-Light.ttf'),

  };

export default class CardSmall extends Component {
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
            <View style={{
                backgroundColor: 'white', borderColor: '#F0F1F3',
                marginTop: 20,
                marginRight: 15,
                marginLeft: 5,
                paddingTop: 20,
                paddingBottom: 20,
                borderWidth: 1,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: '#000000',
                shadowRadius: 5,
                shadowOpacity: 0.1,
                borderRadius: 15,
                height:146,width:150
            }}>
                <View style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>
                    <Image source={this.props.image} height="56" width="117" />
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',color:'#333333' }}>{this.props.title}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy' }}>728 ITEM</Text>
                </View>
            </View>
        );
    }
}
