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
        height: 200,
        width: 350,
        paddingTop: "2%",
        backgroundColor: "#F27C7B",
        flexDirection:"row",
        borderRadius: 6,
        zIndex:10,

        padding: '2%'
        shadowColor: "#000",
        shadowOffset: {
	         width: 0,
	          height: 0,
          },
          shadowOpacity: 0.35,
          shadowRadius: 8,

          elevation: 5,
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
        width: "60%",
        alignContent: "space-between",
        marginLeft: 10,
    },
    inputs:{
        backgroundColor: "transparent",
        width: "55%",
        fontSize: 17,
        borderColor: "transparent",
        borderWidth: 1,
        borderBottomColor: "white",
        color: "#FFF",
        padding: 1,
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
        height: "60%",
        justifyContent:"center",
        alignItems:"center",
        margin: "1%",
    },
    UpdateButText:{
        color:"#F04B53",
        fontSize: 16,
        fontWeight: "600",
    },
    CancelBut:{
        backgroundColor:"rgba(255,255,255,0.2)",
        borderRadius: 3,
        width: 77,
        height: "60%",
        justifyContent:"center",
        alignItems:"center",
        margin: "1%",
    },
    CancelButText:{
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        justifyContent: "center",
        alignItems:"center"
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
    ExpText:{
        color: 'white',
        fontSize: 18,
        top: 5
    },
    ExpCont:{
        // backgroundColor: "slateblue",
        top: 5
    }

});

export default PUStyles;
