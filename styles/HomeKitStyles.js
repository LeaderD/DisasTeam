/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

var HomeKitStyles = StyleSheet.create ({
    Cont: {
    flex: 1,
    },

    ContentCont: {
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },

    // Nav Bar
    Top:{
        alignItems: "center",
        height: 70,
        flexDirection: 'row',
        backgroundColor:"#FFFEF3",
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
    },


    // Back Arrow Container
    BackNav: {
        flex: 1,
        // backgroundColor: "pink",
        marginLeft: 20,
        marginTop: 3
    },
    backBtn:{
        justifyContent:"center",
        alignItems: "center",
        resizeMode: "contain",
        width: 50,
        height: 50
    },

    // Home Title Container
    TitleNav: {
        flex: 6,
        alignItems: "center",
        // backgroundColor: "purple",
    },

    Title:{
        alignItems: "center",
        color: "#F04B53",
        // backgroundColor: "lightyellow",
        fontSize: 30,
        justifyContent: "center",
        marginLeft: -75
    },

    Items:{
        height: 90,
        width: 90,
        position: "relative",
        borderRadius: 100/1,
        borderWidth: 8,
        borderColor: "grey",
        marginLeft: 10,
        marginRight: 10,
    },
    ItemTxt:{
        fontSize: 12,
        top: 10,
        textAlign:"center"
    }


})

export default HomeKitStyles;
