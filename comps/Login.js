import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';
import ax from '../ax';

function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    var UserLogin=async()=>{
        
        var data = await ax("users_read", {email:email, password:password});
        console.log(data);
        
        var users_id = JSON.stringify(data[0].id);
        //store it in AsyncStorage
        await AsyncStorage.setItem("users_id", users_id);
        
        Actions.Kits();
    
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
            ></TextInput>

            <TextInput
            style={styles.LoginText}
            placeholder="Password"
            secureTextEntry={true}
            ></TextInput>

            <TouchableOpacity
            style={styles.LoginButton}
            onPress={()=>{UserLogin()}}>
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