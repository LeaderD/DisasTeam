import React from 'react';
import {
    View,
    Text, 
    Modal,
    TouchableOpacity,
    Image
} from 'react-native';
import CGStyles from '../styles/ColorGuideStyles';


function ColorGuide(){
    return (
        <View style={CGStyles.cont}>
            <View style={CGStyles.modalCont}>
            <View style={CGStyles.closeView}>
            <TouchableOpacity>
            <Image source={require('../imgs/imgsPng/close.png')} 
            style={CGStyles.closeBut}/>
             </TouchableOpacity>
             </View>
            <View>
                <Text style={CGStyles.title}>Colour Guide</Text>
                <Text style={CGStyles.iconTxt}>This colour guide will help you determine which items in your kit need to be replaced. </Text>
            </View>
        <View style={CGStyles.itemView}> 
            <Image 
            style={CGStyles.icon}
            source={require('../imgs/imgsPng/example1.png')} />
            <Text style={CGStyles.iconTxt}>Expired, replace this item immediately.</Text>
        </View>
        <View style={CGStyles.itemView}> 
            <Image 
            style={CGStyles.icon}
            source={require('../imgs/imgsPng/example2.png')} />
            <Text style={CGStyles.iconTxt}>Expiring in 1-2 months. Replace soon. </Text>
        </View>
        <View style={CGStyles.itemView}> 
            <Image 
            style={CGStyles.icon}
            source={require('../imgs/imgsPng/example3.png')} />
            <Text style={CGStyles.iconTxt}>Won't be expiring in the next 2 months.</Text>
        </View>
        </View> 
    </View>
    )
}

export default ColorGuide;