import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';
import ax from '../ax';

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
    const [curItem, setCurItem] = useState({});
    const [items, setItems] = useState(arr);

    var ItemPU = null;

    if (showItem === true){
    ItemPU = (
        <ItemPopUp
        setShowItem={setShowItem}
        setItemPic={setItemPic}
        ItemPic={ItemPic}
        setItems={setItems}
        curItem={curItem}
        items={items}
        />
    )}
    
    const getItems = async()=>{
        
        var data = await ax("items_read", {users_id:1, type:'h'});
        console.log(data);
        setItems(data);
    }
    
    useEffect(()=>{
        getItems();
        
        
    },[]);

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
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"row", justifyContent:"center", alignItems:"center", height: 1300}}>
                  {items.map((o,i)=>{

                    var timenow = new Date();
                    var timestart = new Date(o.exp_date);

                    var secondsnow = Date.parse(timenow);
                    var secondsstart = Date.parse(timestart);

                    var passedtime = secondsnow - secondsstart; //miliseconds /1000/60/60/24

                    var style = ItemStyles.FirstState;
                    return (
                      <TouchableOpacity style={ItemStyles.ItemPopUp}
                      onPress = {() => {
                          setShowItem(true);
                          setItemPic(arr[0]);
                          setCurItem(o);
                      }}>
                          <Image
                          style={ItemStyles.CannedTomatoes}
                          source={arr[0]}
                          />
                          <Text style={styles.ItemTxt}>{o.item_name || ""}</Text>
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
