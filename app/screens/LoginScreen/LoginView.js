import React from 'react'
import { View, Text, ImageBackground, ScrollView, StatusBar, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

import styles from "./styles"
import colors from "../../config/colors"

export default function LoginView() {
    return (
        <ScrollView>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.statusColor}
                translucent={true}
            />
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Image style={styles.bannerImg}
                        source={require("../../Assets/images/banner.png")}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.lang}>
                        <TouchableOpacity onPress={() => console.log("Urdu")}>
                            <Text style={styles.langText}>
                                •   اردو
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.langText}>•  العربية{'   '}</Text>
                        <TouchableHighlight
                            onPress={() => {
                                console.log("More");
                            }}>
                            <Text style={{ color: "#3465cf" }}>{'  '}More ...</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}
