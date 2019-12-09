import {StyleSheet} from 'react-native';

var TutStyles = StyleSheet.create({
    mainCont:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    image: {
        height: 300,
        width: 300
    },
    title: {
        fontSize: 40,
        color: '#F04B53',
        top: "5%"
    },
    text:{
        color: '#666666',
        fontSize: 20,
        top: '-5%'
    },
    nextBut:{
        color: "#F04B53",
        backgroundColor:"#FFFFFF"
    }
});

export default TutStyles;