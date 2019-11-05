import React from 'react';
import {View, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';

function Register(){
    return (
        <View style={styles.LoginPage}>
            <Image
            style={styles.RegisterLogo}
            source={require('../imgsPng/logo.png')}
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
            <TouchableOpacity style={styles.RegisterSignIn}>
                <Text style={styles.RegisterSignInText}> Sign In </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Register;