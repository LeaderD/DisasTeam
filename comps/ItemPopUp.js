import React from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import PUStyles from '../styles/ItemPopUpStyles'

function ItemPopUp(){
    return(
    <View style={{height:"100%", justifyContent:"flex-end"}}>
    <View style={PUStyles.container}>
        <Image
        style={PUStyles.ItemImg}
        source={require('../imgsPng/baby.png')}/>
    <View style={PUStyles.inputView}>
        <TextInput 
        style={PUStyles.inputs}
        placeholder="Item Name"></TextInput>
        <TextInput
         style={PUStyles.inputs}
         placeholder="Expiry Date"
         keyboardType="numeric"></TextInput>
    <View style={PUStyles.ButView}>
        <TouchableOpacity style={PUStyles.CancelBut}>
            <Text style={PUStyles.CancelButText}> CANCEL </Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={PUStyles.UpdateBut}>
             <Text
             style={PUStyles.UpdateButText}>UPDATE</Text>
        </TouchableOpacity>
    </View>
    </View>
    </View>
    </View>
    )
};

export default ItemPopUp;