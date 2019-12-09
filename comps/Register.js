import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, Button, Image, TouchableOpacity, AsyncStorage, Animated} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';
import ax from '../ax';

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    var UserRegister=async()=>{
        
        var data = await ax("users_create", {name:name, email:email, password:password});
        console.log(data);
        var users_id = JSON.stringify(data[0].id);
        
        await AsyncStorage.setItem("users_id", users_id);
        Actions.Kits();
    }

    return (

        <View style={styles.LoginPage}>
            <Image
            style={styles.RegisterLogo}
            source={require('../imgs/imgsPng/logo.png')}
            />
            <TextInput
            style={styles.NewRegistrationText}
            placeholder="Name" onChangeText={(t)=>{setName(t)}}></TextInput>
            <TextInput
            style={styles.NewRegistrationText}
            placeholder="Email Address" onChangeText={(t)=>{setEmail(t)}}></TextInput>
            <TextInput
            style={styles.NewRegistrationText}
            placeholder="Password" onChangeText={(t)=>{setPassword(t)}}
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