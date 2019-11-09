import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/HomeKitStyles';
import NavBar from './NavBar';

function HomeKit(){
    return (
        <View>
            <View style={styles.Top}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                    style={styles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Home</Text>
            </View>

            <View style={{flex: 1, flexDirection:"row", justifyContent:"center", top: 20}}>
                <TouchableOpacity>
                    <Image
                    style={styles.Items}
                     source={require('../imgs/imgsPng/cannedfood.png')}
                     />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    style={styles.Items}
                     source={require('../imgs/imgsPng/crackers.png')}
                     />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    style={styles.Items}
                     source={require('../imgs/imgsPng/granola.png')}
                     />
                    
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default HomeKit; 