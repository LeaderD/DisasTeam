import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

/*constructor(props){
    this.state = {
        UserName: '',
        UserEmail: '',
        UserPassword: ''
    }
} */

var email = "";
var password = "";
var name = "";

function Register(){
    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);

    const CreateUser = async()=>{
        var userobj = {
            key: "create_user",
            uservalues: {
                email: email,
                password: password,
                name: name
            }
        }
        var data = await axios.post("http://localhost/post", userobj);
        await ReadUsers();
    }

    const ReadUsers async()=>{
        var userobj = {
            key: "read_users",
            uservalues:{}
        }
        var data = await axios.post("http://localhost/post", userobj);

        var dbusers = JSON.parse(uservalues.data.body).data;
        setUsers(dbusers);
    }
    useEffect(()=>{
        ReadUsers();
    }, [])

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
                CreateUser();
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