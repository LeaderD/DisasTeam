/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({
    
    Cont: {
        flex: 1,
    },

    ContentCont: {
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    
    Top:{
        alignItems: "center",
        height: 70,
        flexDirection: 'row',
        backgroundColor:"#F16467",
    },
    
    BackNav: {
        flex: 1,
        marginLeft: 20,
        marginTop: 3
    },
    backBtn:{
        justifyContent:"center",
        alignItems: "center",
        resizeMode: "contain",
        width: 30,
        height: 30
    },

    // Home Title Container
    TitleNav: {
        flex: 6,
        alignItems: "center",
    },

    Title:{
        alignItems: "center",
        color: "white",
        // backgroundColor: "lightyellow",
        fontSize: 35,
        justifyContent: "center",
        marginLeft: -30
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
    },
    helpBut:{
        resizeMode: "contain",
        height: 35,
        width: 35,
        // backgroundColor: "red",
        right: 25
    }


})

export default styles;
