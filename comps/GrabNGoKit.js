import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';

var clothes = [require('../imgs/imgsBWpng/BWclothes_1.png'), require('../imgs/imgsPng/clothes.png')];
var medication = [require('../imgs/imgsBWpng/BWmeds_1.png'), require('../imgs/imgsPng/meds.png')];
var firstaid = [require('../imgs/imgsBWpng/BWmedicalkit_1.png'), require('../imgs/imgsPng/medicalkit.png')];
var granola = [require('../imgs/imgsBWpng/BWgranola_1.png'), require('../imgs/imgsPng/granola.png')];
var drinkwater = [require('../imgs/imgsBWpng/BWwater_1.png'), require('../imgs/imgsPng/water.png')];
var whistle = [require('../imgs/imgsBWpng/BWwhistle_1.png'), require('../imgs/imgsPng/whistle.png')];
var flashlight = [require('../imgs/imgsBWpng/BWflashlight_1.png'), require('../imgs/imgsPng/flashlight.png')];
var idcopy = [require('../imgs/imgsBWpng/BWid_1.png'), require('../imgs/imgsPng/id.png')];
var money = [require('../imgs/imgsBWpng/BWmoney_1.png'), require('../imgs/imgsPng/money.png')];

var arr = [
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
            key: 2,
            arr: medication,
            name: "Medication",
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
            arr: whistle,
            name: "Whistle",
            start_date: "2019-11-03",
            days_expired: 60
        },
        {
            state:0,
            key: 7,
            arr: flashlight,
            name: "Flashlight",
            start_date: "2019-11-03",
            days_expired: 60
        },
        {
            state:0,
            key: 8,
            arr: idcopy,
            name: "ID",
            start_date: "2019-11-03",
            days_expired: 60
        },
        {
            state:0,
            key: 9,
            arr: money,
            name: "Money",
            start_date: "2019-11-03",
            days_expired: 60
        },
        ]
        
        
        
        function GrabNGoKit(){
        
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
                        <Text style={styles.Title}>Grab N' Go</Text>
                    </View>
        
                    <ScrollView>
                        <View style={{flex: 1, flexWrap:"wrap", flexDirection:"row", justifyContent:"center", alignItems:"center", height: 1300}}>
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

export default GrabNGoKit;
