import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';
import ItemPopUp from './ItemPopUp';
import ax from '../ax';

var clothes = [require('../imgs/imgsBWpng/BWclothes_1.png'), require('../imgs/imgsPng/clothes.png')];
var medication = [require('../imgs/imgsBWpng/BWmeds_1.png'), require('../imgs/imgsPng/meds.png')];
var firstaid = [require('../imgs/imgsBWpng/BWmedicalkit_1.png'), require('../imgs/imgsPng/medicalkit.png')];
var granola = [require('../imgs/imgsBWpng/BWgranola_1.png'), require('../imgs/imgsPng/granola.png')];
var drinkwater = [require('../imgs/imgsBWpng/BWwater_1.png'), require('../imgs/imgsPng/water.png')];
var whistle = [require('../imgs/imgsBWpng/BWwhistle_1.png'), require('../imgs/imgsPng/whistle.png')];
var flashlight = [require('../imgs/imgsBWpng/BWflashlight_1.png'), require('../imgs/imgsPng/flashlight.png')];
var idcopy = [require('../imgs/imgsBWpng/BWid_1.png'), require('../imgs/imgsPng/id.png')];
var money = [require('../imgs/imgsBWpng/BWmoney_1.png'), require('../imgs/imgsPng/money.png')];

var imgs = {
    clothes,
    medication,
    firstaid,
    granola,
    drinkwater,
    whistle,
    flashlight,
    idcopy,
    money,
}




function WorkKit(){

    const [showItem, setShowItem] = useState(false);
    const [ItemPic, setItemPic] = useState('');
    const [curItem, setCurItem] = useState({});
    const [items, setItems] = useState([]);
    
    const getItems = async()=>{
        
        var data = await ax("items_read", {users_id:1, type:'w'});
        
        setItems(data);
    }
        
    
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
            getItems={getItems}
            />
        )}
        
    
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
                <Text style={styles.Title}>Work</Text>
            </View>

            <ScrollView>
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"row", justifyContent:"center", alignItems:"center", height: 1300}}>
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
                    } else if(currentYear >= expYear && currentMonth >= expMonth){
                        BorderPatrol = ItemStyles.RedBorder
                    }
                        
                    if(!expMonth || !expYear){
                        BorderPatrol = ItemStyles.GreyBorder
                    }
                   
                   
                    return (
                      <TouchableOpacity style={ItemStyles.ItemPopUp}
                      onPress = {() => {
                          setShowItem(true);
                          setCurItem(o);
                          setItemPic(newImage);
                      }}>
                          <Image
                          style={BorderPatrol}
                          source={newImage || null}
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

export default WorkKit;