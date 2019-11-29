import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';
import ax from '../ax';

var whistle = [require('../imgs/imgsBWpng/BWwhistle_1.png'), require('../imgs/imgsPng/whistle.png')];
var flare = [require('../imgs/imgsBWpng/BWflare_1.png'), require('../imgs/imgsPng/flare.png')];
var firstaid = [require('../imgs/imgsBWpng/BWmedicalkit_1.png'), require('../imgs/imgsPng/medicalkit.png')];
var granola = [require('../imgs/imgsBWpng/BWgranola_1.png'), require('../imgs/imgsPng/granola.png')];
var drinkwater = [require('../imgs/imgsBWpng/BWwater_1.png'), require('../imgs/imgsPng/water.png')];
var blankets = [require('../imgs/imgsBWpng/BWblanket_1.png'),  require('../imgs/imgsPng/blanket.png')];
var matches = [require('../imgs/imgsBWpng/BWmatches_1.png'), require('../imgs/imgsPng/matches.png')];
var candles = [require('../imgs/imgsBWpng/BWcandles_1.png'), require('../imgs/imgsPng/candles.png')];
var shovel = [require('../imgs/imgsBWpng/BWshovel_1.png'), require('../imgs/imgsPng/shovel.png')];
var snowbrush = [require('../imgs/imgsBWpng/BWsnowbrush_1.png'), require('../imgs/imgsPng/snowbrush.png')];
var documents = [require('../imgs/imgsBWpng/BWdocument_1.png'), require('../imgs/imgsPng/document.png')];
var idcopy = [require('../imgs/imgsBWpng/BWid_1.png'), require('../imgs/imgsPng/id.png')];
var flashlight = [require('../imgs/imgsBWpng/BWflashlight_1.png'), require('../imgs/imgsPng/flashlight.png')];
var clothes = [require('../imgs/imgsBWpng/BWclothes_1.png'), require('../imgs/imgsPng/clothes.png')];
var sparekeys = [require('../imgs/imgsBWpng/BWkey_1.png'), require('../imgs/imgsPng/key.png')];

var imgs = {
    whistle,
    flare,
    firstaid,
    granola,
    drinkwater,
    blankets,
    matches,
    candles,
    shovel,
    snowbrush,
    documents,
    idcopy,
    flashlight,
    clothes,
    sparekeys,
    
}

function Vehicle(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, setItemPic] = useState('');
    const [curItem, setCurItem] = useState({});
    const [items, setItems] = useState([]);
    
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
        
        var data = await ax("items_read", {users_id:1, type:'w'});
        //console.log(data);
        
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
                <Text style={styles.Title}>Vehicle</Text>
            </View>

            <ScrollView>
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"row", justifyContent:"center", alignItems:"center", height: 1300}}>
                  {items.map((o,i)=>{
                        console.log(o);
                        console.log(i);
//                    var timenow = new Date();
//                    var timestart = new Date(o.exp_date);
//
//                    var secondsnow = Date.parse(timenow);
//                    var secondsstart = Date.parse(timestart);
//
//                    var passedtime = secondsnow - secondsstart; 
//                    //miliseconds /1000/60/60/24
//
//                    var style = ItemStyles.FirstState;
//                    //var img = {uri:o.active_img};
                        
                    return (
                      <TouchableOpacity style={ItemStyles.ItemPopUp}
                      onPress = {() => {
                          setShowItem(true);
                          setCurItem(o);
                      }}>
                          <Image
                          style={ItemStyles.CannedTomatoes}
                          source={imgs[o.img][0] || null}
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

export default Vehicle;