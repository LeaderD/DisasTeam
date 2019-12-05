import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    dashboardPage: {
        flex: 1,
        backgroundColor: '#FFFEF3',
        height: "100%"
    },

    Top:{
        justifyContent:"center",
        alignItems: "center",
        top:0,
        height: 70,
        backgroundColor: "#F16467"
    },
    AppTitle:{
        position: "absolute",
        alignItems: "center",
        color: "#FFF",
        fontSize: 30,
    }, 
    titleBar:{
        height: 70,
        top: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#F16467"
    },
    TitleCont:{
        justifyContent: "center",
    },
    infoCont:{
        justifyContent: "center",
        // backgroundColor: "lightyellow",
        // flex: 1
    },
    helpButton: {
        position: 'absolute',                         
        height: 40,
        width: 40,
        resizeMode: "contain",
        borderWidth: 3,
        borderColor: '#FFF',
        borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      right: 20
    },
    helpButtonText: {
        color: '#FFF',
        fontSize: 30
    },
    ExpItemsTitle: {
        position: "relative",
        alignItems: "center",
        color: "#F16467",
        fontSize: 18,
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 20
    },
    Items:{
        height: 90,
        width: 90,
        position: "relative",
        borderRadius: 100/1,
        borderWidth: 8,
        borderColor: "red",
        marginLeft: 20,
        marginTop: 10
    },
    ItemTxt:{
        position:"relative",
        fontSize: 18,
        textAlign:"left",
        justifyContent:"center",
        alignItems: "center",
        top: 20,
        marginLeft: 20
    },
    ExpDateTxt:{
        position:"relative",
        fontSize: 18,
        color:'#F04B53',
        top: 30,
        marginLeft: 20
    },
    MonthTxt:{
        position:"relative",
        fontSize: 18,
        top: 30,
        paddingLeft: 30
        
    },
    YearTxt:{
        position:"relative",
        fontSize: 18,
        top: 30,
        paddingLeft: 10
    }
});

export default styles;
