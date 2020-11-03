import React, { useState } from 'react'
import {
    View, Text, ImageBackground, ScrollView, StatusBar, Image, TouchableOpacity, TouchableHighlight, TextInput, TouchableWithoutFeedback,
    KeyboardAvoidingView, Keyboard, Platform
} from 'react-native'

import styles from "./styles"
import colors from "../../config/colors"
import Button from "../../components/Button"

export default function LoginView() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailTitle, setEmailTitle] = useState('Phone or email')
    const [passwordTitle, setPasswordTitle] = useState('Password')
    const [loginTitle, setLoginTitle] = useState("Log In")
    const [forgetTitle, setForgetTitle] = useState("Forget Password?")
    const [orTitle, setOrTitle] = useState("OR")
    const [signUpTitle, setsignUpTitle] = useState("Create New Facebook Account")
    const [focused, setfocused] = useState(false)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            enable={true}
        >
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.statusColor}
                    translucent={true}
                />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.banner}>
                            <Image
                                style={(focused) ? styles.WithoutBanner : styles.bannerImg}
                                source={(focused) ? require("../../Assets/images/facebookLogo.png") : require("../../Assets/images/banner.png")}
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
                        <View style={styles.textInput}>
                            <TextInput
                                onFocus={() => setfocused(true)}
                                style={styles.formInput}
                                placeholder={emailTitle}
                                onChangeText={inputEmail =>
                                    setEmail(inputEmail)
                                }
                            />
                            <TextInput
                                onFocus={() => setfocused(true)}
                                style={styles.formInput}
                                placeholder={passwordTitle}
                                onChangeText={inputPassword =>
                                    setPassword(inputPassword)
                                }
                            />
                        </View>
                        <View style={styles.loginButton}>
                            <Button
                                title={loginTitle}
                                titlecolor="grey"
                                width="80%"
                                onPress={() => console.log("Login Button")}
                            />
                            <Button
                                title={forgetTitle}
                                titlecolor={"lightblue"}
                                buttoncolor={'white'}
                                width="80%"
                                onPress={() => console.log("Forget Password")}
                            />
                        </View>
                        <View style={styles.orTextContainer}>
                            <View style={styles.orTextLine} />
                            <Text style={styles.orText}>{orTitle}
                            </Text>
                            <View style={styles.orTextLine} />
                        </View>
                        <View style={styles.signOutButton}>
                            <Button
                                title={signUpTitle}
                                titlecolor="white"
                                buttoncolor={'green'}
                                width="60%"
                                onPress={() => console.log("Forget Password")}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>


        </KeyboardAvoidingView>
    )
}
