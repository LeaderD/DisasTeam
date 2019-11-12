import React from 'react';
import {View, Text, TextInput, Alert, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';

constructor(props){
    this.state = {
        UserName: '',
        UserEmail: '',
        UserPassword: ''
    }
}



function Register(){
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

            <TouchableOpacity style={styles.NewRegistrationButton}>
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