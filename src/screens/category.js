import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Box } from 'native-base';
import * as Font from 'expo-font';

import Header from '../components/header';
import Footer2 from '../components/footer';

let customFonts = {
   'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
   'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.ttf'),
   'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
   'Avenir-Black': require('../../assets/fonts/Avenir-Black.ttf'),
   'Avenir-Book': require('../../assets/fonts/Avenir-Book.ttf'),
   'Avenir-Light': require('../../assets/fonts/Avenir-Light.ttf'),
 
 };

export default class Category extends Component {
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
        <Container>
        <LinearGradient colors={['#3C80F7', '#1058D1']}  start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} >
              <Header/>
                 <ScrollView horizontal={true} style={{display:'flex'}}> 
                    <TouchableOpacity style={{display:'flex',flexDirection:'row',padding:10,marginLeft:20,borderBottomColor:'#ffffff',borderBottomWidth:5}}>
                       <Text style={{ display:'flex', fontSize: 14, fontFamily: 'Avenir-Heavy',color:'#ffffff'  }}>All </Text>
                       <Text style={{color:'#216DEE',backgroundColor:'#ffffff',borderRadius:10,paddingLeft:15,paddingRight:15,}}>25</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Sports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Exclusive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Family</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                       <Text style={{ fontSize: 14, fontFamily: 'Avenir-Heavy',marginLeft:20,color:'#D8D8D8' }}>Trucks</Text>
                    </TouchableOpacity>
                 </ScrollView>
           </LinearGradient>
           <Box>
              <CardBig />
              <ScrollView horizontal={true} style={{paddingTop:10,paddingBottom:20,marginBottom: 30,}}> 
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                 <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                 <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
                 <CardSmall image={require('../../assets/HomeMustang.png')} title="Supersports" />
                 <CardSmall image={require('../../assets/HomeAstonMartin.png')} title="Sports Car" />
              </ScrollView>
           </Box>
           <Footer2/>
     </Container>
     
    );
  }
}
