import React, {useState, useEffect} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, Picker} from 'react-native';
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
             source={props.ItemPic}/>
            
        <View style={PUStyles.inputView}>
            <Text
              style={PUStyles.itemName}>
            {props.curItem.item_name}
            </Text>
            
            {/*<TextInput
              style={PUStyles.inputs}
              value={exptext}
              placeholder="Expiry Date"
              keyboardType="numeric"
              onChangeText={(t)=>{
                    setExpText(t)
                }}>
            </TextInput>*/}
            
            <Picker 
            // selectedValue={this.state.language}
            // onValueChange={(itemValue, itemIndex) => this.setState({language:itemValue})}
            style={PUStyles.monthPicker}>
                <Picker.Item label="01" value="01"/>
                <Picker.Item label="02" value="02"/>
                <Picker.Item label="03" value="03"/>
                <Picker.Item label="04" value="04"/>
                <Picker.Item label="05" value="05"/>
                <Picker.Item label="06" value="06"/>
                <Picker.Item label="07" value="07"/>
                <Picker.Item label="08" value="08"/>
                <Picker.Item label="09" value="09"/>
                <Picker.Item label="10" value="10"/>
                <Picker.Item label="11" value="11"/>
                <Picker.Item label="12" value="12"/>
            </Picker>
            <Picker style={PUStyles.yearPicker}>
                <Picker.Item label="2019" value="2019"/>
                <Picker.Item label="2020" value="2020"/>
                <Picker.Item label="2021" value="2021"/>
                <Picker.Item label="2022" value="2022"/>
                <Picker.Item label="2023" value="2023"/>
                <Picker.Item label="2024" value="2024"/>
                <Picker.Item label="2025" value="2025"/>
            </Picker>
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
