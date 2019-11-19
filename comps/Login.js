import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var UserLogin=async()=>{
        let response = await fetch('http://142.232.164.160/emUrgency/user_login.php',{
            method:'POST',
            header:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email: email,
                password: password
            })
        })
    
        let data = await response.json();
        console.log(data);

        if(data == "You're logged in."){
            Actions.Dashboard();
        }
    }

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
            onChangeText={(t)=>{setEmail(t)}}
            ></TextInput>

            <TextInput
            style={styles.LoginText}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(t)=>{setPassword(t)}}
            ></TextInput>

            <TouchableOpacity
            style={styles.LoginButton}
            onPress={()=>{
                UserLogin();
            }}>
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