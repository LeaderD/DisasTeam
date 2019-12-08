import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import profileIcon from '../imgs/imgsPng/profile.png';
import editIcon from '../imgs/imgsPng/editnoborder.png';
import seeMoreIcon from '../imgs/imgsPng/seemore.png';
import ax from '../ax';

// styles
import ProfileStyles from '../styles/ProfileStyles';
import styles from '../styles/HomeKitStyles';
import KitStyles from '../styles/KitsStyle';
import SignOutStyles from '../styles/SignOutStyles';

// mock data

function Profile(){
    
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    
    var UserLogin = async()=>{
        
        var name = await AsyncStorage.getItem('name');
        console.log(name);
        setName(JSON.parse(name));
    }
    
    useEffect(()=>{
        UserLogin();
        
        
    },[]);
    
    

    return(
    
    <View>
        <View style={KitStyles.TopBar}>
                <Text style={KitStyles.Title}>Profile</Text>
        </View>

 
       
            <View style={ProfileStyles.profilePage}>
            
                <Image source={profileIcon} style={ProfileStyles.profileAvatar} />
                <Text style={ProfileStyles.userName}>{name}</Text>
               
                <TouchableOpacity
            onPress={()=> Actions.Login()}
                    style={SignOutStyles.LoginButton}>
                <Text style={SignOutStyles.LoginButtonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
            {UserLogin}
            
    </View>
    )
}

export default Profile;