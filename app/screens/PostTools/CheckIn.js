import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class CheckIn extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"green"}}>
                <Text> CheckIn </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:70,
        backgroundColor: 'rgba(255,0,0,1)'
    }
})
