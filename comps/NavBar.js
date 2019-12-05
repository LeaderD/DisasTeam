import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import NBStyles from '../styles/NavBarStyles';
import {Actions} from 'react-native-router-flux';

function NavBar(){
    return (
        <SafeAreaView>
        <View>
            <View style={NBStyles.container}>
            <View style={NBStyles.navElements}> 
            <TouchableOpacity style={NBStyles.touchOp}
                onPress={()=>Actions.Kits()}>
                <Image
                style={NBStyles.navImg}
                source={require('../imgs/imgsPng/dashKit.png')}
                />
                 <Text style={NBStyles.navCap}>Kits</Text>
            </TouchableOpacity>
            </View>
            <View style={NBStyles.navElements}>
            <TouchableOpacity style={NBStyles.touchOp}
                onPress={()=>Actions.Dashboard()}>
                <Image
                style={NBStyles.navImg}
                source={require('../imgs/imgsPng/dashBoard.png')} />
                <Text style={NBStyles.navCap}>Dashboard</Text>
            </TouchableOpacity>
            </View>
            <View style={NBStyles.navElements}>
            <TouchableOpacity style={NBStyles.touchOp}
            onPress={()=>Actions.Profile()}>
                <Image
                style={NBStyles.navImg}
                source={require('../imgs/imgsPng/dashProfile.png')}
                />
                <Text style={NBStyles.navCap}>Profile</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        </SafeAreaView>
    )
};

export default NavBar;
