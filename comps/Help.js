import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
import styles from '../styles/HelpStyles';
import {Actions} from 'react-native-router-flux';

function Help() {
    return (

        <SafeAreaView style={styles.Cont}>
        <View>
            <View style={styles.Help}>
                <View style={styles.backCont}>
                <TouchableOpacity
                onPress={()=>Actions.pop("Dashboard")}>
                    <Image
                        style={styles.backBtn}
                        source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                </View>
                <View style={styles.titleCont}>
                <Text style={styles.Title}>Help</Text>
                </View>
            </View>
        </View>
        <ScrollView>
        <View style={{alignItems:"center"}}>
            <View style={styles.ContentContainer}>
        <View style={styles.aboutCont}>
            <Text style={styles.Faq}>About emUrgency</Text>
            <Text style={styles.bodyTxt}>emUrgency is an app that helps you and your family prepare for a disaster situation. Our main goal is to help you start and maintain the contents of your emergency kit, so you'll always be ready in the event of a disaster.</Text>
        </View>
        <Text style={styles.Faq}>Background</Text>
            <Text style={styles.bodyTxt}>British Columbia is overdue for a massive earthquake, often dubbed as the Big One. Upon doing research about 54% of British Columbians are unprepared for the event of a disaster, including fires, floods, and earthquakes.
            </Text>
            {/* <Text style={styles.Htu}>Colour Guide</Text>
        <View style={styles.ColourGuideCont}> 
            <Image style={styles.icon} source={require('../imgs/imgsPng/example1.png')} />
            <Text style={styles.htuTxt}>Expired, replace this item immediately.</Text>
        </View>
        <View style={styles.ColourGuideCont}> 
            <Image style={styles.icon} source={require('../imgs/imgsPng/example2.png')} />
            <Text style={styles.htuTxt}>Expiring in 1-2 month. Replace soon. </Text>
        </View>
        <View style={styles.ColourGuideCont}> 
            <Image style={styles.icon} source={require('../imgs/imgsPng/example3.png')} />
            <Text style={styles.htuTxt}>Won't be expiring in the next 2 months.</Text>
        </View>            */}
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
};



export default Help;
