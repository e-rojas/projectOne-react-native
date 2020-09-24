import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const ColorButton = ({
    backgroundColor,onSelect=f=>f
}) => (
        <TouchableHighlight style={styles.button} onPress={() => onSelect(backgroundColor)} underlayColor='orange'>
            <View style={styles.row} >
                <View style={[styles.sample, { backgroundColor }]} />
                <Text style={styles.text} > {backgroundColor}</Text>
            </View>
        </TouchableHighlight>
    );

const styles = StyleSheet.create({
    button: {
        // fontSize:30,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,.8) '
        // textAlign:'center'
    }, row: {
        flexDirection: 'row',
        alignItems: 'center'
    }, sample: {
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white'
    }, text: {
        fontSize: 30,
        margin: 5,
    }
})
export default ColorButton;
