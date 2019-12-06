import {StyleSheet} from 'react-native';

var styles= StyleSheet.create({
   Cont:{
       flex:1
   },
    Help:{
        height:70,
        backgroundColor: "#F27C7B",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
    },

    backBtn:{
        width:30,
        height: 30,
        resizeMode: "contain",
    },

    backCont:{
        // backgroundColor: "red",
        marginLeft: 20,
        marginTop: 3,
        flex: 1
    },

    titleCont:{
        flex: 6,
        alignItems: "center"
    },

    Title:{
        color: "#FFF",
        fontSize:30,
        marginLeft: -70
    },
    aboutCont:{
        top: 10
    },
    Faq:{
        color: "#F58287",
        fontSize:30,
      
    },
    ContentContainer:{
        maxWidth: "80%",
        justifyContent:"center",
        // backgroundColor: "purple"
    },

    Htu:{
        color: "#F58287",
        fontSize:28,
        textAlign: "left"
    },

    bodyTxt:{
        fontSize:18,
        lineHeight:24,
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 5
    },

    htuTxt:{
        fontSize:18,
        flexShrink:1
    },

    icon:{
        width:100,
        height:100
    },
    ColourGuideCont:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    }


})

export default styles;
