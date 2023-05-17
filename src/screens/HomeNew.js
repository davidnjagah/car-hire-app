import * as React from 'react';
import { Animated,Easing, Dimensions, View } from "react-native";
import Container from "native-base";

import Footer2 from '../components/footer';

const { height, width } = Dimensions.get("window");

const home = () => {
    const bounceValue = new Animated.Value(5000);
    const fadeAnim = new Animated.Value(0);
    const animatedValue = new Animated.Value(0);
  
    const _openModal = () => {
      Animated.spring(bounceValue, {
        toValue: 0,
        velocity: 3,
        tension: 2,
        friction: 8,
      }).start();
    };
  
    const _hideModal = () => {
      Animated.spring(bounceValue, {
        toValue: height,
        velocity: 3,
        tension: 2,
        friction: 8,
      }).start();
    };
  
    const componentDidMount = () => {
      animatedValue.setValue(0);
  
      // Apply fade animation to small card
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
      }).start();
  
      // Apply scroll to left animation to big card
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
      }).start();
    };
  
    const render = () => {
      const marginLeft = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [260, 0],
      });
  
      return (
        <View>
        </View>
      );
    };
  
    // Return the required functions and JSX code
    return {
      bounceValue,
      fadeAnim,
      animatedValue,
      _openModal,
      _hideModal,
      componentDidMount,
      render,
    };
  };
  
  export default home;