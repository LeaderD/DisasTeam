/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/KitsStyle';
import HomeKitStyles from '../styles/HomeKitStyles';
import {Actions} from 'react-native-router-flux';

function Kits(){
    return (
        <SafeAreaView HomeKitStyles={styles.Cont}>
            
        {/* Top Bar */}
        <View style={styles.TopBar}>
                <Text style={styles.Title}>Kits</Text>
        </View>

        {/* Content */}

                <View style={styles.ContentCont}>
                    <View style={styles.WrapCont}>
                    <TouchableOpacity
                    onPress={()=>Actions.HomeKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/home.png')}
                        />
                        <Text style={styles.KitsTxt1}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.WorkKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.KitsTxt1}>Work</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.GrabNGoKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt1}>Grab N' Go</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.VehicleKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.KitsTxt1}>Home</Text>
                        </View>
                    </TouchableOpacity>


                    {/* <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.WorkKit()}>
                        <Image
                        style={styles.work}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.txtWor}>Work</Text>
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
                        <Text style={styles.txtVeh}>Vehicle</Text>
                    </TouchableOpacity> */}
                    </View>

                    </View>
        </SafeAreaView>
    )
}

export default Kits;
