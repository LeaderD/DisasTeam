import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

// icons
import profileIcon from '../imgs/imgsPng/profile.png';
import editIcon from '../imgs/imgsPng/editnoborder.png';
import seeMoreIcon from '../imgs/imgsPng/seemore.png';

// styles
import styles from '../styles/ProfileStyles';

// mock data

const familyMemberItems = [
    {
        id: 1,
        name: 'Lauren'
    },
    {
        id: 2,
        name: 'Richard'
    },
    {
        id: 3,
        name: 'Christopher'
    }
];


class Profile extends React.Component {
    renderFamilyMember = ({item}) => {
        return (
            <TouchableOpacity style={styles.familyMember}>
                <Image source={profileIcon} style={styles.familyMemberAvatar} />
                <Text style={styles.familyMemberName}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={styles.profilePage}>
                <Text style={styles.AppTitle}>Profile</Text>
                <Image source={profileIcon} style={styles.profileAvatar} />
                <Text style={styles.userName}>Rebecca</Text>
                <View style={styles.editButtonWrapper}>
                    <TouchableOpacity style={styles.editButton}>
                        <Image source={editIcon} style={styles.editButtonIcon} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.familyMembersList}
                    data={familyMemberItems}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderFamilyMember}
                />
                <TouchableOpacity style={styles.addFamilyMemberButton}>
                    <Image source={seeMoreIcon} style={styles.addFamilyMemberButtonIcon} />
                    <Text>Add Family Member</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Profile;
