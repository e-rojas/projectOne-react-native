import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import ColorTools from 'color'


function ColorInfo ({navigation,route})  {
    
    const {color } = route.params
    return(

    <View style={[styles.container,{backgroundColor: color}]}>
        <Text style={styles.txt}>{JSON.stringify(color)} </Text>
    </View>
)};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    txt:{
        fontSize: 20,
        margin:10
    }
});

export default ColorInfo;
