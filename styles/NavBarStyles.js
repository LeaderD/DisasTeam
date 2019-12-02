import {StyleSheet} from 'react-native';

var NBStyles = {
    container:{
        backgroundColor:"#F27C7B",
        height: 90,
        width: "100%",
        // justifyContent: "space-around",
        flexDirection:"row",
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
    navImg:{
        width: 70,
        height: 50
       },
    touchOp:{
        width: "30%",
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
