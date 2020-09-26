import React from 'react'
import {
    StatusBar,
    Dimensions, // the dimensions object you can get the pixels value for the full screen
    View,
    Text,
    StyleSheet,
   Image,
   ImageBackground,
   Button
  } from 'react-native'
  // Importing images
import  MusicImage1 from "../assets/music.jpg";
import MusicImage2 from '../assets/music2.jpg';
const BasicComp = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Button
      title="Create a color"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
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
/* :::::: styles */
/* 
In the styles we can use the reziseMode: 'repeat', 'contain', 'cover'
*/
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#DDD',
      flexDirection:'column',
      height:'100vh',
      padding:5
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
      width: 300,
      height: 300,
      
  
      // marginTop:'10px',
      // marginBottom:'10px',
     
      justifyContent:'center',
      alignItems:'center'
    },
    imgTitle:{
     
      backgroundColor:'rgba(0,0,0,.7)',
      fontSize:23,
      color:'white',
      padding:10,
      borderRadius:5
    }
  })
  
export default BasicComp;