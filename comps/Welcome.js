import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/WelcomeStyles';

function Welcome(){
    return (
        <View style={styles.Display}>
            <Text style={styles.WelcomeTitle}>
                Welcome,
            </Text>

            <Text style={styles.WelcomePara}>
                Thank you for downloading
                emUrgency, an app that will help
                you and your family prepare for a
                disaster.
             </Text>

             <TouchableOpacity style={styles.LearnMoreButton}>
                <Text style={styles.LearnMoreButtonText}> 
                {/* <Image 
                style={styles.LearnMoreArrow}
                // source={require('../imgs/imgsPng/next1.png')} /> */}
                Learn More
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.GetStartedButton}>
                <Text style={styles.GetStartedButtonText}> 
                Get Started
                </Text>
            </TouchableOpacity>

        </View>
    )
};

export default Welcome;
