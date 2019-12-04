import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    dashboardPage: {
        flex: 1,
        backgroundColor: '#FFFEF3'
    },
    Top:{
        justifyContent:"center",
        alignItems: "center",
        top:0,
        height: 100,
        backgroundColor: "#FFFEF3"
    },
    AppTitle:{
        position: "absolute",
        alignItems: "center",
        color: "#F04B53",
        fontSize: 30,
    },
    helpButton: {
        position: 'absolute', 
        height: 40,
        width: 40,
        borderWidth: 3,
        borderColor: '#F04B53',
        borderRadius: 30,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    helpButtonText: {
        color: '#F04B53',
        fontSize: 30
    },
    ExpItemsTitle: {
        position: "relative",
        alignItems: "center",
        color: "#F04B53",
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
    }
});

export default styles;
