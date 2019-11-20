import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    dashboardPage: {
        flex: 1,
        backgroundColor: '#FFFEF3'
    },
    AppTitle:{
        color: '#F04B53',
        fontSize: 30,
        paddingLeft: '34%',
        paddingTop: '11%'
    },
    helpButton: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderWidth: 2,
        borderColor: '#F04B53',
        borderRadius: 15,
        top: 50,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
