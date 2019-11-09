import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from '../styles/HelpStyles';

function Help(){
    return (
        <View style={styles.Help}>
            <TouchableOpacity style={styles.backBtn}>
                <Image
                style={styles.backBtn}
                source={require('../imgs/imgsPng/backbutton.png')}
                />
            </TouchableOpacity>
            <Text style={styles.Title}>Help</Text>
        </View>
    )
};



export default Help;