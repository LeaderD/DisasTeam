import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    dashboardPage: {
        flex: 1,
        backgroundColor: '#FFFEF3',
        height: "100%"
    },

    titleBar:{
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#F27C7B"
    },
    TitleCont:{
        justifyContent: "center",
    },

    /*Gradient: {
      flex: 1,
      height: "100%"
    },*/

    AppTitle:{
        color: '#FFF',
        fontSize: 30,
        left: 70
    },
    infoCont:{
        justifyContent: "center",
        // backgroundColor: "lightyellow",
        // flex: 1
    },
    helpButton: {
        height: 30,
        width: 30,
        resizeMode: "contain"
        borderWidth: 2,
        borderColor: '#F04B53',
        borderRadius: 15,
        top: 50,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#6e090e",
        shadowOffset: {
           width: 0,
            height: 2,
         },
          shadowOpacity: 0.15,
          shadowRadius: 3,

          elevation: 2,
    },
    helpButtonText: {
        color: '#F04B53',
        fontSize: 24
    },
    expiringItems: {
        alignSelf: 'flex-start',
        marginBottom: '10%',
        marginLeft: '7%',
        paddingTop: '9%',
        fontSize: 22,
        color:"#7B7B7B"
        //paddingTop: '100%',
    },
    expiringList: {
        width: '100%',

    },
    expiringItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    expiringItemImage: {
        height: 80,
        width: 80,
        marginRight: 20,
        borderWidth: 7,
        borderRadius: 60,
        marginLeft: '5%',
        borderColor: '#85E6A2'
    },
    expiringItemExpired: {
        borderColor: '#F04B53'
    },
    expiringItemExpireToday: {
        borderColor: '#FDF050'
    },
    expiringItemText: {
        marginBottom: 8,

    },
    updatedText: {
      color:"#8B8B8A",
    }
});

export default styles;
