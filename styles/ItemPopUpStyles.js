import {StyleSheet} from 'react-native';

var PUStyles = StyleSheet.create ({
    wrapper:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: "purple"
    },
    container:{
        height: 230,
        width: 350,
        backgroundColor: "#F04B53",
        flexDirection:"row",
        borderRadius: 6,
        zIndex:10,
        padding: '2%',
        alignItems: "center"
    },
    ItemImg:{
        resizeMode: "contain",
        height: "100%",
        alignItems:"flex-start",
        width: "40%",
        // backgroundColor: "red"
    },
    inputView:{
        flexDirection: "column",
        // backgroundColor: "brown",
        width: "60%"
    },
    inputs:{
        backgroundColor: "transparent",
        fontSize: 17,
        borderColor: "transparent",
        borderWidth: 1,
        borderBottomColor: "white",
        color: "#FFF",
        padding: 0,
        width: "90%"
    },
    ButView:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "center",
        // backgroundColor: "aliceblue"
    },
    UpdateBut:{
        backgroundColor: "white",
        borderRadius: 3,
        width: 77,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        // margin: "1%",
    },
    UpdateButText:{
        color:"#F04B53",
        fontSize: 16,
        fontWeight: "600"
    },
    CancelBut:{
        backgroundColor:"rgba(255,255,255,0.2)",
        borderRadius: 3,
        width: 77,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        // margin: "1%",
    },
    CancelButText:{
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    PickerView:{
        flexDirection: "row",
        // backgroundColor: "pink",
        height: 45,
    },
    monthPicker:{
        color: "rgba(0,0,0,0.5)",
        // backgroundColor: "maroon",
        width: "45%",
        height: "100%"
    },
    yearPicker:{
        color: "rgba(0,0,0,0.5)",
        // backgroundColor: "thistle",
        width: "55%",
        height: "100%"
    },
    ExpCont: {
        top: 5
    },
    ExpText:{
        color: 'white',
        fontSize: 18,
        width: "75%"
    },
    ExpTitles:{
        flexDirection: "row",
        // backgroundColor:"pink"
    },
    toolTip:{
        resizeMode: "contain",
        width: 30,
        height: 30,
    },
    toolTipCont:{
        width: "25%",
        // backgroundColor: "aliceblue",
        alignItems: "center",
        justifyContent: "center"
    },
    TTCont:{
        // backgroundColor: "blue",
        position: "absolute",
        top: 10,
        right: 10
    }

});

export default PUStyles;
