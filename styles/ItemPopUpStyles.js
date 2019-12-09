import {StyleSheet} from 'react-native';

var PUStyles = StyleSheet.create ({
    
    wrapper:{
        position:'absolute',
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        height: 210,
        width: 350,
        backgroundColor: "#F04B53",
        flexDirection:"row",
        borderRadius: 6,
        zIndex:10,
        padding: '2%'
    },
    ItemImg:{
        resizeMode: "contain",
        height: "100%",
        alignItems:"flex-start",
        width: "35%",
        marginRight: 15,
        marginLeft: 5
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
    itemName:{
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
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "center",
    },
    UpdateBut:{
        backgroundColor: "white",
        borderRadius: 3,
        width: 77,
        height: 45,
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
        height: 45,
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
        height: 45,
        width: "75%"
    },
     monthPicker:{
        color: "rgba(0,0,0,0.5)",
        width: "40%",
        height: "100%"
    },
    yearPicker:{
        color: "rgba(0,0,0,0.5)",
        width: "40%",
        height: "100%"
    },
    ExpText:{
        color: 'white',
        fontSize: 18,
        top: 5
    },
    ExpCont:{
        top: 5
    },
    ItemNameText:{
        color: 'white',
        fontSize: 23,
        top: 6
    }
});

export default PUStyles;