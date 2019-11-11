import React from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../styles/HomeKitStyles';
import ItemStyles from '../styles/ItemStyles';
import NavBar from './NavBar';

function Vehicle(){
    return (
        <View>
             <View style={styles.Top}>
                <TouchableOpacity style={styles.backBtn}>
                    <Image
                    style={styles.backBtn}
                    source={require('../imgs/imgsPng/backbutton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>Vehicle</Text>
            </View>

            <ScrollView>
                <View style={{height: 1050}}>
                    <View style={{flexDirection:"row", justifyContent:"center", top: 20}}>
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Whistle}
                            source={require('../imgs/imgsBWpng/BWwhistle_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Whistle</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.Flare}
                            source={require('../imgs/imgsBWpng/BWflare_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Flare</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.MedicalKit}
                            source={require('../imgs/imgsBWpng/BWmedicalkit_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Medical Kit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 60}}>
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Granola}
                            source={require('../imgs/imgsBWpng/BWgranola_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Granola Bar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Water}
                            source={require('../imgs/imgsBWpng/BWwater_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Water</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Blankets}
                            source={require('../imgs/imgsBWpng/BWblanket_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Blankets</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 100}}>
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Matches}
                            source={require('../imgs/imgsBWpng/BWmatches_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Matches</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Candles}
                            source={require('../imgs/imgsBWpng/BWcandles_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Candles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Shovel}
                            source={require('../imgs/imgsBWpng/BWshovel_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Shovel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 140}}>
                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.SnowBrush}
                            source={require('../imgs/imgsBWpng/BWsnowbrush_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Snow Brush</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image
                            style={ItemStyles.Documents}
                            source={require('../imgs/imgsBWpng/BWdocument_1.png')}
                            />
                            <Text style={styles.ItemTxt}>Documents</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center"}}> 
                            <Image
                            style={ItemStyles.ID}
                            source={require('../imgs/imgsBWpng/BWid_1.png')}
                            />
                            <Text style={styles.ItemTxt}>ID</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top: 180}}>

                        <TouchableOpacity style={{alignItems:"center"}}>
                                <Image
                                style={ItemStyles.Flashlight}
                                source={require('../imgs/imgsBWpng/BWflashlight_1.png')}
                                />
                                <Text style={styles.ItemTxt}>Flashlight</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>

        </View>

    )
}

export default Vehicle;