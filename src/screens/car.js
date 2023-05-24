import React, { Component, useRef } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Modal, StyleSheet,Animated, Easing,  Dimensions } from 'react-native';
import { Container, Icon, HStack, IconButton, Box, Center } from "native-base";
import {LinearGradient} from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';
import LottieView from "lottie-react-native";
import * as Font from 'expo-font';
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { ScrollView } from 'react-native-gesture-handler';

import Footer2 from "../components/footer";
import Header from '../components/header';


const { height, width } = Dimensions.get("window");
const images = [{
	// Simplest usage.
	//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

	//     // width: number
	//     // height: number
	//     // Optional, if you know the image size, you can set the optimization performance

	//     // You can pass props to <Image />.
	//     props: {
	//         // headers: ...
	//     }
	// }, {
	url: '',
	props: {
		// Or you can set source directory.
		source: require('../../assets/slider_1.jpg')
	}
}, {
	url: '',
	props: {
		// Or you can set source directory.
		source: require('../../assets/slider_2.jpg')
	}
}, {
	url: '',
	props: {
		// Or you can set source directory.
		source: require('../../assets/slider_3.jpg')
	}

}];

let customFonts = {
	'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
	'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
	'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
	'Avenir-Black': require('../../assets/fonts/Avenir-Black.ttf'),
	'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
	'Avenir-Light': require('../../assets/fonts/Avenir-Light.ttf'),
 
  };

  const translation = new Animated.Value(0);

export default class Car extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wishlist:false,
			progress: new Animated.Value(0),
			fadeAnim: new Animated.Value(0),
			isModalOpened: false,  //Controls if modal is opened or closed
			currentImageIndex: 0,   //Controls initial photo to show for modal
			fontsLoaded: false,
		};
		this.animatedValue = new Animated.Value(0);
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	  }

	_whishlistHandler(){
		if(this.state.wishlist == false){
			 Animated.timing(this.state.progress, {
				  toValue: 1,
				  duration: 500,
				  easing: Easing.linear,
			 }).start();
			 this.setState({wishlist:true})
		}else{
			 Animated.timing(this.state.progress, {
				  toValue: 0,
				  duration: 500,
				  easing: Easing.linear,
			 }).start();
			 this.setState({wishlist:false})
		}
  	}
	openModal(index) {
		this.setState({ isModalOpened: true, currentImageIndex: index })
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
		const marginTop = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [260, 0]
		  });

		  if (!this.state.fontsLoaded) {
			return null;
		  }
		return (
			<SafeAreaView style={styles.header}>
			<Container style={{flex:1}}>
			<LinearGradient colors={['#3C80F7', '#1058D1']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}/>
			<Box width={width}>
          <Header />
        </Box>
			<ScrollView>				
				<Box>
					<Swiper style={styles.sliderWrapper} showsButtons={false}>
						<View style={styles.slide} >
							<TouchableWithoutFeedback onPress={() => { this.openModal(0) }}>
								<Image source={require('../../assets/slider_1.jpg')} style={{ resizeMode: 'contain', height: 250, width: '100%' }} />
							</TouchableWithoutFeedback>
						</View>
						<View style={styles.slide} >
							<TouchableWithoutFeedback onPress={() => { this.openModal(1) }}>
								<Image source={require('../../assets/slider_2.jpg')} style={{ resizeMode: 'contain', height: 250, width: '100%' }} />
							</TouchableWithoutFeedback>
						</View>
						<View style={styles.slide} >
							<TouchableWithoutFeedback onPress={() => { this.openModal(2) }}>
								<Image source={require('../../assets/slider_3.jpg')} style={{ resizeMode: 'contain', height: 250, width: '100%' }} />
							</TouchableWithoutFeedback>
						</View>
					</Swiper>
					<View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' ,paddingHorizontal:20,paddingVertical:10}}>
						<View>
							<Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }}>Chevy Camaro</Text>
							<Text style={{ fontSize: 12, color: '#333333', fontFamily: 'Avenir-Medium' }}>ECOBOOST</Text>
							<Text style={{ fontSize: 24, color: '#FE7B37', fontFamily: 'Avenir-Black' }}>$89<Text style={{ fontSize: 12, fontFamily: 'Avenir-Medium' }}>/hour</Text></Text>
						</View>
						<View>
							<TouchableOpacity onPress={() => {this._whishlistHandler()}}>
								<LottieView
									progress={this.state.progress}
									ref={animation => {
										this.animation = animation;
									}}
									onAnimationFinish={() => {
										// this.animation.reset();
									}}
									speed={1}
									style={{
										width: 30,
										height: 30,
									}}
									source={require('../../assets/favourite.json')}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.featuresHolder}>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						<Animated.View style={[styles.featuresWraper]}>
							<View style={styles.features}>
								<Image source={require('../../assets/engine.png')} height="25" width="27" />
							</View>
							<Text style={styles.featuresTitle}>3200 cc</Text>
						</Animated.View>
						
					</View>
					<Text style={{fontSize:14,paddingVertical:10,paddingHorizontal:20,marginBottom:20}}>
						The new A-Class is as youthful and dynamic as ever, but grown-up and comfortable like never before. It completely redefines modern luxury in the compact class, and revolutionises interior design. Technologically the new A-Class not only takes first place thanks to MBUX – Mercedes-Benz User Experience: it also offers a number of functions that were previously the preserve of the luxury class.
					</Text>
					<TouchableOpacity style={{ backgroundColor:'#1058D1',   borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginHorizontal: 20,paddingVertical:10 ,paddingHorizontal:20,marginBottom:100}}>
						<Text style={{color:'#ffffff',fontFamily: 'Avenir-Heavy'}}>Book Now</Text>
					</TouchableOpacity>
					<Modal
						visible={this.state.isModalOpened}
						transparent={true}
					>
						<ImageViewer
							imageUrls={images}
							index={this.state.currentImageIndex}
							renderHeader={() => {
								return (
									<View
										style={{ paddingTop: 35, }}
									>
										<TouchableOpacity
											onPress={() => {
												this.setState({ isModalOpened: false })
											}}
											style={{ zIndex: 5, height: 24, width: 45, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ffffff', marginLeft: 20, }}
										>
											<Icon
												ios="ios-close"
												android="md-close"
												style={{ color: 'white', fontSize: 24 }}
											/>
										</TouchableOpacity>
									</View>
								)
							}}
						/>
					</Modal>
				</Box>
				</ScrollView>
				<Footer2 />
			</Container>
			</SafeAreaView>
		);
	}
}

