import React, { Component } from 'react';
import { ScrollView, Text,StyleSheet,ActivityIndicator,Dimensions,Image } from 'react-native';


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        productImages:[],
        fetching:false
    };
  }
componentDidMount(){
    this.setState({fetching:true})
    fetch('https://hplussport.com/api/products.php')
    .then(response => response.json())
    .then(products => products.map(product=> product.image))
    .then(productImages=> this.setState({productImages,fetching:false}))
    .catch(e => console.error('error logging data',e))
}
  render() {
    return (
      <ScrollView horizontal={true} >
          <ActivityIndicator size='large' style={styles.spinner} animating={this.state.fetching} />
      
        {
            this.state.productImages.map((uri,i)=>(
                <Image style={styles.thumb} key={i} source={{uri}} />
            ) )
        }
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    txt:{
        fontSize: 20,
        margin:10
    },spinner:{
        alignSelf: 'center',
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').widht
    },thumb:{
        width:375,
        resizeMode: 'cover'
    }
});