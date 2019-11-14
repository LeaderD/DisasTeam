import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    profilePage: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 0,
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%',
        backgroundColor: '#FFFEF3'
    },
    AppTitle:{
        color: '#F04B53',
        fontSize: 30
    },
    profileAvatar: {
        height: 300,
        width: 300,
        marginTop: -50,
        marginBottom: -30
    },
    userName: {
        fontSize: 24
    },
    editButtonWrapper: {
        alignItems: 'flex-end',
        width: '100%',
    },
    editButtonIcon: {
      height: 50,
      width: 50
    },
    familyMembersList: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        fontSize: 17
    },
    expiringList: {
        width: '100%'
    },
    familyMember: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    familyMemberAvatar: {
        height: 120,
        width: 120,
        marginVertical: -20,
        marginLeft: -20
    },
    familyMemberName: {
        fontSize: 18
    },
    addFamilyMemberButton: {
        backgroundColor: "#F6BFBF",
        padding: 5,
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10
    },
    addFamilyMemberButtonIcon: {
        height: 40,
        width: 40,
        marginVertical: -8,
        marginLeft: -8
    }
});

export default styles;
