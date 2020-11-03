import { StyleSheet, Dimensions } from 'react-native';

import colors from "../../config/colors";

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-end"
    },
    banner: {
        flex: 0.7
    },
    content: {
        marginHorizontal: 20
    },
    bannerImg: {
        height: 225,
        width: "100%"
    },
    WithoutBanner: {
        height: 72,
        width: (width - 100) / 2,
        marginLeft: 120,
        marginTop: 40,
        marginBottom: 10
    },
    lang: {
        color: "#707276",
        fontSize: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    langText: { color: "#707276" },
    textInput: {
        marginTop: 20,
        marginHorizontal: 40,
    },
    formInput: {
        borderBottomColor: "#ECEAEC",
        borderBottomWidth: 1,
        marginBottom: 10,
        height: 40,
        fontSize: 18,
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: "center"
    },
    textForgot: {
        marginTop: 20,
        textAlign: "center"
    },
    signOutButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    orTextContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 40,
    },
    orTextLine: {
        width: "44%",
        borderBottomWidth: 1,
        marginBottom: 13,
        borderBottomColor: "#ddd"
    },
    orText: {
        width: "10%",
        padding: 5,
        color: colors.medium
    }
});
export default styles;