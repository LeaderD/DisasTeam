import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({

    Top:{
        justifyContent:"center",
        alignItems: "center",
        top:0,
        height: 100,
        backgroundColor: "#FFFEF3"
    },

    backBtn:{
        justifyContent:"center",
        width: "35%",
        height: "85%",
        left: -55,
        top: 0
    },

    Title:{
        position: "absolute",
        alignItems: "center",
        color: "#F04B53",
        fontSize: 30,
    },
    Items:{
        height: 90,
        width: 90,
        position: "relative",
        borderRadius: 100/1,
        borderWidth: 8,
        borderColor: "grey",
        marginLeft: 10,
        marginRight: 10
    },
    ItemTxt:{
        position: "absolute",
        justifyContent:"center",
        fontSize: 12,
        top: 100
    }


})

export default styles;

