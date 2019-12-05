import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import ItemPopUp from './ItemPopUp';

var whistle = [require('../imgs/imgsBWpng/BWwhistle_1.png'), require('../imgs/imgsPng/whistle.png')];
var flare = [require('../imgs/imgsBWpng/BWflare_1.png'), require('../imgs/imgsPng/flare.png')];
var firstaid = [require('../imgs/imgsBWpng/BWmedicalkit_1.png'), require('../imgs/imgsPng/medicalkit.png')];
var granola = [require('../imgs/imgsBWpng/BWgranola_1.png'), require('../imgs/imgsPng/granola.png')];
var drinkwater = [require('../imgs/imgsBWpng/BWwater_1.png'), require('../imgs/imgsPng/water.png')];
var blankets = [require('../imgs/imgsBWpng/BWblanket_1.png'), require('../imgs/imgsPng/blanket.png')];
var matches = [require('../imgs/imgsBWpng/BWmatches_1.png'), require('../imgs/imgsPng/matches.png')];
var candles = [require('../imgs/imgsBWpng/BWcandles_1.png'), require('../imgs/imgsPng/candles.png')];
var shovel = [require('../imgs/imgsBWpng/BWshovel_1.png'), require('../imgs/imgsPng/shovel.png')];
var snowbrush = [require('../imgs/imgsBWpng/BWsnowbrush_1.png'), require('../imgs/imgsPng/snowbrush.png')];
var documents = [require('../imgs/imgsBWpng/BWdocument_1.png'), require('../imgs/imgsPng/document.png')];
var idcopy = [require('../imgs/imgsBWpng/BWid_1.png'), require('../imgs/imgsPng/id.png')];
var flashlight = [require('../imgs/imgsBWpng/BWflashlight_1.png'), require('../imgs/imgsPng/flashlight.png')];
var clothes = [require('../imgs/imgsBWpng/BWclothes_1.png'), require('../imgs/imgsPng/clothes.png')];
var sparekeys = [require('../imgs/imgsBWpng/BWkey_1.png'), require('../imgs/imgsPng/key.png')];

var arr = [whistle, flare, firstaid, granola, drinkwater, blankets, matches, candles, shovel]

var names = ["Canned Tomatoes", "Crackers", "Granola Bar", "Cooking Water", "Medical Kit", "Flashlight", "Can Opener", "Whistle", "Radio", 
             "Flare", "Documents", "Drinking Water", "Spare Keys", "Candles", "Clothes", "Snow Brush", "Medication", "Money", "ID", "Shovel", "Matches"]

function Vehicle(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, SetItemPic] = useState('');

    const [Whistle, setWhistle] = useState(whistle);
    const [Flare, setFlare] = useState(flare);
    const [FirstAid, setFirstAid] = useState(firstaid);
    const [Granola, setGranola] = useState(granola);
    const [Drinkwater, setDrinkWater] = useState(drinkwater);
    const [Blankets, setBlankets] = useState(blankets);
    const [Matches, setMatches] = useState(matches);
    const [Candles, setCandles] = useState(candles);
    const [Shovel, setShovel] = useState(shovel);
    const [SnowBrush, setSnowBrush] = useState(snowbrush);
    const [Documents, setDocuments] = useState(documents);
    const [IdCopy, setIdCopy] = useState(idcopy);
    const [Flashlight, setFlashlight] = useState(flashlight);
    const [Clothes, setClothes] = useState(clothes);
    const [SpareKeys, setSpareKeys] = useState(sparekeys);
    //const [item1, setItem1] = useState({});

    var ItemPU = null;

    if (showItem === true){
    ItemPU = (
        <ItemPopUp
        setShowItem={setShowItem}
        SetItemPic={SetItemPic}
        ItemPic={ItemPic}
        
        setWhistle={setWhistle}
        setFlare={setFlare}
        setFirstAid={setFirstAid}
        setGranola={setGranola}
        setDrinkWater={setDrinkWater}
        setBlankets={setBlankets}
        setMatches={setMatches}
        setCandles={setCandles}
        setShovel={setShovel}
        setSnowBrush={setSnowBrush}
        setDocuments={setDocuments}
        setIdCopy={setIdCopy}
        setFlashlight={setFlashlight}
        setClothes={setClothes}
        setSpareKeys={setSpareKeys}
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
                <Text style={styles.Title}>Vehicle</Text>
                <TouchableOpacity>
                    <Image style={HomeKitStyles.helpBut} source={require('../imgs/imgsPng/helpwhite.png')} />
                </TouchableOpacity>
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
                            source={whistle}
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
                            source={Flare}
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
                            source={FirstAid}
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
                            source={Granola}
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
                            source={Drinkwater}
                            />
                            <Text style={styles.ItemTxt}>Water</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                            setShowItem(true);
                            SetItemPic(blankets);
                            console.log(blankets)
                        }}>
                            <Image
                            style={ItemStyles.Blankets}
                            source={Blankets}
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
                            source={Matches}
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
                            source={Candles}
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
                            source={Shovel}
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
                            source={SnowBrush}
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
                            source={Documents}
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
                            source={IdCopy}
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
                                source={Flashlight}
                                />
                                <Text style={styles.ItemTxt}>Flashlight</Text>
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
                    </View>
                </View>
            </ScrollView>

            {ItemPU}

        </View>

    )
}

export default Vehicle;