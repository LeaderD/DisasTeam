import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/HomeKitStyles';

function HomeKit(){
    return (
        <View>
            <View style={styles.Top}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                    style={styles.backBtn}
                    source={require('../imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Home</Text>
            </View>

            <View>
                <TouchableOpacity>
                <Image
                    source={require('../imgsPng/cannedfood.png')}
                    />
                </TouchableOpacity>


            </View>
        
        </View>
    )
}

export default HomeKit; 