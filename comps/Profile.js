import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image
} from 'react-native';

// icons
import profileIcon from '../imgs/imgsPng/profile.png';
import editIcon from '../imgs/imgsPng/editnoborder.png';
import seeMoreIcon from '../imgs/imgsPng/seemore.png';

// styles
import ProfileStyles from '../styles/ProfileStyles';
import styles from '../styles/HomeKitStyles';
import KitStyles from '../styles/KitsStyle';

// mock data

function Profile(){
    
    return(
    
    <View>
        <View style={KitStyles.TopBar}>
                <Text style={KitStyles.Title}>Profile</Text>
        </View>

 
     
            <View style={ProfileStyles.profilePage}>
            
                <Image source={profileIcon} style={ProfileStyles.profileAvatar} />
                <Text style={ProfileStyles.userName}>Rebecca</Text>
               
            </View>
            
    </View>
    )
}

export default Profile;