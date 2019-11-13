import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/KitsStyle';
import NavBar from './NavBar';

function Kits(){
    return (
        <View style={{backgroundColor: "#FFFEF3", height:"100%"}}>
            <View style= {{alignItems:"center", height:"100%", width:"100%", position:"absolute"}}>
                    <NavBar />
                    </View>
                <Text style={styles.Title}>Kits</Text>
                <View style={{flexDirection:"row", justifyContent:"center", marginTop:"40%"}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.home}
                        source={require('../imgs/imgsPng/home.png')}
                        />
                        <Text style={styles.KitsTxt1}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.work}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.KitsTxt2}>Work</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:"row", justifyContent:"center"}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.grabngo}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt3}>Grab N' Go</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.car}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.KitsTxt4}>Vehicle</Text>
                    </TouchableOpacity>
                    </View>
            
        </View>
    )
}

export default Kits;
