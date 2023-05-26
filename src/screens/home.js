import * as React from 'react';
import { FlatList, SafeAreaView, TouchableWithoutFeedback, Animated, Pressable, Easing, Dimensions, Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from "react-native";
import { Container, Box, StatusBar, HStack } from "native-base";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from 'expo-font';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CardBig from '../components/cardBig';
import CardSmall from '../components/cardSmall';
import Footer2 from '../components/footer';
import Header from '../components/header';


const { height, width } = Dimensions.get("window");

console.log(height +" "+ width);

let customFonts = {
   'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
   'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
   'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
   'Avenir-Black': require('../../assets/fonts/Avenir-Black.ttf'),
   'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
   'Avenir-Light': require('../../assets/fonts/Avenir-Light.ttf'),

 };


export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         bounceValue: new Animated.Value(5000),
         fadeAnim: new Animated.Value(0),
         fontsLoaded: false,
         scrolled: false,
         onEndReachedCalledDuringMomentum: true
      };
      this.animatedValue = new Animated.Value(0);
      this.newData = [{key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }];
   }

   
   async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
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
      this.animatedValue.setValue(0);
      this._loadFontsAsync();
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
   render() {
      const marginLeft = this.animatedValue.interpolate({
         inputRange: [0, 1],
         outputRange: [260, 0]
       })

       if (!this.state.fontsLoaded) {
         return null;
       }
      return (
         <SafeAreaView style={styles.container}>         
         <Container >
            <LinearGradient colors={['#3C80F7', '#1058D1']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
                  <Header navigation={this.props.navigation}/>
                  <Box height="50" >
                  <ScrollView horizontal={true} style={{ display: 'flex' }} showsHorizontalScrollIndicator={false}>
                     <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: 20, borderBottomColor: '#ffffff', borderBottomWidth: 5 }}>
                        <Text style={{ display: 'flex', fontSize: 14, fontFamily: 'Avenir-Heavy', color: '#ffffff' }}>All </Text>
                        <Text style={{ color: '#216DEE', backgroundColor: '#ffffff', borderRadius: 10, paddingLeft: 15, paddingRight: 15, }}>25</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this._openModal()}} style={{ padding: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Sports</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => {  this._openModal() }} style={{ padding: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Exclusive</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this._openModal() }} style={{ padding: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Family</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this._openModal()}} style={{ padding: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy', marginLeft: 20, color: '#D8D8D8' }}>Trucks</Text>
                     </TouchableOpacity>
                  </ScrollView>
                  </Box>
               </LinearGradient> 
               <ScrollView horizontal={false}>
               <Box height="50%">
                  <ScrollView horizontal={true} contentContainerStyle={styles.scrollView} showsHorizontalScrollIndicator={false} >
                    <Animated.View> 
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Car') }} >
                           <CardBig />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }} >
                           <CardBig />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View >
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardBig />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardBig />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View >
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardBig />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardBig />
                        </TouchableOpacity>
                     </Animated.View>
                  </ScrollView>
                  </Box>
                  <ScrollView horizontal={true} style={{ paddingTop: 10, paddingBottom: 20, }} showsHorizontalScrollIndicator={false}>
                     <Animated.View style={{opacity: this.state.fadeAnim,}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View style={{opacity: this.state.fadeAnim,}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View style={{opacity: this.state.fadeAnim,}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View style={{opacity: this.state.fadeAnim,}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        </TouchableOpacity>
                     </Animated.View>
                     <Animated.View style={{opacity: this.state.fadeAnim,}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                           <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                        </TouchableOpacity>
                     </Animated.View>
                  </ScrollView>
               <Animated.View
                  style={[styles.subView,
                  { transform: [{ translateY: this.state.bounceValue }] }]}
               >
                  <View style={{ padding: 20, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                     <View>
                        <Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }}>Category</Text>
                     </View>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('SearchNearBy') }} style={{ display: 'flex', flexDirection: 'row', borderColor: '#D2D2D2', borderWidth: 2, borderRadius: 25, paddingRight: 10, paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>
                        <Image source={require('../../assets/map_pointer.png')} style={{height:18, width:18}} />
                        <Text style={{ fontSize: 12, fontFamily: 'Avenir-Roman', marginLeft: 10 }}>Search Near</Text>
                     </TouchableOpacity>
                  </View>
                  <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingBottom:0 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Car') }}>
                        <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                     </TouchableOpacity>
                     <View style={{ display: 'flex', alignItems: 'center', padding: 30 }}>
                        <TouchableOpacity onPress={() => this._hideModal()} style={{
                           display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', height: 60, width: 60, borderRadius: 60 / 2, shadowOffset: { width: 3, height: 3 },
                           shadowColor: '#000000',
                           shadowRadius: 5,
                           shadowOpacity: 0.1,
                        }}>
                           <Image source={require('../../assets/X.png')} style={{height:18, width:18}} />
                        </TouchableOpacity>
                     </View>
                  </ScrollView>
               </Animated.View>
            </ScrollView>
            <View 
            flex= {0}
            display= 'flex'
            bg="black"
            alignItems="center"
            >
            <Box
               flex={.535} 
               
            >
            <HStack
            alignItems="center"
            justifyContent="space-evenly"
            //bg="black"
            bg="indigo.600" 
            safeAreaBottom
            paddingTop={2}
            width="100%"
            shadowOffset= {{ width: "3", height: 3 }}
            shadowColor= '#000000'
            shadowRadius= {5}
            shadowOpacity= {0.3}
            borderTopRightRadius= {25}
            borderTopLeftRadius= {25}
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
        </View>
         </Container>
         </SafeAreaView>
      );
   }
}

//
//<Box>

var styles = StyleSheet.create({
   container: {
      flex: 0,
      width: width+100
    },
    footerContainer: {
      backgroundColor: "#ffffff",
      width: "auto",
      height: "auto",
    },
   subView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 133,
      backgroundColor: "#ffffff",
      height: height,
      zIndex: 1,
   },
   header: {
      //width: width+100,
   },
    scrollView: {
      flexGrow: 0,
      paddingTop: 5,
    },
});