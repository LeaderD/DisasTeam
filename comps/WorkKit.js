import React from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';

function WorkKit(){
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

            <View style={{flexDirection:"row", justifyContent:"center", top: 20}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Clothes}
                            source={require('../imgs/imgsBWpng/BWclothes_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Change of Clothes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Medication}
                            source={require('../imgs/imgsBWpng/BWmeds_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Medication</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.MedicalKit}
                            source={require('../imgs/imgsBWpng/BWmedicalkit_1.png')}
                            />
                            <Text style={styles.ItemTxt}>First Aid Kit</Text>
                    </TouchableOpacity>

            </View>

            <View style={{flexDirection:"row", justifyContent:"center", top: 60}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Granola}
                            source={require('../imgs/imgsBWpng/BWgranola_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Food Items</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Water}
                            source={require('../imgs/imgsBWpng/BWwater_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Drinking Water</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Whistle}
                            source={require('../imgs/imgsBWpng/BWwhistle_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Whistle</Text>
                    </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Flashlight}
                            source={require('../imgs/imgsBWpng/BWflashlight_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Flashlight</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.ID}
                            source={require('../imgs/imgsBWpng/BWid_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Copy of ID</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.Shoes}
                            source={require('../imgs/imgsBWpng/BWshoes_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Shoes</Text>
                    </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center", top: 140}}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Money}
                            source={require('../imgs/imgsBWpng/BWmoney_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Money</Text>
                    </TouchableOpacity>

            </View>
        </View>
    )}

    export default WorkKit;