import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet,Button } from 'react-native';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm'
const ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};
export default class Screen1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            availableColors: [
                { color: '#6698d9', id: '_qekle1xfr' },
                { color: '#f2c48d', id: '_vy77q0zzg' },
                { color: '#027338', id: '_w6wvtmg0f' },
                { color: '#d93d04', id: '_egmh2ai39' },
            ]
        };
    }

    newcolor = async (color) => {
        const COLORS = await [...this.state.availableColors, { color, id: ID() }]
        this.setState({ availableColors: COLORS })
    }
    render() {
        /* STATE DECONSTRUCTION */
        const { navigate } = this.props.navigation
        const { availableColors, backgroundColor } = this.state
        return (
            <SafeAreaView style={[styles.constainer, { backgroundColor }]} >
                
                <ColorForm onNewColor={this.newcolor} />
                <FlatList
                    data={availableColors}
                    renderItem={({ item }) => <ColorButton key={item.id} backgroundColor={item.color} onSelect={(color) => navigate('Details', { color })} />}
                    keyExtractor={item => item.id}
                />
                <Button
                    title="Go Gallery"
                    onPress={() =>
                        this.props.navigation.navigate('Gallery')
                    }
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        paddingTop: 30,
    }
});