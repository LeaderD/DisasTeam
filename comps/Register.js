import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';


function Register(){
    var UserRegister=async()=>{
        let response = await fetch('http://142.232.167.31/emUrgency/user_registration.php',{
            method:'POST',
            header:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
    
        let data = await response.json();

        if(data == "You've been registered!"){
            Actions.Welcome()
        }
    }
    
    var email = "";
    var password = "";
    var name = "";
    return (
        <View style={styles.LoginPage}>
            <Image
            style={styles.RegisterLogo}
            source={require('../imgs/imgsPng/logo.png')}
            />
            <TextInput
            style={styles.NewRegistrationText}
            placeholder="Name"></TextInput>
            <TextInput
            style={styles.NewRegistrationText}
            placeholder="Email Address"></TextInput>
            <TextInput
            style={styles.NewRegistrationText}
            placeholder="Password"
            secureTextEntry={true}></TextInput>

            <TouchableOpacity style={styles.NewRegistrationButton}
            onPress={()=>{
                UserRegister();
            }}>
                <Text style={styles.RegisterButtonText}> Create Account </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>Actions.Login()}
            style={styles.RegisterSignIn}>
                <Text style={styles.RegisterSignInText}> Sign In </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Register;