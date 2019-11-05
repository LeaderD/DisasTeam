import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Styleheet} from 'react-native';
import styles from '../styles/LoginStyles';


function RedButton(){
    return (
        <TouchableOpacity
        style={styles.LoginButton}>
            <Text
            style={styles.LoginButtonText}> </Text> 
                </TouchableOpacity>
    )
}

export default RedButton;