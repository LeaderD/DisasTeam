import React from 'react';
import {View, Text, Image} from 'react-native';
import NBStyles from '../styles/NavBarStyles';

function NavBar(){
    return (
        <View style={{height:"100%", justifyContent:"flex-end"}}>
            <View style={NBStyles.container}>
                <Image
                source={require('../imgsPng/dashBoard.png')} />
                <Image/>
                <Image/>
                <Text> Lalalalal </Text>
            </View>
        </View>
    )
};

export default NavBar;
