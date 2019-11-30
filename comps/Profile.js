import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    Animated
} from 'react-native';

// icons
import profileIcon from '../imgs/imgsPng/profile.png';
import editIcon from '../imgs/imgsPng/editnoborder.png';
import seeMoreIcon from '../imgs/imgsPng/seemore.png';

// styles
import styles from '../styles/ProfileStyles';

// mock data

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

const familyMemberItems = [
    {
        id: 1,
        name: 'Lauren'
    },
    {
        id: 2,
        name: 'Richard'
    },
    {
        id: 3,
        name: 'Christopher'
    }
];


class Profile extends React.Component {
    renderFamilyMember = ({item}) => {
        return (
            <TouchableOpacity style={styles.familyMember}>
                <Image source={profileIcon} style={styles.familyMemberAvatar} />
                <Text style={styles.familyMemberName}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
          <FadeInView>
            <View style={styles.profilePage}>
                <Text style={styles.AppTitle}>Profile</Text>
                <Image source={profileIcon} style={styles.profileAvatar} />
                <Text style={styles.userName}>Rebecca</Text>
                <View style={styles.editButtonWrapper}>
                    <TouchableOpacity style={styles.editButton}>
                        <Image source={editIcon} style={styles.editButtonIcon} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.familyMembersList}
                    data={familyMemberItems}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderFamilyMember}
                />
                <TouchableOpacity style={styles.addFamilyMemberButton}>
                    <Image source={seeMoreIcon} style={styles.addFamilyMemberButtonIcon} />
                    <Text>Add Family Member</Text>
                </TouchableOpacity>
            </View>
            </FadeInView>
        )
    }
}

export default Profile;
