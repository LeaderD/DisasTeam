import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, AsyncStorage, Animated} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';
import { object } from 'prop-types';

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

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setuserID] = useState('');
    const [data, setData] = useState();

    var UserLogin=async()=>{
        console.log("clicked");
        let response = await fetch('http://142.232.168.247/emUrgency/user_login.php',{
            method:'POST',
            header:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "email": email,
                "password": password,
                "userID": userID
            })
        })

        let tempData = await response.json();
        console.log(tempData);

        if(typeof(tempData)=="object"){
            try {
            //AsyncStorage to store user id here
                await AsyncStorage.setItem("userID", JSON.stringify(tempData.userID))

                } catch (error) {
                        console.log(error.message)
                }

            }
            Actions.Dashboard();
        }


    return (
      <FadeInView>
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
        </FadeInView>
    )
};


export default Login;
