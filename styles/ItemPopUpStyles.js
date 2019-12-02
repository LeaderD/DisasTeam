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
        height: 150,
        width: 350,
        paddingTop: "2%",
        backgroundColor: "#F27C7B",
        flexDirection:"row",
        borderRadius: 6,
        zIndex:10,
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
        fontSize: 17,
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
        borderRadius: 8,
        height: "70%",
        width: 82,
        justifyContent:"center",
        alignItems:"center",
        margin: "1%",
        right: 42,
        borderColor:"#f7b1b1",
        borderWidth:2
    },
    UpdateButText:{
        color:"#F04B53",
        fontSize: 16,
        fontWeight: "600",
    },
    CancelBut:{
        backgroundColor:"rgba(255,255,255,0.2)",
        borderRadius: 8,
        height: "70%",
        width: 82,
        justifyContent:"center",
        alignItems:"center",
        margin: "1%",
        right: 54,
        borderColor:"#f7b1b1",
        borderWidth:2

    },
    CancelButText:{
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        justifyContent: "center",
        alignItems:"center"
    }

});

export default PUStyles;
