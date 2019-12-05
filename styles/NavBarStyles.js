import {StyleSheet} from 'react-native';

var NBStyles = {
    container:{
        height: 70,
        width: "100%",
        justifyContent: "space-around",
        flexDirection:"row",
        backgroundColor:"#F16467",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
	         width: 0,
	          height: -2,
          },
          shadowOpacity: 0.30,
          shadowRadius: 3.84,

          elevation: 5,
    },
    navElements:{
        width: "33%",
        // backgroundColor:"blue",
        alignItems: "center"
    },
    navImg:{
        width: 60,
        height: 40
       },
    touchOp:{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems:'center'
    },
    navCap:{
        color:"white",
        fontSize: 16,
    }
}

export default NBStyles;
