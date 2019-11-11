import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/KitsStyles';
import NavBar from './NavBar';

function Kits(){
    return (
        <View style={{backgroundColor: "#FFFEF3"}}>
                <Text style={styles.Title}>Kits</Text>
                <View style={{flex: 1, flexDirection:"row", justifyContent:"center", top: 50}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.kitItems}
                        source={require('../imgs/imgsPng/home.png')}
                        />
                        <Text style={styles.KitsTxt}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.kitItems}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.KitsTxt}>Work</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection:"row", justifyContent:"center", top: 90}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.kitItems}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt}>Grab N' Go</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.kitItems}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.KitsTxt}>Vehicle</Text>
                    </TouchableOpacity>
                    </View>
        </View>
    )
}

export default Kits;
