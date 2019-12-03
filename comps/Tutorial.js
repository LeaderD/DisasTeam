import React from 'react';
import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux';
import TutStyles from '../styles/TutorialStyles';

const slides = [
    {
        key: 'first-slide',
        title: 'Title 1',
        titleStyle: TutStyles.title,
        text: 'British Columbia is overdue for a massive earthquake. The Big One could strike any day. Are you ready?',
        textStyle: TutStyles.text,
        image: require('../imgs/imgsPng/earthquake.png'),
        imageStyle: TutStyles.img,
        backgroundColor: '#FFFEF3'

    },
    {
        key: 'second-slide',
        title: 'Title 2',
        titleStyle: TutStyles.title,
        text: 'Create and manage your emergency disaster packs with emUrgency.',
        textStyle: TutStyles.text,
        image: require('../imgs/imgsPng/earthquake.png'),
        imageStyle: TutStyles.img,
        backgroundColor: '#FFFEF3'
    },
    {
        key: 'third-slide',
        title: 'Title 3',
        titleStyle: TutStyles.title,
        text: 'Get ready, and stay ready with emUrgency.',
        textStyle: TutStyles.text,
        image: require('../imgs/imgsPng/earthquake.png'),
        imageStyle: TutStyles.img,
        backgroundColor: '#FFFEF3'
    }
];

export default class App extends React.Component {
    _onDone=()=>{
        
    }
    render(){
        return(
            <AppIntroSlider
                slides={slides}
                onDone={this._onDone}
            />
        );
    }
}