import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';

var clothes = require('../imgs/imgsBWpng/BWclothes_1.png');
var medication = require('../imgs/imgsBWpng/BWmeds_1.png');
var firstaid = require('../imgs/imgsBWpng/BWmedicalkit_1.png');
var granola = require('../imgs/imgsBWpng/BWgranola_1.png');
var drinkwater = require('../imgs/imgsBWpng/BWwater_1.png');
var whistle = require('../imgs/imgsBWpng/BWwhistle_1.png');
var flashlight = require('../imgs/imgsBWpng/BWflashlight_1.png');
var idcopy = require('../imgs/imgsBWpng/BWid_1.png');
var money = require('../imgs/imgsBWpng/BWmoney_1.png');

function GrabNGoKit(){

    const [showItem, setShowItem] = useState(false);
    //const [HideItem, setHideItem] = useState(false);
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
    
//     if (HideItem === true){
//     ItemPU = (
//       <View>
//         <ItemPopUp style={{display:"none"}}/>
//       </View>
//      )} 


    return (
        <View
        // onPress = {() => {
        //         setHideItem(!HideItem);
        // }}
        >
             <View style={styles.Top}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                    style={styles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Grab N' Go</Text>
            </View>

                <View style={{flexDirection:"row", justifyContent:"center", top: 20}}>
                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                          setShowItem(true);
                          SetItemPic(clothes);
                        }}>
                                <Image
                                style={ItemStyles.Clothes}
                                source={require('../imgs/imgsBWpng/BWclothes_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Change of Clothes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                          setShowItem(true);
                          SetItemPic(medication);
                        }}>
                                <Image
                                style={ItemStyles.Medication}
                                source={require('../imgs/imgsBWpng/BWmeds_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Medication</Text>
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
                                <Text style={styles.ItemTxt}>First Aid Kit</Text>
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
                                <Text style={styles.ItemTxt}>Food Items</Text>
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
                                <Text style={styles.ItemTxt}>Drinking Water</Text>
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
                </View>

                <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
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
                          SetItemPic(idcopy);
                        }}>
                                <Image
                                style={ItemStyles.ID}
                                source={require('../imgs/imgsBWpng/BWid_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Copy of ID</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}
                        onPress = {() => {
                          setShowItem(true);
                          SetItemPic(money);
                        }}>
                                <Image
                                style={ItemStyles.Shoes}
                                source={require('../imgs/imgsBWpng/BWmoney_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Money</Text>
                        </TouchableOpacity>
                </View>


                {ItemPU}

                {/* <View style={{alignItems:"center", , width:"100%", position:"absolute", top:255}}>

                    <NavBar />

                </View> */}
        </View>

    )
}

export default GrabNGoKit;
