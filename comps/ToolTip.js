import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import TTStyles from '../styles/ToolTipStyles';

function ToolTip(){
    return(
        <View style={TTStyles.cont}>
            <View style={TTStyles.TTArea}>
                <Text style={TTStyles.TTTxt}>For items that don't expire, we recommend that you check them every 3-6 months. </Text>
            </View>
        </View>
    )

};

export default ToolTip;