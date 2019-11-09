import {StyleSheet} from 'react-native';

var PUStyles = StyleSheet.create ({
    container:{
        height: "30%",
        backgroundColor: "#F04B53",
        width: "100%",
        flexDirection:"row"
    },
    ItemImg:{
        resizeMode: "contain",
        height: "100%",
        alignItems:"flex-start",
        width: "40%"
    },
    inputView:{
        width: "100%",
        height: "40%",
        alignItems: "flex-start"
    },
    inputs:{
        backgroundColor: "transparent",
        width: "55%",
        fontSize: 18,
        borderColor: "transparent",
        borderWidth: 1,
        borderBottomColor: "white",
        color: "#FFF",
        alignItems:"flex-end",
        padding: "2%",
        top: 10
    },
    ButView:{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems:"flex-end",
        top: 10,
        left: 50
    },
    UpdateBut:{
        backgroundColor: "white",
        borderRadius: 3,
        height: "70%",
        width: "20%",
        justifyContent:"center",
        alignItems:"center",
        margin: "1%"
    },
    UpdateButText:{
        color:"#F04B53",
        fontSize: 16,
        fontWeight: "600",
    },
    CancelBut:{
        backgroundColor:"rgba(255,255,255,0.2)",
        height: "70%",
        width: "20%",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 3,
        margin: "1%"
    },
    CancelButText:{
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    }

});

export default PUStyles;