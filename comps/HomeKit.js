import React, {useState} from 'react';
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
var sparekeys = require('../imgs/imgsBWpng/BWkey_1.png');
var medication = require('../imgs/imgsBWpng/BWmeds_1.png');
var money = require('../imgs/imgsBWpng/BWmoney_1.png');
var drinkwater = require('../imgs/imgsBWpng/BWwater_1.png');
var idcopy = require('../imgs/imgsBWpng/BWid_1.png');
var shovel = require('../imgs/imgsBWpng/BWshovel_1.png');
var matches = require('../imgs/imgsBWpng/BWmatches_1.png');


function HomeKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, SetItemPic] = useState('');
    //const [item1, setItem1] = useState({});

    var ItemPU = null;

    if (showItem === true){
    ItemPU = (
      <View style={{width: "100%", height:Dimensions.get('window').height, justifyContent:"center", alignItems:"center", position:"absolute", top: 0}}>
        <ItemPopUp
        setShowItem={setShowItem}
        ItemPic={ItemPic}/>
      </View>
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
                        }}> 
                            <Image
                            style={ItemStyles.CannedTomatoes}
                            source={require('../imgs/imgsBWpng/BWcannedfood_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Canned Tomatoes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(crackers);
                        }}>
                            <Image
                            style={ItemStyles.Crackers}
                            source={require('../imgs/imgsBWpng/BWcrackers_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Crackers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                         onPress = {() => {
                            setShowItem(true);
                            SetItemPic(granola);
                        }}>
                            <Image
                            style={ItemStyles.Granola}
                            source={require('../imgs/imgsBWpng/BWgranola_1.png')}
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
                            source={require('../imgs/imgsBWpng/BWcookingwater_1.png')}
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
                            source={require('../imgs/imgsBWpng/BWmedicalkit_1.png')}
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
                            source={require('../imgs/imgsBWpng/BWflashlight_1.png')}
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
                            <Image
                            style={ItemStyles.CanOpener}
                            source={require('../imgs/imgsBWpng/BWcanopener_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Can Opener</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(whistle);
                        }}>
                            <Image
                            style={ItemStyles.Whistle}
                            source={require('../imgs/imgsBWpng/BWwhistle_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Whistle</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={require('../imgs/imgsBWpng/BWradio_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Radio</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 140}}>
                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.Flare}
                            source={require('../imgs/imgsBWpng/BWflare_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Flare</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Documents}
                            source={require('../imgs/imgsBWpng/BWdocument_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Documents</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Water}
                            source={require('../imgs/imgsBWpng/BWwater_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Water</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 180}}>
                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.SpareKeys}
                            source={require('../imgs/imgsBWpng/BWkey_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Spare Keys</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Candles}
                            source={require('../imgs/imgsBWpng/BWcandles_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Candles</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Clothes}
                            source={require('../imgs/imgsBWpng/BWclothes_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Clothes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 220}}>
                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.SnowBrush}
                            source={require('../imgs/imgsBWpng/BWsnowbrush_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Snow Brush</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Medication}
                            source={require('../imgs/imgsBWpng/BWmeds_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Medication</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Money}
                            source={require('../imgs/imgsBWpng/BWmoney_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Money</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 260}}>
                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.ID}
                            source={require('../imgs/imgsBWpng/BWid_1.png')}
                            />
                            <Text style={styles.ItemTxt}>ID</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Shovel}
                            source={require('../imgs/imgsBWpng/BWshovel_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Shovel</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Matches}
                            source={require('../imgs/imgsBWpng/BWmatches_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Matches</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {ItemPU}

            </ScrollView>

        </View>
        
    )
}



export default HomeKit; 