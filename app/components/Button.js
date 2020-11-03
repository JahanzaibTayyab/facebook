import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({
    title,
    onPress,
    buttoncolor = 'primary',
    titlecolor = 'bitblue',
    width = '100%',
}) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[buttoncolor] }, { width }]}
            onPress={onPress}>
            <Text style={[styles.text, { color: colors[titlecolor] }]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        color: colors.bitblue,
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default AppButton;