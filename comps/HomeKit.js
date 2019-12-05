/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions, AsyncStorage, SafeAreaView} from 'react-native';
import HomeKitStyles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import ItemPopUp from './ItemPopUp';
import ax from '../ax';
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
var imgs = {
    tomatoes,
    crackers,
    granola,
    cookwater,
    firstaid,
    flashlight,
    canopener,
    whistle,
    radio,
    flare,
    documents,
    drinkwater,
    sparekeys,
    candles,
    clothes,
    snowbrush,
    medication,
    money,
    idcopy,
    shovel,
    matches,
    
}

function HomeKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, setItemPic] = useState('');
    const [curItem, setCurItem] = useState({});
    const [items, setItems] = useState([]);
    
     const getItems = async()=>{
        var users_id = await AsyncStorage.getItem('users_id');
        var data = await ax("items_read", {users_id:users_id, type:'h'});

        setItems(data);
    }

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
        curItem={curItem}
        items={items}
        getItems={getItems}
        />
    )}
    
   
    
    useEffect(()=>{
        getItems();
        
        
    },[]);

    return (
        <SafeAreaView style={HomeKitStyles.Cont}>

            {/* Nav Bar */}
            <View style={HomeKitStyles.Top}>

                <View style={HomeKitStyles.BackNav}>
                    
                <TouchableOpacity style={HomeKitStyles.backBtn}
                onPress={()=>Actions.pop("Kits")}>                   
                    <Image
                    style={HomeKitStyles.backBtn}
                    source={require('../imgs/imgsPng/backbuttonwhite.png')}
                    />
                    {/* <Text> Home </Text> */}
                </TouchableOpacity>
                </View>

                <View style={HomeKitStyles.TitleNav}>
                <Text style={HomeKitStyles.Title}>Home</Text>
                </View>
                <TouchableOpacity>
                    <Image style={HomeKitStyles.helpBut} source={require('../imgs/imgsPng/helpwhite.png')} />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <ScrollView>
                <View style={HomeKitStyles.ContentCont}>
                    
                  {items.map((o,i)=>{
                    
                    var currentMonth = new Date().getMonth() +1
                    var currentYear = new Date().getFullYear()
                    
                    var expMonth = parseInt(o.exp_month);
                    var expYear = parseInt(o.exp_year);
                    var newImage = null; 
                        
                    if(o.exp_month && o.exp_year){
                        newImage = imgs[o.img][1]
                    }else{
                        newImage = imgs[o.img][0]
                    }
                         
                        
                    var BorderPatrol = null;  
                    
                    if(currentYear < expYear){
                        BorderPatrol = ItemStyles.GreenBorder
                    } else if(currentYear === expYear && (expMonth - currentMonth === 1 || expMonth - currentMonth === -11)){
                        BorderPatrol = ItemStyles.YellowBorder
                    }else if(currentYear >= expYear && currentMonth >= expMonth){
                        BorderPatrol = ItemStyles.RedBorder
                    } 
                        
                    if(!expMonth || !expYear){
                        BorderPatrol = ItemStyles.GreyBorder
                    }
                       
                    return (
                      <TouchableOpacity key={i} 
                          style={ItemStyles.ItemPopUp}
                      onPress = {() => {
                          setShowItem(true);
                          setCurItem(o);
                          setItemPic(newImage);
                        
                      }}>
                          <Image
                          style={BorderPatrol}
                          source={newImage || null}
                          />
                          <Text style={HomeKitStyles.ItemTxt}>{o.item_name || ""}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
                </View>
            </ScrollView>
            {ItemPU}

    </SafeAreaView>
    )
}

export default HomeKit;
