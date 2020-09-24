import React, { Component } from 'react';
import { Text, View,TextInput,StyleSheet,Button } from 'react-native';

export default class ColorForm extends Component {
  state={
txtColor:''
  }
 submit = ()=>{
     this.props.onNewColor(this.state.txtColor.toLowerCase())
this.setState({txtColor:''})
}
  render() {
    return (
     <View style={styles.constainer} >
         <TextInput
         style={styles.txtInput}
     placeholder='Create a new color'
     value={this.state.txtColor}
     onChangeText={text => this.setState({txtColor:text})}

     />
     {/* <Text onPress={this.submit}  style={styles.button} >Submit</Text> */}
     <Button
   onPress={this.submit}
  title="Add color"
 
 
/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
constainer:{
padding:16,
flex: 1,
flexDirection: 'row'
},
txtInput:{
    flex:1,
    margin:5,
    padding:5,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'snow',
   
},
button:{
backgroundColor: '#F2CD5C',
margin: 5,
padding: 5,
alignItems: 'center',
justifyContent: 'center'
,color: 'white',
borderRadius: 5
}
})