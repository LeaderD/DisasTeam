import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/LoginStyles';


function WhiteButton(){
    return (
        <TouchableOpacity
        style={styles.RegisterButton}>
            <Text
            style={styles.RegisterButtonText}> </Text> 
                </TouchableOpacity>
    )
}

export default WhiteButton;