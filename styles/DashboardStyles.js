import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    dashboardPage: {
        flex: 1,
        backgroundColor: '#FFFEF3'
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
    },
    expiringItems: {
        alignSelf: 'flex-start',
        marginBottom: '10%',
        marginLeft: '7%',
        paddingTop: '9%',
        fontSize: 17,
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
        marginBottom: 8
    }
});

export default styles;
