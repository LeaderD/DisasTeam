import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({
    Display:{
        backgroundColor: "#FFFEF3",
        height: "100%"
    },
    WelcomeTitle:{
        color:"#F04B53",
        fontSize: 25,
        textAlign:"left",
        paddingLeft: 50,
        top: 125
    },
    WelcomePara:{
        color: "grey",
        fontSize: 18,
        paddingLeft: 50,
        top: 145,
        width: "85%"
    },
    LearnMoreButton:{
        width: 175,
        height: 40,
        backgroundColor: "#F04B53",
        borderRadius: 5,
        justifyContent: "center",
        top: 200,
        left: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2, 
    },
    LearnMoreButtonText:{
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    GetStartedButton:{
        width: 175,
        height: 40,
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        top: 220,
        left: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2, 
    },
    GetStartedButtonText:{
        color: "#F04B53",
        fontSize: 18,
        textAlign: "center",
    }
})

export default styles;