import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LiveStream extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"cyan"}}>
                <Text> Live Component </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
