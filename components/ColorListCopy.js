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
  import { View,Text,StyleSheet,TouchableHighlight ,ScrollView} from 'react-native';
  import ColorButton from './ColorButton';
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
            <ScrollView style={[styles.container,{backgroundColor}]} >
                <ColorButton  backgroundColor='red' onSelect={(color)=> this.changeColor(color)}/>
                <ColorButton  backgroundColor='blue' onSelect={(color)=> this.changeColor(color)}/>
                <ColorButton  backgroundColor='green' onSelect={(color)=> this.changeColor(color)}/>
                <ColorButton  backgroundColor='salmon' onSelect={(color)=> this.changeColor(color)}/>
               
             {/*   <Text onPress={()=> this.changeColor('green')} style={styles.button} >Green</Text>
               <Text onPress={()=> this.changeColor('red')} style={styles.button} >Red</Text> */}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
      /*   justifyContent:'center', no need for these on scroll view
        alignItems:'center' */
    //   backgroundColor: '#DDD',
     /*  flexDirection:'column',
      height:'100vh',
      padding:'5px' */
      // justifyContent:'space-between'
      
    },
  
  })

export default ColorList;