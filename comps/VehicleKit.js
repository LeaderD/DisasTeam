import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
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

var arr = [
    {
        state:0,
        key: 1,
        arr: whistle,
        name: "Whistle",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 2,
        arr: flare,
        name: "Flare",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 3,
        arr: firstaid,
        name: "Medical Kit",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 4,
        arr: granola,
        name: "Granola Bar",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 5,
        arr: drinkwater,
        name: "Drinking Water",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 6,
        arr: blankets,
        name: "Blankets",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 7,
        arr: matches,
        name: "Matches",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 8,
        arr: candles,
        name: "Candles",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 9,
        arr: shovel,
        name: "Shovel",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 10,
        arr: snowbrush,
        name: "Snow Brush",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 11,
        arr: documents,
        name: "Documents",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 12,
        arr: idcopy,
        name: "ID",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 13,
        arr: flashlight,
        name: "Flashlight",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 14,
        arr: clothes,
        name: "Clothes",
        start_date: "2019-11-03",
        days_expired: 60
    },
    {
        state:0,
        key: 15,
        arr: sparekeys,
        name: "Spare Keys",
        start_date: "2019-11-03",
        days_expired: 60
    },
   
    ]
function Vehicle(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, setItemPic] = useState('');
    const [curIndex, setCurIndex] = useState(0);
    const [items, setItems] = useState(arr);

    var ItemPU = null;

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
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"row", justifyContent:"center", alignItems:"center", height: 900}}>
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
                          style={ItemStyles.FirstSate}
                          source={o.arr[o.state]}
                          />
                          <Text style={styles.ItemTxt}>{o.name || ""}</Text>
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
    

export default Vehicle;