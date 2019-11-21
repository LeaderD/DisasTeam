import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions, AsyncStorage} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import ItemPopUp from './ItemPopUp';
import {Actions} from 'react-native-router-flux';

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

var arr = [tomatoes, crackers, granola, cookwater, firstaid, flashlight, canopener, whistle, radio, flare,
  documents, drinkwater, sparekeys, candles, clothes, snowbrush, medication, money, idcopy, shovel, matches]

var names = ["Canned Tomatoes", "Crackers"]
function HomeKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, SetItemPic] = useState('');
    const [curItem, setCurItem] = useState([]);
    const [items, setItems] = useState(arr);

    var ItemPU = null;

    async function getItems(){
        //async storage to get user id
        const useritemsID = '';
        try {
            useritemsID = await AsyncStorage.getItem('userID');
        } catch (error) {
            console.log(error.message);
        };
        return useritemsID;
        //call to select all items where userID=this user id you passed over
        var itemData=async()=>{
            let response = await fetch('http://142.232.168.247/emUrgency/item_update.php',{
                method:'POST',
                header:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.encode({
                    userID: useritemsID
                })
            }) 
        let data = await response.json();
        if (data == "Got Data"){
            json.encode(useritemsID);
        }
    }
}

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
                <TouchableOpacity style={styles.backBtn}
                    onPress={()=> Actions.popTo(Kits)}>
                    <Image
                    style={styles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Home</Text>
            </View>

            <ScrollView>
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
                  {items.map((o,i)=>{
                    return (
                      <TouchableOpacity style={{alignItems:"center"}}
                      onPress = {() => {
                          setShowItem(true);
                          SetItemPic(o[0]);
                          setCurItem(o);
                      }}>
                          <Image
                          style={ItemStyles.CannedTomatoes}
                          source={o[0]}
                          />
                          <Text style={styles.ItemTxt}>{names[i] || ""}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
                </View>
            </ScrollView>

            {ItemPU}

        </View>

    )
}

export default HomeKit;
