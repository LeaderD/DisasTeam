import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({
    LoginPage:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        backgroundColor: "#FFFEF3"
    },
    LoginLogo:{
        width: "30%",
        height: "20%",
        resizeMode: "contain",
        margin: 0
    },
    AppTitle:{
        color: "#F04B53",
        fontSize: 30,
    },
    LoginButton:{
        width: "50%",
        backgroundColor: "#F04B53",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 3,
        padding: 10,
        marginBottom: "2%",
        top: "5%"
    },
    LoginButtonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        paddingBottom: 0,
        bottom: 0
    },
    LoginText: {
        width:"75%",
        height: 50,
        borderColor: "transparent",
        borderWidth: 1,
        borderBottomColor: "grey",
        fontSize: 18,
        top: "1%"
    },
    RegisterButton: {
        backgroundColor: "white",
        borderRadius:5,
        width:"50%",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
            },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 3,
        top: "5%"
        },
    RegisterButtonText:{
        color:"#F04B53",
        fontSize: 20,
        textAlign:"center"
    },
    RegisterLogo:{
        height: "10%",
        resizeMode: "contain"
    },
    RegisterText: {
        width:"75%",
        height: 50,
        borderColor: "transparent",
        borderWidth: 1,
        borderBottomColor: "grey",
        fontSize: 18,
        top: "1%"
    },
    NewRegistrationText:{
        width:"75%",
        height: 50,
        borderColor: "transparent",
        borderWidth: 1,
        borderBottomColor: "grey",
        fontSize: 18
    },
    NewRegistrationButton: {
        backgroundColor: "white",
        borderRadius:5,
        width:"50%",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
            },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 3,
        top: "5%"
    },
    RegisterSignIn:{
        backgroundColor: "transparent",
        top: "10%"
    },
    RegisterSignInText:{
        color:"#F04B53",
        fontSize: 18,
        textAlign:"center"
    }
})


export default styles;