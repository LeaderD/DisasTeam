import React from 'react';
import {View, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';

function Login(){
    return (
        <View style={styles.LoginPage}> 
            <TextInput
            style={styles.LoginText}
            placeholder="Email Address"> </TextInput>

            <TextInput
            style={styles.LoginText}
            placeholder="Password"> </TextInput>

            <TouchableOpacity
            style={styles.LoginButton}>
                <Text
                style={styles.LoginButtonText}> Sign In </Text>
                    </TouchableOpacity>

            <TouchableOpacity
            style={styles.RegisterButton}>
                <Text
                style={styles.RegisterButtonText}>Register </Text> 
                    </TouchableOpacity>
        </View>
    )
};


export default Login;