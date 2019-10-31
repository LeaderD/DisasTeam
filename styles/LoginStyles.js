import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({
    LoginPage:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        backgroundColor: "#FFFEF3"
    },
    AppTitle:{
        color: "#F04B53",
        fontSize: 30
    },
    LoginButton:{
        width: "50%",
        backgroundColor: "#F04B53",
        borderRadius: 5,
        bottom: "2%",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 1.0,
        elevation: 5,
        shadowRadius: 1,
        shadowOffset: {width:5, height:15}
    },
    LoginButtonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    LoginText: {
        width:"75%",
        borderColor: "transparent",
        borderWidth: 0.5,
        borderBottomColor: "grey",
        fontSize: 18,
        bottom: "3%"
    },
    RegisterButton: {
        backgroundColor: "white",
        borderRadius:5,
        width:"50%"
    },
    RegisterButtonText:{
        color:"#F04B53",
        fontSize: 20,
        textAlign:"center"
    }
})

export default styles;