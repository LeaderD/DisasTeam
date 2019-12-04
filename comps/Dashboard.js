import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, AsyncStorage, ScrollView
} from 'react-native';
import ax from '../ax';
import moment from 'moment';
import ItemStyles from '../styles/ItemStyles';
import styles from '../styles/DashboardStyles';
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
    matches
    
}

function Dashboard() {
    
    const [items, setItems] = useState([]);
    
    const getItems = async()=>{
        var users_id = await AsyncStorage.getItem('users_id');
        var data = await ax("items_read", {users_id:users_id});
        
        console.log(data);
        setItems(data);
    }
    
     var ItemPU = null;

   
    
     useEffect(()=>{
        getItems();
         
         console.log("Dashboard");
        
        
    },[]);
    
    var exp_items = items.filter((o,i)=>{
        
         var currentMonth = new Date().getMonth() +1
         var currentYear = new Date().getFullYear()
                    
         var expMonth = parseInt(o.exp_month);
         var expYear = parseInt(o.exp_year);
         var newImage = null; 
        
         if(currentYear < expYear){
             return false
         } else if(currentYear >= expYear && currentMonth >= expMonth){
             return true
         }
             
         if(!expMonth || !expYear){
             return false
         }
    })
    
        var home_items = exp_items.filter((o,i)=>{
            return o.type === 'h'
        
        })
        var work_items = exp_items.filter((o,i)=>{
            return o.type === 'w'
        
        })
        var vehicle_items = exp_items.filter((o,i)=>{
            return o.type === 'v'
        
        })
        var grabngo_items = exp_items.filter((o,i)=>{
            return o.type === 'g'
        
        })
    
        console.log(exp_items)
    
    
    return (
      <View style ={{flexWrap:'wrap', flex:1, width:'100%', flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <View style={styles.dashboardPage}>
            <View style={styles.Top}>
                <Text style={styles.AppTitle}>Dashboard</Text>
                
            <TouchableOpacity style={styles.helpButton} onPress={Actions.Profile}>
                <Text style={styles.helpButtonText}>?</Text>
            </TouchableOpacity>
            </View>
            

           
           
           <ScrollView>
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"column"}}>
            <Text style={styles.ExpItemsTitle}>Expired Home Kit Items</Text>
                  {home_items.map((o,i)=>{
                    return (
                      <View style={{flexDirection:"row"}}>
                          <Image
                          style={styles.Items}
                          source={imgs[o.img][1] || null}
                          />
                          
                        <View style={{flexDirection:"column"}}>
                          <Text style={styles.ItemTxt}>{o.item_name || ""}</Text>
                            
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.ItemTxt}>Exp Date:</Text>
                          <Text style={styles.ItemTxt}>{o.exp_month || ""}
                          </Text>
                          <Text style={styles.ItemTxt}>{o.exp_year || ""}
                          </Text>
                        </View>
                        </View>
                      </View>
                    )
                  })
                }
                </View>
               
                <View style={{flex: 1, flexWrap:"wrap", flexDirection:"column"}}>
                
                <Text style={styles.ExpItemsTitle}>Exp Work Kit Items</Text>
                  {work_items.map((o,i)=>{
                    return (
                      <View style={{flexDirection:"row"}}>
                          <Image
                          style={styles.Items}
                          source={imgs[o.img][1] || null}
                          />
                        <View style={{flexDirection:"column"}}>
                          <Text style={styles.ItemTxt}>{o.item_name || ""}</Text>
                            
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.ItemTxt}>Exp Date:</Text>
                          <Text style={styles.ItemTxt}>{o.exp_month || ""}
                          </Text>
                          <Text style={styles.ItemTxt}>{o.exp_year || ""}
                          </Text>
                        </View>
                        </View>
                      </View>
                    )
                  })
                }
                </View>
               
               <View style={{flex: 1, flexWrap:"wrap", flexDirection:"column"}}>
                
                <Text style={styles.ExpItemsTitle}>Exp Grab N' Go Kit Items</Text>
                  {grabngo_items.map((o,i)=>{
                    return (
                      <View style={{flexDirection:"row"}}>
                          <Image
                          style={styles.Items}
                          source={imgs[o.img][1] || null}
                          />
                          <View style={{flexDirection:"column"}}>
                          <Text style={styles.ItemTxt}>{o.item_name || ""}</Text>
                            
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.ItemTxt}>Exp Date:</Text>
                          <Text style={styles.ItemTxt}>{o.exp_month || ""}
                          </Text>
                          <Text style={styles.ItemTxt}>{o.exp_year || ""}
                          </Text>
                        </View>
                        </View>
                      </View>
                    )
                  })
                }
                </View>
               
               <View style={{flex: 1, flexWrap:"wrap", flexDirection:"column"}}>
                
                <Text style={styles.ExpItemsTitle}>Exp Vehicle Kit Items</Text>
                  {vehicle_items.map((o,i)=>{
                    return (
                      <View style={{flexDirection:"row"}}>
                          <Image
                          style={styles.Items}
                          source={imgs[o.img][1] || null}
                          />
                          <View style={{flexDirection:"column"}}>
                          <Text style={styles.ItemTxt}>{o.item_name || ""}</Text>
                            
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.ItemTxt}>Expiery Date:</Text>
                          <Text style={styles.ItemTxt}>{o.exp_month || ""}
                          </Text>
                          <Text style={styles.ItemTxt}>{o.exp_year || ""}
                          </Text>
                        </View>
                        </View>
                        
                            
                      </View>
                    )
                  })
                }
                </View>
               
            </ScrollView>
            
        </View>
        </View>
    )
}

export default Dashboard;
