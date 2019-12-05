import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

// icons
import profileIcon from '../imgs/imgsPng/profile.png';
import editIcon from '../imgs/imgsPng/editnoborder.png';
import seeMoreIcon from '../imgs/imgsPng/seemore.png';

// styles
import ProfileStyles from '../styles/ProfileStyles';
import styles from '../styles/HomeKitStyles';
import KitStyles from '../styles/KitsStyle';
import SignOutStyles from '../styles/SignOutStyles';

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
               
                <TouchableOpacity
            onPress={()=> Actions.Login()}
                    style={SignOutStyles.LoginButton}>
                <Text style={SignOutStyles.LoginButtonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
            
            
    </View>
    )
}

export default Profile;