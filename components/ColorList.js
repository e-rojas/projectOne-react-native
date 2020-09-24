import React from 'react';
/* import {
    StatusBar,
    Dimensions, // the dimensions object you can get the pixels value for the full screen
    View,
    Text,
    StyleSheet,
   Image,
   ImageBackground,
   TouchableHighlight
  } from 'react-native' */
  import { View,Text,StyleSheet,TouchableHighlight } from 'react-native';
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
                <TouchableHighlight style={styles.button} onPress={()=>this.changeColor('yellow')} underlayColor='orange'>
                <View style={styles.row} >
                    <View style={[styles.sample, {backgroundColor:'yellow'} ]} />
                    <Text style={styles.text} > Yellow</Text>
                </View>
                </TouchableHighlight>
             {/*   <Text onPress={()=> this.changeColor('green')} style={styles.button} >Green</Text>
               <Text onPress={()=> this.changeColor('red')} style={styles.button} >Red</Text> */}
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
      
    },
    button:{
        // fontSize:30,
        margin:10,
        padding:10,
        borderWidth:2,
        borderRadius:10,
        alignSelf:'stretch',
        backgroundColor:'rgba(255,255,255,.8) '
        // textAlign:'center'
    },row:{
        flexDirection:'row',
        alignItems:'center'
    },sample:{
        width:20,
        height:20,
        borderRadius:10,
        margin:5,
        backgroundColor:'white'
    },text:{
fontSize:30,
maregin:5
    }
  })

export default ColorList;