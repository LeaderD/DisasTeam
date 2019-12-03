import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/KitsStyle';
import NavBar from './NavBar';
import {Actions} from 'react-native-router-flux';

function Kits(){
    return (
        <View style={{flex:1, justifyContent:'center', backgroundColor: "#FFFEF3"}}>
                <Text style={styles.Title}>Kits</Text>

                <View style={{flexWrap:'wrap', flex:1, width: '100%', flexDirection:"row", justifyContent:"center", alignItems: "center"}}>
                    <TouchableOpacity style={{alignItems:"center"}}
                        onPress={()=> Actions.HomeKitPage()}>
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
                        <Text style={styles.txtWor}>Work</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.grabngo}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt1}>Grab N' Go</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Image
                        style={styles.car}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.txtVeh}>Vehicle</Text>
                    </TouchableOpacity>
                    </View>

        </View>
    )
}

export default Kits;
