import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    profilePage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#FFFEF3'
    },
    top: {
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: "100%",
        flexDirection: 'row',
        backgroundColor:"#F27C7B",
    },
    AppTitle:{
        color: '#FFF',
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
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 17,
        width: "80%"
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
