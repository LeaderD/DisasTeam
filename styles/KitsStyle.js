/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({

  Cont: {
    flex: 1,
    justifyContent: 'center',
  },
  TopBar: {
    backgroundColor: "#FFFEF3",
    alignItems: "center",
    justifyContent:"center",
    height: 90,
    marginTop: "-10%"
  },
  TitleTop: {
    fontSize: 30
  },
    Title:{
        color: "#F04B53",
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
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: -10,
          height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,

        elevation: 3,
    },

    ContentCont: {
      // height: "100%",
      width:'100%',
      flexDirection:"row",
      // backgroundColor: "pink",
      justifyContent:"center",
      backgroundColor: "#FFFEF3",
      height: "100%"
    },

    Icon:{
        height: 120,
        width: 120,

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
     }

})

export default styles;
