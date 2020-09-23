import React from 'react';
//import UI components
import {
  StatusBar,
  Dimensions, // the dimensions object you can get the pixels value for the full screen
  View,
  Text,
  StyleSheet,
 Image,
 ImageBackground
} from 'react-native'
// Importing images
import  MusicImage1 from "./assets/music.jpg";
import MusicImage2 from './assets/music2.jpg';


class App extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.container}>
        {/* 
        Text with flexbox
        <StatusBar style="auto" />
        <Text style={styles.defaultText} >Sieery</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Tanner</Text>
        <Text style={styles.footerText}>Travis</Text> */}
       <ImageBackground style={styles.img} source={MusicImage1} >
        <Text style={styles.imgTitle} > Phil Collins Concert </Text>
         </ImageBackground>
       <ImageBackground style={styles.img} source={MusicImage2} >
        <Text style={styles.imgTitle}>iTunes Store </Text>
         </ImageBackground>

      </View>
    );
  }
}

/* :::::: styles */
/* 
In the styles we can use the reziseMode: 'repeat', 'contain', 'cover'
*/
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    flexDirection:'column',
    height:'100vh',
    padding:'5px'
    // justifyContent:'space-between'
    
  },footerText:{
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black',
   
  },
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black',
    
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  },
  img:{
   // width: Dimensions.get('window').width,
    width:'100%',

    // marginTop:'10px',
    // marginBottom:'10px',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imgTitle:{
    fontweight:'600px',
    backgroundColor:'rgba(0,0,0,.7)',
    fontSize:'23px',
    color:'white',
    padding:'10px',
    borderRadius:'5px'
  }
})

export default App;