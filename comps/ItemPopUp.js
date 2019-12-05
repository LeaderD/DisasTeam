import React, {useState, useEffect} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, Picker} from 'react-native';
import PUStyles from '../styles/ItemPopUpStyles';
import ax from '../ax';

function ItemPopUp(props){
    
    const [exptextmonth, setExpTextMonth] = useState(props.curItem.exp_month);
    const [exptextyear, setExpTextYear] = useState(props.curItem.exp_year);
    
    const updateItems = async()=>{
        
        var data = await ax("items_update", {id:props.curItem.id, exp_month:exptextmonth || '01', exp_year:exptextyear || '2019'});
        //console.log(data);
        props.getItems();
        //console.log(img);
    }
    
    useEffect(()=>{
        //getItems();
        
        
    },[]);


    console.log(props.curItem);
    var Update = (
        <TouchableOpacity style={PUStyles.UpdateBut}
        onPress={()=>{
            props.setShowItem(false);
            updateItems();
            
        }}
        >
             <Text
             style={PUStyles.UpdateButText}>UPDATE</Text>
        </TouchableOpacity>
    );

    return(
    <View
        style={PUStyles.wrapper}
        // onPress={()=>{
        //     props.setShowItem(false)
        // }}
        >
        <View style={PUStyles.container}>
            <Image
             style={PUStyles.ItemImg}
             source={props.ItemPic}/>
        <TouchableOpacity style={PUStyles.TTCont}>
            <Image style={PUStyles.toolTip}source={require('../imgs/imgsPng/helpwhite.png')} />
            </TouchableOpacity>     
        <View style={PUStyles.inputView}>
            <Text style={PUStyles.ExpText}>Name</Text>
            
        <View style={PUStyles.inputView}>
            <Text
              style={PUStyles.ExpText}>
            {props.curItem.item_name}
            </Text>
            <View style={PUStyles.ExpCont}>
                
            <Text style={PUStyles.ExpText}>Exp Date</Text>
                
            <View style={PUStyles.PickerView}>
            <Picker 
            style={PUStyles.monthPicker}
            selectedValue={exptextmonth}
            onValueChange={(t)=>{setExpTextMonth(t)}}>
                <Picker.Item label="Jan" value="01"/>
                <Picker.Item label="Feb" value="02"/>
                <Picker.Item label="Mar" value="03"/>
                <Picker.Item label="Apr" value="04"/>
                <Picker.Item label="May" value="05"/>
                <Picker.Item label="Jun" value="06"/>
                <Picker.Item label="Jul" value="07"/>
                <Picker.Item label="Aug" value="08"/>
                <Picker.Item label="Sep" value="09"/>
                <Picker.Item label="Oct" value="10"/>
                <Picker.Item label="Nov" value="11"/>
                <Picker.Item label="Dec" value="12"/>
            </Picker>
            <Picker 
            style={PUStyles.yearPicker}
            selectedValue={exptextyear}
            onValueChange={(t)=>{setExpTextYear(t)}}>
                <Picker.Item label="2019" value="2019"/>
                <Picker.Item label="2020" value="2020"/>
                <Picker.Item label="2021" value="2021"/>
                <Picker.Item label="2022" value="2022"/>
                <Picker.Item label="2023" value="2023"/>
                <Picker.Item label="2024" value="2024"/>
                <Picker.Item label="2025" value="2025"/>
            </Picker>
            </View>
            </View>
        <View style={PUStyles.ButView}>
            
        <TouchableOpacity style={PUStyles.CancelBut}
        onPress={()=>{
        props.setShowItem(false)}
        }>
            <Text style={PUStyles.CancelButText}> CANCEL </Text>
        </TouchableOpacity>
            {Update}

    </View>
    </View>
    </View>
    </View>
    </View>
    )
};

export default ItemPopUp;
