import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, Animated} from 'react-native';
import styles from '../styles/WelcomeStyles';
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

function Welcome(){
    return (
      <FadeInView>
        <View style={styles.Display}>
            <Text style={styles.WelcomeTitle}>
                Welcome,
            </Text>

            <Text style={styles.WelcomePara}>
                Thank you for downloading
                emUrgency, an app that will help
                you and your family prepare for a
                disaster.
             </Text>

             <TouchableOpacity style={styles.LearnMoreButton}>
                <Text style={styles.LearnMoreButtonText}>
                {/* <Image
                style={styles.LearnMoreArrow}
                // source={require('../imgs/imgsPng/next1.png')} /> */}
                Learn More
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.GetStartedButton}
            onPress={()=>Actions.Dashboard()}>
                <Text style={styles.GetStartedButtonText}>
                Get Started
                </Text>
            </TouchableOpacity>

        </View>
        </FadeInView>
    )
};

export default Welcome;
