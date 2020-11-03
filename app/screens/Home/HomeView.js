import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'


import styles from "./styles"

function HomeView() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "blue", fontWeight: "bold", fontSize: 40 }}>facebook</Text>
                <View style={{ paddingRight: 40, top: 10 }}>
                    <FontAwesome5Icon name="search" size={25} color="black" />
                </View>
            </View>


        </View>
    );
}
export default HomeView
