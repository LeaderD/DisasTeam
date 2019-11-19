import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../styles/HelpStyles';

function Help() {
    return (

        <View style= {{flexWrap:'wrap', flex:1, width:'100%',flexDirection:"column", justifyContent:"center", }}>
            <View style={styles.Help}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                        style={styles.backBtn}
                        source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Help</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.Faq}>About us</Text>
            <Text style={styles.bodyTxt}>emUrgency allows users to create customized emergency kits based on their situation. The application will remind them to check the contents of their packs, so they will be ready in the event of a disaster.</Text>
            </View>
            <View style={{marginLeft:"5%"}}>
            <Text style={styles.Htu}>Colour indicator</Text>
            <Image style={styles.img2} source={require('../imgs/imgsPng/example1.png')} />
            <Image style={styles.img3} source={require('../imgs/imgsPng/example2.png')} />
            <Image style={styles.img4} source={require('../imgs/imgsPng/example3.png')} />
            <Text style={styles.htuTxt1}>Expiring in a week or less</Text>
            <Text style={styles.htuTxt2}>Expiring in a month</Text>
            <Text style={styles.htuTxt3}>Newly added;</Text>
            <Text style={styles.htuTxt4}>Won't be expiring in the next 2 months</Text>
            </View>
        </View>

    )
};



export default Help;
