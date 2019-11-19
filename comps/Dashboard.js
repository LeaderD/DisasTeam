import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';

// styles
import styles from '../styles/DashboardStyles';

// mock data
import mockImage1 from '../imgs/imgsPng/crackers.png';
import mockImage2 from '../imgs/imgsPng/cookingwater.png';
import mockImage3 from '../imgs/imgsPng/granola.png';

const expiringItems = [
    {
        id: 1,
        last_updated_by: 'Rebecca',
        expired_at: '11/12/2019',
        icon: mockImage1
    },
    {
        id: 2,
        last_updated_by: 'Rebecca',
        expired_at: '01/22/2019',
        icon: mockImage2
    },
    {
        id: 3,
        last_updated_by: 'Rebecca',
        expired_at: '02/05/2020',
        icon: mockImage3
    }
];


class Dashboard extends React.Component {
    renderExpiringItem = ({item}) => {
        const expiredInDays = moment(new Date(item.expired_at)).diff(moment(), 'days');
        const expirationStyle = expiredInDays === 0 ? styles.expiringItemExpireToday : expiredInDays < 0 && styles.expiringItemExpired;
        return (
            <TouchableOpacity style={styles.expiringItem}>
                <Image source={item.icon} style={[styles.expiringItemImage, expirationStyle]} />
                <View>
                    <Text style={styles.expiringItemText}>Expiry date: {moment(new Date(item.expired_at)).format('MMM. DD')}</Text>
                    <Text>Last updated by: {item.last_updated_by}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={styles.dashboardPage}>
                <Text style={styles.AppTitle}>Dashboard</Text>
                <TouchableOpacity style={styles.helpButton} onPress={()=> Actions.Help()}>
                    <Text style={styles.helpButtonText}>?</Text>
                </TouchableOpacity>
                <Text style={styles.expiringItems}>Expiring items</Text>
                <FlatList
                    style={styles.expiringList}
                    data={expiringItems}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderExpiringItem}
                />
            </View>
        )
    }
}

export default Dashboard;
