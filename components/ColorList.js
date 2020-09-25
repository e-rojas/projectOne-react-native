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
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, FlatList,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
const ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};
class ColorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#D1EBF1',
      availableColors: [],
      name: '#F2C48D'
    }
  }
componentDidMount(){
  AsyncStorage.getItem(
    '@ColorListStore:Colors',
    (err,data)=>{
      if(err){
        console.log('error loading colors',err);
      }else{
        
        const allColors = JSON.parse(data)
        console.log(allColors);
        this.setState({
          availableColors:allColors
        })
      }
    }
  )
}
  changeColor(backgroundColor) {
    this.setState({ backgroundColor })
  }
 async saveColors(colors){
    try {
      const jsonValue = JSON.stringify(colors)
      await AsyncStorage.setItem('@ColorListStore:Colors', jsonValue)
    } catch (e) {
      // saving error
      console.log('error saving values',e);
    }
  }
  newcolor = async (color) => {
    const COLORS = await [...this.state.availableColors, {color,id:ID()}]
    this.setState({ availableColors: COLORS })
    this.saveColors(COLORS)
  }
  render() {
    // Deconstruct the state 
    const { backgroundColor, availableColors } = this.state
    return (
      <SafeAreaView style={[styles.container, { backgroundColor }]} >
        <ColorForm onNewColor={this.newcolor} />
        <FlatList
          data={availableColors}
          renderItem={({ item }) => <ColorButton backgroundColor={item.color} onSelect={(color) => this.changeColor(color)} />}
          keyExtractor={item => item.id}
        />


      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
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

/*

  state = {
        backgroundColor:'blue',
        availableColor:['yellow','red','blue']
     }
     changeColor(backgroundColor){
this.setState({backgroundColor})
     }
    render() {
        // Deconstruct the state
        const { backgroundColor} = this.state
        return (
            <FlatList style={[styles.container,{backgroundColor}]} data={this.availableColor} >

                <ColorButton  backgroundColor='red' onSelect={(color)=> this.changeColor(color)}/>

            </FlatList>
*/