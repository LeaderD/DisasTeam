import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, Button, Image, TouchableOpacity, Animated} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var UserRegister=async()=>{
        let response = await fetch('http://142.232.168.247/emUrgency/user_registration.php',{
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
        console.log(data);
        if(data == "You've been registered!"){
            Actions.Welcome();
        }
    }


    return (
      <FadeInView>
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
        </FadeInView>
    )
}

export default Register;
