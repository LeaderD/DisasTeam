import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView} from 'react-native';
import HomeKitStyles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import ItemPopUp from './ItemPopUp';
import {Actions} from 'react-native-router-flux';

var clothes = require('../imgs/imgsBWpng/BWclothes_1.png');
var medication = require('../imgs/imgsBWpng/BWmeds_1.png');
var firstaid = require('../imgs/imgsBWpng/BWmedicalkit_1.png');
var granola = require('../imgs/imgsBWpng/BWgranola_1.png');
var drinkwater = require('../imgs/imgsBWpng/BWwater_1.png');
var whistle = require('../imgs/imgsBWpng/BWwhistle_1.png');
var flashlight = require('../imgs/imgsBWpng/BWflashlight_1.png');
var idcopy = require('../imgs/imgsBWpng/BWid_1.png');
var money = require('../imgs/imgsBWpng/BWmoney_1.png');

function WorkKit(){

        const [showItem, setShowItem] = useState(false);
        const [ItemPic, SetItemPic] = useState('');

        const [Clothes, setClothes] = useState(clothes);
        const [Medication, setMedication] = useState(medication);
        const [FirstAid, setFirstAid] = useState(firstaid);
        const [Granola, setGranola] = useState(granola);
        const [Drinkwater, setDrinkWater] = useState(drinkwater);
        const [Whistle, setWhistle] = useState(whistle);
        const [Flashlight, setFlashlight] = useState(flashlight);
        const [IdCopy, setIdCopy] = useState(idcopy);
        const [Money, setMoney] = useState(money);
        //const [item1, setItem1] = useState({});
    
        var ItemPU = null;
    
        if (showItem === true){
        ItemPU = (
                <View style={{width: "100%", height:Dimensions.get('window').height, justifyContent:"center", alignItems:"center", position:"absolute", top: 0}}>
                        <ItemPopUp
                        setShowItem={setShowItem}
                        SetItemPic={SetItemPic}
                        ItemPic={ItemPic}

                        setClothes={setClothes}
                        setMedication={setMedication}
                        setFirstAid={setFirstAid}
                        setGranola={setGranola}
                        setDrinkWater={setDrinkWater}
                        setWhistle={setWhistle}
                        setFlashlight={setFlashlight}
                        setIdCopy={setIdCopy}
                        setMoney={setMoney}
                        />
                </View>
        )}


    return (
        <SafeAreaView>
        <View>
            <View style={HomeKitStyles.Top}>
                <View style={HomeKitStyles.BackNav}>
                <TouchableOpacity style={HomeKitStyles.backBtn}
                onPress={()=>Actions.pop("Kits")}>
                    <Image
                    style={HomeKitStyles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                </View>
                <View style={HomeKitStyles.TitleNav}>
                <Text style={HomeKitStyles.Title}>Work</Text>
                </View>
            </View>

            <View>
                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(clothes);
                    }}>
                            <Image
                            style={ItemStyles.Clothes}
                            source={Clothes}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Change of Clothes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                     onPress = {() => {
                        setShowItem(true);
                        SetItemPic(medication);
                    }}>
                            <Image
                            style={ItemStyles.Medication}
                            source={Medication}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Medication</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(firstaid);
                    }}>
                            <Image
                            style={ItemStyles.MedicalKit}
                            source={FirstAid}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>First Aid Kit</Text>
                    </TouchableOpacity>

            </View>

            <View style={{flexDirection:"row", justifyContent:"center", top: 60}}>
                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(granola);
                    }}>
                            <Image
                            style={ItemStyles.Granola}
                            source={Granola}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Food Items</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(drinkwater);
                    }}>
                            <Image
                            style={ItemStyles.Water}
                            source={Drinkwater}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Drinking Water</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(whistle);
                    }}>
                            <Image
                            style={ItemStyles.Whistle}
                            source={Whistle}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Whistle</Text>
                    </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(flashlight);
                    }}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={Flashlight}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Flashlight</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(idcopy);
                    }}>
                            <Image
                            style={ItemStyles.ID}
                            source={IdCopy}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Copy of ID</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => {
                        setShowItem(true);
                        SetItemPic(money);
                    }}> 
                            <Image
                            style={ItemStyles.Shoes}
                            source={Money}
                            />
                            <Text style={HomeKitStyles.ItemTxt}>Money</Text>
                    </TouchableOpacity>
            </View>
            {ItemPU}
        </View>
        </SafeAreaView>
    )}

    export default WorkKit;