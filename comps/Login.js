import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import styles from '../styles/LoginStyles';
import {Actions} from 'react-native-router-flux';
import ax from '../ax';
import { object } from 'prop-types';

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
}

    return (
      {/* <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
      */}
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
        </FadeInView>
    )
};


export default Login;
