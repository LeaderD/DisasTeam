import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({

    Top:{
        justifyContent:"flex-start",
        width: "100%",
        alignItems: "center",
        top:0,
        height: 100,
        backgroundColor: "#FFFEF3"
    },

    backBtn:{
        justifyContent:"center",
        alignItems: "center",
        resizeMode: "contain",
        backgroundColor: "pink",
        flex:2,
        width: "50%"
    },

    Title:{
        alignItems: "center",
        color: "#F04B53",
        backgroundColor: "lightyellow",
        fontSize: 30,
        justifyContent: "center"
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
        fontSize: 12,
        top: 10,
        textAlign:"center"
    }


})

export default styles;
