import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NBStyles from '../styles/NavBarStyles';

function NavBar(){
    return (
        <View style={{height:"100%", justifyContent:"flex-end"}}>
            <View style={NBStyles.container}>
            <TouchableOpacity style={NBStyles.touchOp}
                onPress={()=>Actions.Kits()}>
                <Image
                style={NBStyles.navImg}
                source={require('../imgs/imgsPng/dashKit.png')}
                />
                 <Text style={NBStyles.navCap}>Kits</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={NBStyles.touchOp}
                onPress={()=>Actions.Dashboard()}>
                <Image
                style={NBStyles.navImg}
                source={require('../imgs/imgsPng/dashBoard.png')} />
                <Text style={NBStyles.navCap}>Dashboard</Text> 
            </TouchableOpacity>
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
    )
};

export default NavBar;
