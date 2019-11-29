import React, {useState, useEffect} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import PUStyles from '../styles/ItemPopUpStyles';
import ax from '../ax';

function ItemPopUp(props){
    
    const [exptext, setExpText] = useState(props.curItem.exp_date);
    const updateItems = async()=>{
        
        var data = await ax("items_update", {id:props.curItem.id, exp_date:exptext});
        //console.log(data);
        
        //console.log(img);
    }
    
    useEffect(()=>{
        //getItems();
        
        
    },[]);


    console.log(props.curItem);
    //items_update, {id:props.curItem.id, exp_date:variable}
    var Update = (
        <TouchableOpacity style={PUStyles.UpdateBut}
        onPress={()=>{
            //console.log(props.curItem);
            props.setShowItem(false);
            updateItems();
            
            
            //props.items[props.curIndex].state = 1;
//            props.setItems(props.items.map((o)=>{
//                return o;
//            }))
//            props.SetItemPic(props.curItem[1]);
        }}
        >
             <Text
             style={PUStyles.UpdateButText}>UPDATE</Text>
        </TouchableOpacity>
    );

console.log('--------------------HERE-----------------');
console.log(props.curItem.img);
    console.log(typeof props.curItem.img);
    return(
    <TouchableOpacity
        style={PUStyles.wrapper}
        onPress={()=>{
            props.setShowItem(false)
        }}
            
    >
        <View style={PUStyles.container}>
            <Image
             style={PUStyles.ItemImg}
             source={props.curItem.img[0]}/>
            
        <View style={PUStyles.inputView}>
            <Text
              style={PUStyles.itemName}>
            {props.curItem.item_name}
            </Text>
            
            <TextInput
              style={PUStyles.inputs}
              value={exptext}
              placeholder="Expiry Date"
              keyboardType="numeric"
              onChangeText={(t)=>{
                    setExpText(t)
                }}>
            </TextInput>
        <View style={PUStyles.ButView}>
        <TouchableOpacity style={PUStyles.CancelBut}
        onPress={()=>{
            props.setShowItem(false)}
        }
        >
            <Text style={PUStyles.CancelButText}> CANCEL </Text>
        </TouchableOpacity>
            {Update}

    </View>
    </View>
    </View>
    </TouchableOpacity>
    )
};

export default ItemPopUp;
