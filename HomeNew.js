import * as React from 'react';
import { Animated,Easing, Dimensions, Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from "react-native";
import { Body, Header, ListItem as Title, Left, Container, Content, Right } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import CardBig from '../components/cardBig';
import CardSmall from '../components/cardSmall';
import Footer2 from '../components/footer';

const { height, width } = Dimensions.get("window");

const Home = {
    bounceValue: new Animated.Value(5000),
    fadeAnim: new Animated.Value(0),
    animatedValue: new Animated.Value(0),  

  
    _openModal(){
      Animated.spring(this.bounceValue, {
        toValue: 0,
        velocity: 3,
        tension: 2,
        friction: 8,
      }).start();
    },
  
    _hideModal(){
      Animated.spring(this.bounceValue, {
        toValue: height,
        velocity: 3,
        tension: 2,
        friction: 8,
      }).start();
    },
  
    componentDidMount(){
      this.animatedValue.setValue(0);
  
      // Apply fade animation to small card
      Animated.timing(this.fadeAnim, {
        toValue: 1,
        duration: 1000,
      }).start();
  
      // Apply scroll to left animation to big card
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
      }).start();
    },
  
    render(){
  
      // Return any required data or functionality
      return (
        <Container>
            
            <Footer2 />
         </Container>
      );
    },
  };
  
  


var styles = StyleSheet.create({
   subView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 133,
      backgroundColor: "#ffffff",
      height: height,
      zIndex: 1,
   }
});

export default Home;