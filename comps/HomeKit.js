/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions, AsyncStorage, SafeAreaView} from 'react-native';
import HomeKitStyles from '../styles/HomeKitStyles';
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

var arr = [
{
    state:0,
    key: 1,
    arr: tomatoes,
    name: "Canned Tomatoes",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 2,
    arr: crackers,
    name: "Crackers",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 3,
    arr: granola,
    name: "Granola Bar",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 4,
    arr: cookwater,
    name: "Cooking Water",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 5,
    arr: firstaid,
    name: "Medical Kit",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 6,
    arr: flashlight,
    name: "Flashlight",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 7,
    arr: canopener,
    name: "Can Opener",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 8,
    arr: whistle,
    name: "Whistle",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 9,
    arr: radio,
    name: "Radio",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 10,
    arr: flare,
    name: "Flare",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: documents,
    name: "Documents",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    arr: drinkwater,
    name: "Drinking Water",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    arr: sparekeys,
    name: "Spare Keys",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: candles,
    name: "Candles",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: clothes,
    name: "Clothes",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: snowbrush,
    name: "Snow Brush",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: medication,
    name: "Medication",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: money,
    name: "Money",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: idcopy,
    name: "ID",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    arr: shovel,
    name: "Shovel",
    start_date: "2019-11-03",
    days_expired: 60
},
{
    state:0,
    key: 1,
    arr: matches,
    name: "Matches",
    start_date: "2019-11-03",
    days_expired: 60
},
] 

function HomeKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, setItemPic] = useState('');
    const [curIndex, setCurIndex] = useState(0);
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
        setItemPic={setItemPic}
        ItemPic={ItemPic}
        setItems={setItems}
        curIndex={curIndex}
        items={items}
        />
    )}

    return (
        <SafeAreaView style={HomeKitStyles.Cont}>

            {/* Nav Bar */}
            <View style={HomeKitStyles.Top}>

                <View style={HomeKitStyles.BackNav}>
                    
                <TouchableOpacity style={HomeKitStyles.backBtn}
                onPress={()=>Actions.pop("Kits")}>                   
                    <Image
                    style={HomeKitStyles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                    {/* <Text> Home </Text> */}
                </TouchableOpacity>
                </View>

                <View style={HomeKitStyles.TitleNav}>
                <Text style={HomeKitStyles.Title}>Home</Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView>
                <View style={HomeKitStyles.ContentCont}>
                    
                  {items.map((o,i)=>{

                    var timenow = new Date();
                    var timestart = new Date(o.start_date);

                    var secondsnow = Date.parse(timenow);
                    var secondsstart = Date.parse(timestart);

                    var passedtime = secondsnow - secondsstart; //miliseconds /1000/60/60/24

                    var style = ItemStyles.FirstState;
                    return (
                      <TouchableOpacity style={ItemStyles.ItemPopUp}
                      onPress = {() => {
                          setShowItem(true);
                          setItemPic(o.arr[o.state]);
                          setCurIndex(i);
                      }}>
                          <Image
                          style={ItemStyles.CannedTomatoes}
                          source={o.arr[o.state]}
                          />
                          <Text style={HomeKitStyles.ItemTxt}>{o.name || ""}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
                </View>
            </ScrollView>

            {/* Henry added this */}
            {ItemPU}

    </SafeAreaView>
    )
}

export default HomeKit;
