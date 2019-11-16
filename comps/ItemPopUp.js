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
            else if(props.ItemPic == 26){
                props.setGranola(granolaCL);
                props.SetItemPic(granolaCL);
            }
            else if(props.ItemPic == 27){
                props.setCookWater(cookwaterCL);
                props.SetItemPic(cookwaterCL);
            }
            else if(props.ItemPic == 28){
                props.setFirstAid(firstaidCL);
                props.SetItemPic(firstaidCL);
            }
            else if(props.ItemPic == 29){
                props.setFlashlight(flashlightCL);
                props.SetItemPic(flashlightCL);
            }
            else if(props.ItemPic == 30){
                props.setCanOpener(canopenerCL);
                props.SetItemPic(canopenerCL);
            }
            else if(props.ItemPic == 31){
                props.setWhistle(whistleCL);
                props.SetItemPic(whistleCL);
            }
            else if(props.ItemPic == 32){
                props.setRadio(radioCL);
                props.SetItemPic(radioCL);
            }
            else if(props.ItemPic == 33){
                props.setFlare(flareCL);
                props.SetItemPic(flareCL);
            }
            else if(props.ItemPic == 34){
                props.setDocuments(documentsCL);
                props.SetItemPic(documentsCL);
            }
            else if(props.ItemPic == 35){
                props.setDrinkWater(drinkwaterCL);
                props.SetItemPic(drinkwaterCL);
            }
            else if(props.ItemPic == 36){
                props.setSpareKeys(sparekeysCL);
                props.SetItemPic(sparekeysCL);
            }
            else if(props.ItemPic == 37){
                props.setCandles(candlesCL);
                props.SetItemPic(candlesCL);
            }
            else if(props.ItemPic == 38){
                props.setClothes(clothesCL);
                props.SetItemPic(clothesCL);
            }
            else if(props.ItemPic == 39){
                props.setSnowBrush(snowbrushCL);
                props.SetItemPic(snowbrushCL);
            }
            else if(props.ItemPic == 40){
                props.setMedication(medicationCL);
                props.SetItemPic(medicationCL);
            }
            else if(props.ItemPic == 41){
                props.setMoney(moneyCL);
                props.SetItemPic(moneyCL);
            }
            else if(props.ItemPic == 42){
                props.setIdCopy(idcopyCL);
                props.SetItemPic(idcopyCL);
            }
            else if(props.ItemPic == 43){
                props.setShovel(shovelCL);
                props.SetItemPic(shovelCL);
            }
            else if(props.ItemPic == 44){
                props.setMatches(matchesCL);
                props.SetItemPic(matchesCL);
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
