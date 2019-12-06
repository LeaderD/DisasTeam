import {StyleSheet} from 'react-native';

var CGStyles = StyleSheet.create({
    cont:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalCont: {
        width: "80%",
        backgroundColor: "#FFFEF3",
        height: "70%",
        alignItems: "center",
        borderRadius: 10,
        padding: 25,
        flexDirection: "column"
    },
    closeView:{
        // backgroundColor: "blue",
        position: "absolute",
        right: 20,
        top: 20,
    },
    closeBut:{
        resizeMode: "cover",
        height: 20,
        width: 20
    },
    title :{
        fontSize: 30,
        color: "#F04B53",
        top: 0,
    },
    itemView:{
        flexDirection: "row",
        alignItems: "center", 
        // backgroundColor: "purple"
    },
    icon:{
        resizeMode: "contain",
        width: 100,
        height: 100
    },
    iconTxt:{
        fontSize: 18,
        flexShrink: 1
    }
})

export default CGStyles;