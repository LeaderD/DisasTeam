import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import PUStyles from '../styles/ItemPopUpStyles';


function ItemPopUp(props){



    console.log(props.curItem);
    var Update = (
        <TouchableOpacity style={PUStyles.UpdateBut}
        onPress={()=>{
            console.log(props.curItem);
            props.setShowItem(false);
            props.items[props.curIndex].state = 1;
//            props.setItems(props.items.map((o)=>{
//                return o;
//            }))
//            props.SetItemPic(props.curItem[1]);
        }}
        >
             <Text
             style={PUStyles.UpdateButText}>UPDATE</Text>
        </TouchableOpacity>
    );



    return(
    <TouchableOpacity
        style={PUStyles.wrapper}
        onPress={()=>{
            props.setShowItem(false)
        }}
            
    >
        <View style={PUStyles.container}>
            <Image
             style={PUStyles.ItemImg}
             source={props.ItemPic}/>
        <View style={PUStyles.inputView}>
            <TextInput
              style={PUStyles.inputs}
              defaultValue={props.curItem.item_name}
              placeholder="Item Name">
            </TextInput>
            <TextInput
              style={PUStyles.inputs}
              value={props.curItem.exp_date}
              placeholder="Expiry Date"
              keyboardType="numeric">
            </TextInput>
        <View style={PUStyles.ButView}>
        <TouchableOpacity style={PUStyles.CancelBut}
        onPress={()=>{
            props.setShowItem(false)}
        }
        >
            <Text style={PUStyles.CancelButText}> CANCEL </Text>
        </TouchableOpacity>
            {Update}

    </View>
    </View>
    </View>
    </TouchableOpacity>
    )
};

export default ItemPopUp;