// const styles = StyleSheet.create({
// 	sliderWrapper: { height: 250 },
// 	header: {
// 		width: width+100,
// 		flex: 1,
// 	 },
// 	slide: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#9DD6EB'},
//     featuresHolder:{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',flexWrap:'wrap',paddingHorizontal:20, paddingVertical:10},
//     featuresWraper:{ display: 'flex', flexDirection: 'row', alignItems: 'center',width:'33%',
// 	transform: [
// 		{ translateX: translation },
// 	  ],
// },
// 	features:{height: 34, width: 34, backgroundColor: 'white',display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent: 'center',shadowOffset: { width: 3, height: 3 },shadowColor: '#000000',shadowRadius: 5,shadowOpacity: 0.2,borderRadius: 50 / 2, marginRight: 10,marginBottom:10},
//     featuresTitle:{ fontSize: 10, fontFamily: 'Avenir-Heavy' },
	
// })

const styles = StyleSheet.create({
	sliderWrapper: { height: width * 0.6 },
	header: {
	  flex: 1,
	  width: width+100
	},
	slide: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#9DD6EB',
	  width: width,
	},
	featuresHolder: {
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	  flexWrap: 'wrap',
	  paddingHorizontal: 20,
	  paddingVertical: 10,
	  width: width,
	},
	featuresWraper: {
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'center',
	  width: '33%',
	  transform: [
		{ translateX: translation },
	  ],
	},
	features: {
	  height: 34,
	  width: 34,
	  backgroundColor: 'white',
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	  justifyContent: 'center',
	  shadowOffset: { width: 3, height: 3 },
	  shadowColor: '#000000',
	  shadowRadius: 5,
	  shadowOpacity: 0.2,
	  borderRadius: 50 / 2,
	  marginRight: 10,
	  marginBottom: 10,
	},
	featuresTitle: { fontSize: 10, fontFamily: 'Avenir-Heavy' },
  });
  