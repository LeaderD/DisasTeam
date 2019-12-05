/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({

  Cont: {
    flex: 1,
    justifyContent: 'center',
  },
  TopBar: {
    backgroundColor: "#F27C7B",
    alignItems: "center",
    justifyContent:"center",
    height: 70
  },
  TitleTop: {
    fontSize: 40
  },
    Title:{
        color: "#FFF",
        fontSize: 40,

    },

    KitCont: {
      // backgroundColor: "lightyellow",
      height: 150,
      alignItems: "center",
      marginBottom: 40,
      top: "5%",
      // backgroundColor: "pink"
    },

    WrapCont: {
      flexWrap:'wrap', 
      flexDirection:"row", 
      // backgroundColor: "white",
      width: "75%",
      top: "10%",
      justifyContent: "space-around",
      alignItems: "center"
    },
    
    ContentCont: {
      // height: "100%",
      marginTop: 20,
      width:'100%', 
      flexDirection:"row", 
      // backgroundColor: "pink",
      justifyContent:"center"
    },

    Icon:{
        height: 120,
        width: 120
    },

    work:{
      marginRight: '12%',
      marginTop: '45%',
        height: 120,
        width: 120,
    },

    grabngo:{
      marginRight: '12%',
      marginTop: '40%',
        height: 120,
        width: 120,
    },

    car:{
      marginRight: '12%',
      marginTop: '45%',
        height: 120,
        width: 120,
        top: "2%"
    },

    KitsTxt1:{

        fontSize: 22,
        color:"#8B8B8A",
        // paddingTop: '5%'

    },

    txtVeh:{
      fontSize: 22,
      color:"#8B8B8A",
        marginRight: '10%',
        paddingTop: '2%'

    },

     txtWor:{
       fontSize: 22,
       color:"#8B8B8A",
         marginRight: '10%',
         paddingTop: '2%'
     },
     helpBut:{
      resizeMode: "contain",
      height: 35,
      width: 35,
      right: 20
  }
})

export default styles;
