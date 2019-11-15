import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import PUStyles from '../styles/ItemPopUpStyles';

var tomatoesCL = require('../imgs/imgsPng/cannedfood.png');
var crackersCL = require('../imgs/imgsPng/crackers.png');
var granolaCL = require('../imgs/imgsPng/granola.png');
var cookwaterCL = require('../imgs/imgsPng/cookingwater.png');
var firstaidCL = require('../imgs/imgsPng/medicalkit.png');
var flashlightCL = require('../imgs/imgsPng/flashlight.png');
var canopenerCL = require('../imgs/imgsPng/canopener.png');
var whistleCL = require('../imgs/imgsPng/whistle.png');
var radioCL= require('../imgs/imgsPng/radio.png');
var flareCL = require('../imgs/imgsPng/flare.png');
var documentsCL = require('../imgs/imgsPng/document.png');
var drinkwaterCL = require('../imgs/imgsPng/water.png');
var sparekeysCL = require('../imgs/imgsPng/key.png');
var candlesCL = require('../imgs/imgsPng/candles.png');
var clothesCL = require('../imgs/imgsPng/clothes.png');
var snowbrushCL = require('../imgs/imgsPng/snowbrush.png');
var medicationCL = require('../imgs/imgsPng/meds.png');
var moneyCL = require('../imgs/imgsPng/money.png');
var idcopyCL = require('../imgs/imgsPng/id.png');
var shovelCL = require('../imgs/imgsPng/shovel.png');
var matchesCL = require('../imgs/imgsPng/matches.png');


function ItemPopUp(props){

    const [ColorItem, setColorItem] = useState(false);

    var PickedSrc = null;

    var setval = null;
    

    var Update = (
        <TouchableOpacity style={PUStyles.UpdateBut}
        onPress={()=>{
            if(props.ItemPic == 24){
                props.setTomato(tomatoesCL);
                props.SetItemPic(tomatoesCL);
            }
            else if(props.ItemPic == 25){
                props.setCracker(crackersCL);
                props.SetItemPic(crackersCL);
            }
            
        }}
        >
             <Text
             style={PUStyles.UpdateButText}>UPDATE</Text>
        </TouchableOpacity>
    );

    

    return(
    <TouchableOpacity
        style={PUStyles.wrapper}
        onPress={()=>{props.setShowItem(false)}}
    >
        <View style={PUStyles.container}>
            <Image
             style={PUStyles.ItemImg}
             source={props.ItemPic}/>
        <View style={PUStyles.inputView}>
            <TextInput
              style={PUStyles.inputs}
              placeholder="Item Name">
            </TextInput>
            <TextInput
              style={PUStyles.inputs}
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
