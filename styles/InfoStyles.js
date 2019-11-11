import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({
    InfoPage:{
        alignItems:"center",
        height:"100%",
        backgroundColor: "#FFFEF3"
    },
    Fire:{
        width: 300, 
        height: 300,
        top: 50
    },
    InfoTxt: {
        color: "grey",
        fontSize: 24,
        top: 20
    },
    InfoPara: {
        color: "grey",
        fontSize: 18,
        top: 85,
        textAlign: "center",
    },
    SkipButton:{
        width: 75,
        height: 40,
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        top: -30,
        right: 125,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2, 
    },
    SkipButtonText:{
        color: "#F04B53",
        fontSize: 18,
        textAlign: "center",
    },
    Circle1:{
        width: 30,
        margin: 20,
        height: 30,
        borderRadius: 100/2,
        borderWidth: 3,
        borderColor: "grey",
        backgroundColor: "grey"
    },
    Circle2:{
        width: 30,
        margin: 20,
        height: 30,
        borderRadius: 100/2,
        borderWidth: 3,
        borderColor: "grey",
        backgroundColor: "transparent"
    },
    Circle3:{
        width: 30,
        margin: 20,
        height: 30,
        borderRadius: 100/2,
        borderWidth: 3,
        borderColor: "grey",
        backgroundColor: "transparent"
    }
})

export default styles;

    