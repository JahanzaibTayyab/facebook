import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import * as navigation from '../../rootNavigation'
function GroupPostTool(props) {
    const [inputBgColor, setinputBgColor] = useState("#fff")
    function onLiveStreamPressHandler() {
        navigation.navigate('LiveStream')
    }
    function onPhotoUploaderPressHandler() {
        navigation.navigate('PhotoUploader')
    }
    function onCheckInPressHandler() {
        navigation.navigate('CheckIn')
    }
    function onFullPostToolPressHandler() {
        const { groupDetail } = props
        navigation.navigate('FullPostTool', {
            isInGroup: true,
            groupDetail
        })
    }
    const { user } = props
    return (
        <View style={styles.container}>
            <View style={styles.postToolWrapper}>
                <TouchableOpacity activeOpacity={0.5} style={styles.userAvatarWrapper}>
                    <Image source={{ uri: user.avatar_url }} style={styles.userAvatar} ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={onFullPostToolPressHandler.bind(this)} style={styles.postInputWrapper}>
                    <View style={{ ...styles.postInput, backgroundColor: inputBgColor }}>
                        <Text>What are you thinking ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.postOptionsWrapper}>
                <TouchableOpacity onPress={onLiveStreamPressHandler} activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={styles.postOptionItem}>
                        <FontAweSome5 style={styles.postOptionIcon} name="video" color="red" size={16} />
                        <Text>Live Stream</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPhotoUploaderPressHandler} activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={{ ...styles.postOptionItem, ...styles.postOptionItemMiddle }}>
                        <FontAweSome5 style={styles.postOptionIcon} name="image" color="green" size={16} />
                        <Text>Photo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCheckInPressHandler} activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={styles.postOptionItem}>
                        <FontAweSome5 style={styles.postOptionIcon} name="map-marker-alt" color="red" size={16} />
                        <Text>Check in</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapStateToProps = () => {
    return {
        user: user.user
    }
}
export default connect(mapStateToProps, null)(GroupPostTool)
const styles = StyleSheet.create({
    container: {
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    postToolWrapper: {
        padding: 10,
        flexDirection: 'row'
    },
    postOptionsWrapper: {
        flexDirection: 'row',
        height: 40,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        alignItems: 'center'
    },
    postOptionItemWrapper: {
        flex: 1,
        height: 40,
        justifyContent: 'center'
    },
    postOptionItem: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    postOptionItemMiddle: {
        borderRightColor: '#ddd',
        borderRightWidth: 1,
        borderLeftColor: '#ddd',
        borderLeftWidth: 1
    },
    postOptionIcon: {
        marginRight: 5
    },
    postInputWrapper: {
        borderRadius: 48,
        flex: 1,
        marginLeft: 5,
    },
    postInput: {
        justifyContent: 'center',
        borderRadius: 48,
        height: 40,
        width: "100%",
        borderColor: "#ddd",
        paddingHorizontal: 10,
        borderWidth: 1
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    userAvatarWrapper: {

    }
})
