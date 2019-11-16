import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';

var tomatoes = require('../imgs/imgsBWpng/BWcannedfood_1.png');
var crackers = require('../imgs/imgsBWpng/BWcrackers_1.png');
var granola = require('../imgs/imgsBWpng/BWgranola_1.png');
var cookwater = require('../imgs/imgsBWpng/BWcookingwater_1.png');
var firstaid = require('../imgs/imgsBWpng/BWmedicalkit_1.png');
var flashlight = require('../imgs/imgsBWpng/BWflashlight_1.png');
var canopener = require('../imgs/imgsBWpng/BWcanopener_1.png');
var whistle = require('../imgs/imgsBWpng/BWwhistle_1.png');
var radio = require('../imgs/imgsBWpng/BWradio_1.png');
var flare = require('../imgs/imgsBWpng/BWflare_1.png');
var documents = require('../imgs/imgsBWpng/BWdocument_1.png');
var drinkwater = require('../imgs/imgsBWpng/BWwater_1.png');
var sparekeys = require('../imgs/imgsBWpng/BWkey_1.png');
var candles = require('../imgs/imgsBWpng/BWcandles_1.png');
var clothes = require('../imgs/imgsBWpng/BWclothes_1.png');
var snowbrush = require('../imgs/imgsBWpng/BWsnowbrush_1.png');
var medication = require('../imgs/imgsBWpng/BWmeds_1.png');
var money = require('../imgs/imgsBWpng/BWmoney_1.png');
var idcopy = require('../imgs/imgsBWpng/BWid_1.png');
var shovel = require('../imgs/imgsBWpng/BWshovel_1.png');
var matches = require('../imgs/imgsBWpng/BWmatches_1.png');

function HomeKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, SetItemPic] = useState('');
    const [Tomato, setTomato] = useState(tomatoes);
    const [Cracker, setCracker] = useState(crackers);
    const [Granola, setGranola] = useState(granola);
    const [CookWater, setCookWater] = useState(cookwater);
    const [FirstAid, setFirstAid] = useState(firstaid);
    const [Flashlight, setFlashlight] = useState(flashlight);
    const [CanOpener, setCanOpener] = useState(canopener);
    const [Whistle, setWhistle] = useState(whistle);
    const [Radio, setRadio] = useState(radio);
    const [Flare, setFlare] = useState(flare);
    const [Documents, setDocuments] = useState(documents);
    const [Drinkwater, setDrinkWater] = useState(drinkwater);
    const [SpareKeys, setSpareKeys] = useState(sparekeys);
    const [Candles, setCandles] = useState(candles);
    const [Clothes, setClothes] = useState(clothes);
    const [SnowBrush, setSnowBrush] = useState(snowbrush);
    const [Medication, setMedication] = useState(medication);
    const [Money, setMoney] = useState(money);
    const [IdCopy, setIdCopy] = useState(idcopy);
    const [Shovel, setShovel] = useState(shovel);
    const [Matches, setMatches] = useState(matches);
    //const [item1, setItem1] = useState({});

    var ItemPU = null;

    if (showItem === true){
    ItemPU = (
        <ItemPopUp
        setShowItem={setShowItem}
        SetItemPic={SetItemPic}
        ItemPic={ItemPic}

        setTomato={setTomato}
        setCracker={setCracker}
        setGranola={setGranola}
        setCookWater={setCookWater}
        setFirstAid={setFirstAid}
        setFlashlight={setFlashlight}
        setCanOpener={setCanOpener}
        setWhistle={setWhistle}
        setRadio={setRadio}
        setFlare={setFlare}
        setDocuments={setDocuments}
        setDrinkWater={setDrinkWater}
        setSpareKeys={setSpareKeys}
        setCandles={setCandles}
        setClothes={setClothes}
        setSnowBrush={setSnowBrush}
        setMedication={setMedication}
        setMoney={setMoney}
        setIdCopy={setIdCopy}
        setShovel={setShovel}
        setMatches={setMatches}
        />
    )}

    return (
        <View>
            <View style={styles.Top}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                    style={styles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Home</Text>
            </View>

            <ScrollView>
                <View style={{height: 1050}}>
                    <View style={{flexDirection:"row", justifyContent:"center", top: 20}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(tomatoes);
                            console.log(tomatoes);
                        }}> 
                            <Image
                            style={ItemStyles.CannedTomatoes}
                            source={Tomato}
                            />
                            <Text style={styles.ItemTxt}>Canned Tomatoes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(crackers);
                            console.log(crackers);
                        }}>
                            <Image
                            style={ItemStyles.Crackers}
                            source={Cracker}
                            />
                            <Text style={styles.ItemTxt}>Crackers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                         onPress = {() => {
                            setShowItem(true);
                            SetItemPic(granola);
                            console.log(granola);
                        }}>
                            <Image
                            style={ItemStyles.Granola}
                            source={Granola}
                            />
                            <Text style={styles.ItemTxt}>Granola Bar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 60}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(cookwater);
                        }}> 
                            <Image
                            style={ItemStyles.CookingWater}
                            source={CookWater}
                            />
                            <Text style={styles.ItemTxt}>Cooking Water</Text>
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
                            <Text style={styles.ItemTxt}>Medical Kit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(flashlight);
                        }}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={Flashlight}
                            />
                            <Text style={styles.ItemTxt}>Flashlight</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(canopener);

                        }}> 
                        {/* Image must be changed to correct one*/}
                            <Image
                            style={ItemStyles.CanOpener}
                            source={CanOpener}
                            />
                            <Text style={styles.ItemTxt}>Can Opener</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(whistle);
                        }}>
                            {/* Image must be changed to correct one*/}
                            <Image
                            style={ItemStyles.Whistle}
                            source={Whistle}
                            />
                            <Text style={styles.ItemTxt}>Whistle</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(radio);
                        }}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={Radio}
                            />
                            <Text style={styles.ItemTxt}>Radio</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 140}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(flare);
                        }}> 
                            <Image
                            style={ItemStyles.Flare}
                            source={Flare}
                            />
                            <Text style={styles.ItemTxt}>Flare</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(documents);
                        }}>
                            <Image
                            style={ItemStyles.Documents}
                            source={Documents}
                            />
                            <Text style={styles.ItemTxt}>Documents</Text>
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
                            <Text style={styles.ItemTxt}>Water</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 180}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(sparekeys);
                        }}> 
                            <Image
                            style={ItemStyles.SpareKeys}
                            source={SpareKeys}
                            />
                            <Text style={styles.ItemTxt}>Spare Keys</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(candles);
                        }}>
                            <Image
                            style={ItemStyles.Candles}
                            source={Candles}
                            />
                            <Text style={styles.ItemTxt}>Candles</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(clothes);
                        }}>
                            <Image
                            style={ItemStyles.Clothes}
                            source={Clothes}
                            />
                            <Text style={styles.ItemTxt}>Clothes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 220}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(snowbrush);
                        }}> 
                            <Image
                            style={ItemStyles.SnowBrush}
                            source={SnowBrush}
                            />
                            <Text style={styles.ItemTxt}>Snow Brush</Text>
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
                            <Text style={styles.ItemTxt}>Medication</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(money);
                        }}>
                            <Image
                            style={ItemStyles.Money}
                            source={Money}
                            />
                            <Text style={styles.ItemTxt}>Money</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 260}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(idcopy);
                        }}> 
                            <Image
                            style={ItemStyles.ID}
                            source={IdCopy}
                            />
                            <Text style={styles.ItemTxt}>ID</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(shovel);
                        }}>
                            <Image
                            style={ItemStyles.Shovel}
                            source={Shovel}
                            />
                            <Text style={styles.ItemTxt}>Shovel</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(matches);
                        }}>
                            <Image
                            style={ItemStyles.Matches}
                            source={Matches}
                            />
                            <Text style={styles.ItemTxt}>Matches</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {ItemPU}

        </View>
        
    )
}

export default HomeKit; 