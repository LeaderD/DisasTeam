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
        <View>
            <View style={styles.Help}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                        style={styles.backBtn}
                        source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Help</Text>
            </View>
            <Text style={styles.Faq}>FAQ</Text>
            <Text style={styles.bodyTxt}>Why emUrgency?</Text>
            <Text style={styles.bodyTxt}>Who should use this app?</Text>
            <Text style={styles.bodyTxt}>How can the emUrgency kits prepare me for a disaster?</Text>
            <Text style={styles.bodyTxt}>Can I share access to my kit?</Text>
            <Text style={styles.Htu}>Colour indicator</Text>
            <Image style={styles.img2} source={require('../imgs/imgsPng/example1.png')} />
            <Image style={styles.img3} source={require('../imgs/imgsPng/example2.png')} />
            <Image style={styles.img4} source={require('../imgs/imgsPng/example3.png')} />
            <Text style={styles.htuTxt1}>Expiring in a week or less</Text>
            <Text style={styles.htuTxt2}>Expiring in a month</Text>
            <Text style={styles.htuTxt3}>Newly added;</Text>
            <Text style={styles.htuTxt4}>Won't be expiring in the next 2 months</Text>
        </View>
    )
};



export default Help;