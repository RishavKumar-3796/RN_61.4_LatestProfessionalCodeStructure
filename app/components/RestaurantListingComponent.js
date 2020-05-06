import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../modules/Screens/ScreenStyles.js/InitialScreenStyle';
import colors from '../theme/Colors';
import { Icons } from '../theme';

export const RestaurantListingComponent = (props) => {
    const item = props?.item
    return (
        <TouchableOpacity style={styles.mainView}
            onPress={() => { }}>
            <Image source={{ uri: item.img[0].image }} style={styles.foodImage} />
            <View style={styles.textView}>
                <Text style={styles.restaurantName}>{item.title}</Text>
            </View>
            <TouchableOpacity style={styles.listingMarkerButton} onPress={() => { }}>
                <Image source={Icons.marker} style={styles.markerImage} resizeMode='contain' />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}