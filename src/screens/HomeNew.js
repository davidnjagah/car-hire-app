import * as React from 'react';
import { Animated,Easing, Dimensions, View, StyleSheet } from "react-native";
import { NativeBaseProvider, Center, Text, Box, Body, Header, Left, Container, Content, Right } from "native-base";
//import { NativeBaseProvider, Box } from "native-base";
import Footer2 from '../components/footer';
import {LinearGradient} from 'expo-linear-gradient';


const { height, width } = Dimensions.get("window");

export default class Home extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          bounceValue: new Animated.Value(5000),
          fadeAnim: new Animated.Value(0),
       };
       this.animatedValue = new Animated.Value(0);
    }
    _openModal() {
       Animated.spring(
          this.state.bounceValue,
          {
             toValue: 0,
             velocity: 3,
             tension: 2,
             friction: 8,
             useNativeDriver: true,
          }
       ).start();
    }
    _hideModal() {
       Animated.spring(
          this.state.bounceValue,
          {
             toValue: height,
             velocity: 3,
             tension: 2,
             friction: 8,
             useNativeDriver: true,
          }
       ).start();
    }
    componentDidMount() {
       this.animatedValue.setValue(0)
       // apply fade animation to small card
       Animated.timing(
          this.state.fadeAnim,
          {
             toValue: 1,
             duration: 1000,
             useNativeDriver: true,
          }
       ).start();
       
       // apply scroll to left animation to big card
       Animated.timing(
         this.animatedValue,
         {
           toValue: 1,
           duration: 2000,
           useNativeDriver: true,
           easing:Easing.inOut(Easing.quad)
         }
     ).start()

    }
  
   render () {
    const marginLeft = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [260, 0]
      })
  
      return (
    //     <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
    //     <Text>Open up App.js to start working on your app!</Text>
    //   </Box>
    <Center>
    <Container>
            <LinearGradient colors={['#3C80F7', '#1058D1']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
               
            </LinearGradient>
    </Container>
    </Center>

      )
    }
  }

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