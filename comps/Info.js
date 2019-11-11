import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/InfoStyles';

function Info(){
    return (
        <View style={styles.InfoPage}>
            <Image
                style={styles.Fire}
                    
                source={require('../imgsPng/fire.png')}
            />

            <Text style={styles.InfoTxt}>Prepare a disaster kit</Text>

            <Text style={styles.InfoPara}>When disaster strikes,</Text>
            <Text style={styles.InfoPara}>what do you take with you?</Text>

            <View style={{flex:1, flexDirection: "row", top: 125}}>
                <View style={styles.Circle1}/>
                <View style={styles.Circle2}/>
                <View style={styles.Circle3}/>
            </View>

            <TouchableOpacity style={styles.SkipButton}>
                <Text style={styles.SkipButtonText}> 
                Skip
                </Text>
            </TouchableOpacity>
        </View>
    )
};


export default Info;