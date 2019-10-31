import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from '../styles/WelcomeStyles';

function Welcome(){
    return (
        <View style={styles.Display}>
            <Text style={styles.WelcomeTitle}>
                Welcome Rebecca,
            </Text>

            <Text style={styles.WelcomePara}>
                Thank you for downloading
                emUrgency, an app that will help
                you and your family prepare for a
                disaster.
             </Text>

             <TouchableOpacity style={styles.LoginButton}>
                <Text style={styles.LoginButtonText}> 
                Learn More
                </Text>
            </TouchableOpacity>

        </View>
    )
};

export default Welcome;