import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';

var whistle = require('../imgs/imgsBWpng/BWwhistle_1.png');
var flare = require('../imgs/imgsBWpng/BWflare_1.png');
var firstaid = require('../imgs/imgsBWpng/BWmedicalkit_1.png');
var granola = require('../imgs/imgsBWpng/BWgranola_1.png');
var drinkwater = require('../imgs/imgsBWpng/BWwater_1.png');
var blankets = require('../imgs/imgsBWpng/BWblanket_1.png');
var matches = require('../imgs/imgsBWpng/BWmatches_1.png');
var candles = require('../imgs/imgsBWpng/BWcandles_1.png');
var shovel = require('../imgs/imgsBWpng/BWshovel_1.png');
var snowbrush = require('../imgs/imgsBWpng/BWsnowbrush_1.png');
var documents = require('../imgs/imgsBWpng/BWdocument_1.png');
var idcopy = require('../imgs/imgsBWpng/BWid_1.png');
var flashlight = require('../imgs/imgsBWpng/BWflashlight_1.png');
var clothes = require('../imgs/imgsBWpng/BWclothes_1.png');
var sparekeys = require('../imgs/imgsBWpng/BWkey_1.png');


function Vehicle(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, SetItemPic] = useState('');
    //const [item1, setItem1] = useState({});

    var ItemPU = null;

    if (showItem === true){
    ItemPU = (
        <ItemPopUp
        setShowItem={setShowItem}
        ItemPic={ItemPic}/>
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
                <Text style={styles.Title}>Vehicle</Text>
            </View>

            <ScrollView>
                <View style={{height: 800}}>
                    <View style={{flexDirection:"row", justifyContent:"center", top: 20}}>
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

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(flare);
                        }}> 
                            <Image
                            style={ItemStyles.Flare}
                            source={require('../imgs/imgsBWpng/BWflare_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Flare</Text>
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
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 60}}>
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

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(drinkwater);
                        }}>
                            <Image
                            style={ItemStyles.Water}
                            source={require('../imgs/imgsBWpng/BWwater_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Water</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(blankets)
                        }}>
                            <Image
                            style={ItemStyles.Blankets}
                            source={require('../imgs/imgsBWpng/BWblanket_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Blankets</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(matches);
                        }}>
                            <Image
                            style={ItemStyles.Matches}
                            source={require('../imgs/imgsBWpng/BWmatches_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Matches</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(candles);
                        }}>
                            <Image
                            style={ItemStyles.Candles}
                            source={require('../imgs/imgsBWpng/BWcandles_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Candles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(shovel);
                        }}>
                            <Image
                            style={ItemStyles.Shovel}
                            source={require('../imgs/imgsBWpng/BWshovel_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Shovel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 140}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(snowbrush);
                        }}> 
                            <Image
                            style={ItemStyles.SnowBrush}
                            source={require('../imgs/imgsBWpng/BWsnowbrush_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Snow Brush</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(documents);
                        }}>
                            <Image
                            style={ItemStyles.Documents}
                            source={require('../imgs/imgsBWpng/BWdocument_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Documents</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(idcopy);
                        }}>
                            <Image
                            style={ItemStyles.ID}
                            source={require('../imgs/imgsBWpng/BWid_1.png')}
                            />
                            <Text style={styles.ItemTxt}>ID</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 180}}>

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

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(clothes);
                        }}>
                                <Image
                                style={ItemStyles.Flashlight}
                                source={require('../imgs/imgsBWpng/BWclothes_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Clothes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(sparekeys);
                        }}>
                                <Image
                                style={ItemStyles.Flashlight}
                                source={require('../imgs/imgsBWpng/BWkey_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Spare Keys</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {ItemPU}

        </View>

    )
}

export default Vehicle;