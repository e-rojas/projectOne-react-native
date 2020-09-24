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
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
class ColorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#D1EBF1',
      availableColors: ['#2D90A3', '#788D27', '#A5A13C', '#D6D7C7'],
      name: '#F2C48D'
    }
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor })
  }
  newcolor = (color) => {
    const COLORS = [...this.state.availableColors, color]
    this.setState({ availableColors: COLORS })
  }
  render() {
    // Deconstruct the state 
    const { backgroundColor, availableColors } = this.state
    return (
      <ScrollView style={[styles.container, { backgroundColor }]} >
        <ColorForm onNewColor={this.newcolor} />
        <FlatList
          data={availableColors}
          renderItem={({ item }) => <ColorButton backgroundColor={item} onSelect={(color) => this.changeColor(color)} />}
        />


      </ScrollView>
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