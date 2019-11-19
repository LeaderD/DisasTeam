import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';

var tomatoes = [require('../imgs/imgsBWpng/BWcannedfood_1.png'), require('../imgs/imgsPng/cannedfood.png')];
var crackers = [require('../imgs/imgsBWpng/BWcrackers_1.png'), require('../imgs/imgsPng/crackers.png')];
var granola = [require('../imgs/imgsBWpng/BWgranola_1.png'), require('../imgs/imgsPng/granola.png')];
var cookwater = [require('../imgs/imgsBWpng/BWcookingwater_1.png'), require('../imgs/imgsPng/cookingwater.png')];
var firstaid = [require('../imgs/imgsBWpng/BWmedicalkit_1.png'), require('../imgs/imgsPng/medicalkit.png')];
var flashlight = [require('../imgs/imgsBWpng/BWflashlight_1.png'), require('../imgs/imgsPng/flashlight.png')];
var canopener = [require('../imgs/imgsBWpng/BWcanopener_1.png'), require('../imgs/imgsPng/canopener.png')];
var whistle = [require('../imgs/imgsBWpng/BWwhistle_1.png'), require('../imgs/imgsPng/whistle.png')];
var radio = [require('../imgs/imgsBWpng/BWradio_1.png'), require('../imgs/imgsPng/radio.png')];
var flare = [require('../imgs/imgsBWpng/BWflare_1.png'), require('../imgs/imgsPng/flare.png')];
var documents = [require('../imgs/imgsBWpng/BWdocument_1.png'), require('../imgs/imgsPng/document.png')];
var drinkwater = [require('../imgs/imgsBWpng/BWwater_1.png'), require('../imgs/imgsPng/water.png')];
var sparekeys = [require('../imgs/imgsBWpng/BWkey_1.png'), require('../imgs/imgsPng/key.png')];
var candles = [require('../imgs/imgsBWpng/BWcandles_1.png'), require('../imgs/imgsPng/candles.png')];
var clothes = [require('../imgs/imgsBWpng/BWclothes_1.png'), require('../imgs/imgsPng/clothes.png')];
var snowbrush = [require('../imgs/imgsBWpng/BWsnowbrush_1.png'), require('../imgs/imgsPng/snowbrush.png')];
var medication = [require('../imgs/imgsBWpng/BWmeds_1.png'), require('../imgs/imgsPng/meds.png')];
var money = [require('../imgs/imgsBWpng/BWmoney_1.png'), require('../imgs/imgsPng/money.png')];
var idcopy = [require('../imgs/imgsBWpng/BWid_1.png'), require('../imgs/imgsPng/id.png')];
var shovel = [require('../imgs/imgsBWpng/BWshovel_1.png'), require('../imgs/imgsPng/shovel.png')];
var matches = [require('../imgs/imgsBWpng/BWmatches_1.png'), require('../imgs/imgsPng/matches.png')];


function HomeKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, SetItemPic] = useState('');
    const [curItem, setCurItem] = useState([]);

    var ItemPU = null;

    if (showItem === true){
    ItemPU = (
        <ItemPopUp
        setShowItem={setShowItem}
        SetItemPic={SetItemPic}
        ItemPic={ItemPic}
        curItem={curItem}

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
                            SetItemPic(tomatoes[0]);
                            setCurItem(tomatoes);
                        }}> 
                            <Image
                            style={ItemStyles.CannedTomatoes}
                            source={tomatoes[0]}
                            />
                            <Text style={styles.ItemTxt}>Canned Tomatoes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(crackers[0]);
                            console.log(crackers);
                        }}>
                            <Image
                            style={ItemStyles.Crackers}
                            source={crackers[0]}
                            />
                            <Text style={styles.ItemTxt}>Crackers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                         onPress = {() => {
                            setShowItem(true);
                            SetItemPic(granola[0]);
                            console.log(granola);
                        }}>
                            <Image
                            style={ItemStyles.Granola}
                            source={granola[0]}
                            />
                            <Text style={styles.ItemTxt}>Granola Bar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 60}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(cookwater[0]);
                        }}> 
                            <Image
                            style={ItemStyles.CookingWater}
                            source={cookwater[0]}
                            />
                            <Text style={styles.ItemTxt}>Cooking Water</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(firstaid[0]);
                        }}>
                            <Image
                            style={ItemStyles.MedicalKit}
                            source={firstaid[0]}
                            />
                            <Text style={styles.ItemTxt}>Medical Kit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(flashlight[0]);
                        }}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={flashlight[0]}
                            />
                            <Text style={styles.ItemTxt}>Flashlight</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(canopener[0]);

                        }}> 
                        {/* Image must be changed to correct one*/}
                            <Image
                            style={ItemStyles.CanOpener}
                            source={canopener[0]}
                            />
                            <Text style={styles.ItemTxt}>Can Opener</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(whistle[0]);
                        }}>
                            {/* Image must be changed to correct one*/}
                            <Image
                            style={ItemStyles.Whistle}
                            source={whistle[0]}
                            />
                            <Text style={styles.ItemTxt}>Whistle</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(radio[0]);
                        }}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={radio[0]}
                            />
                            <Text style={styles.ItemTxt}>Radio</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 140}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(flare[0]);
                        }}> 
                            <Image
                            style={ItemStyles.Flare}
                            source={flare[0]}
                            />
                            <Text style={styles.ItemTxt}>Flare</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(documents[0]);
                        }}>
                            <Image
                            style={ItemStyles.Documents}
                            source={documents[0]}
                            />
                            <Text style={styles.ItemTxt}>Documents</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(drinkwater[0]);
                        }}>
                            <Image
                            style={ItemStyles.Water}
                            source={drinkwater[0]}
                            />
                            <Text style={styles.ItemTxt}>Water</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 180}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(sparekeys[0]);
                        }}> 
                            <Image
                            style={ItemStyles.SpareKeys}
                            source={sparekeys[0]}
                            />
                            <Text style={styles.ItemTxt}>Spare Keys</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(candles[0]);
                        }}>
                            <Image
                            style={ItemStyles.Candles}
                            source={candles[0]}
                            />
                            <Text style={styles.ItemTxt}>Candles</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(clothes[0]);
                        }}>
                            <Image
                            style={ItemStyles.Clothes}
                            source={clothes[0]}
                            />
                            <Text style={styles.ItemTxt}>Clothes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 220}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(snowbrush[0]);
                        }}> 
                            <Image
                            style={ItemStyles.SnowBrush}
                            source={snowbrush[0]}
                            />
                            <Text style={styles.ItemTxt}>Snow Brush</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(medication[0]);
                        }}>
                            <Image
                            style={ItemStyles.Medication}
                            source={medication[0]}
                            />
                            <Text style={styles.ItemTxt}>Medication</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(money[0]);
                        }}>
                            <Image
                            style={ItemStyles.Money}
                            source={money[0]}
                            />
                            <Text style={styles.ItemTxt}>Money</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 260}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(idcopy[0]);
                        }}> 
                            <Image
                            style={ItemStyles.ID}
                            source={idcopy[0]}
                            />
                            <Text style={styles.ItemTxt}>ID</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(shovel[0]);
                        }}>
                            <Image
                            style={ItemStyles.Shovel}
                            source={shovel[0]}
                            />
                            <Text style={styles.ItemTxt}>Shovel</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(matches[0]);
                        }}>
                            <Image
                            style={ItemStyles.Matches}
                            source={matches[0]}
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