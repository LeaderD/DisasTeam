import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/KitsStyle';
import {Actions} from 'react-native-router-flux';

function Kits(){
    return (
        <View style={{flex:1, justifyContent:'center', backgroundColor: "#FFFEF3"}}>
                <Text style={styles.Title}>Kits</Text>

                <View style={{flexWrap:'wrap', flex:1, width:'100%', flexDirection:"row", justifyContent:"center"}}>
                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.HomeKit()}>
                        <Image
                        style={styles.home}
                        source={require('../imgs/imgsPng/home.png')}
                        />
                        <Text style={styles.KitsTxt1}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.WorkKit()}>
                        <Image
                        style={styles.work}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.KitsTxt1}>Work</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.GrabNGoKit()}>
                        <Image
                        style={styles.grabngo}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt1}>Grab N' Go</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.VehicleKit()}>
                        <Image
                        style={styles.car}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.KitsTxt1}>Vehicle</Text>
                    </TouchableOpacity>
                    </View>
            
        </View>
    )
}

export default Kits;
