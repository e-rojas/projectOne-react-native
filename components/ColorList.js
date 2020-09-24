import React from 'react';
import {
    StatusBar,
    Dimensions, // the dimensions object you can get the pixels value for the full screen
    View,
    Text,
    StyleSheet,
   Image,
   ImageBackground
  } from 'react-native'
class ColorList extends React.Component {
    state = { 
        backgroundColor:'blue'
     }
     changeColor(backgroundColor){
this.setState({backgroundColor})
     }
    render() {
        // Deconstruct the state 
        const { backgroundColor} = this.state
        return (
            <View style={[styles.container,{backgroundColor}]} >
               <Text onPress={()=> this.changeColor('green')} style={styles.button} >Green</Text>
               <Text onPress={()=> this.changeColor('red')} style={styles.button} >Red</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    //   backgroundColor: '#DDD',
     /*  flexDirection:'column',
      height:'100vh',
      padding:'5px' */
      // justifyContent:'space-between'
      
    },button:{
        fontSize:30,
        margin:10,
        padding:10,
        borderWidth:2,
        borderRadius:10,
        alignSelf:'stretch',
        textAlign:'center'
    }
  })

export default ColorList;