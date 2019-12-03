import React from 'react';
import {View, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';

function Login(){
    return (
        <View style={styles.LoginPage}> 
        <Image
        style={styles.LoginLogo}
        source={require('../imgs/imgsPng/logo.png')}
        />
        <Text style={styles.AppTitle}> emUrgency </Text>
            <TextInput
            style={styles.LoginText}
            placeholder="Email Address"
            ></TextInput>

            <TextInput
            style={styles.LoginText}
            placeholder="Password"
            secureTextEntry={true}
            ></TextInput>

            <TouchableOpacity
            style={styles.LoginButton}
            onPress={()=>{Actions.Kits()}}>
            <Text
                style={styles.LoginButtonText}> Sign In </Text>
                    </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> Actions.Register()} 
            style={styles.RegisterButton}>
                <Text
                style={styles.RegisterButtonText}>Register </Text> 
                    </TouchableOpacity>
        </View>
    )
};


export default Login;