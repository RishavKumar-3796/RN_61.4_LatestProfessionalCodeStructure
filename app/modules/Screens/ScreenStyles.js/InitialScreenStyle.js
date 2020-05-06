
import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale, Colors, moderateScale } from '../../../theme';
import Global from '../../../configs/Global';


const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: Global.statusBarHeightFunc()
    },
    foodImage: {
        height: scale(70),
        width: scale(65),
        borderRadius: scale(8)
    },
    containerStyle: {
        justifyContent: 'center',
        backgroundColor: Colors.containerColor
    },
    mainTextStyle: {
        color: Colors.primaryOrange,
        fontWeight: '800',
        fontSize: Fonts.size.h1,
        textAlign: 'center',
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 1,
    },
    loadingText: {
        color: Colors.primaryOrange,
        fontWeight: '400',
        fontSize: scale(16),
        textAlign: 'center',
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 1,
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(15),
        paddingVertical: scale(15),
        elevation: 3,
        marginHorizontal: scale(15),
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: { width: 2, height: 2 },
        borderWidth: scale(0.5),
        backgroundColor: 'white',
        borderColor: Colors.veryLightGray,
        shadowOpacity: 0.2,
        marginTop: scale(15),
        borderRadius: scale(12)
    },
    starStyle: {
        paddingHorizontal: scale(8),
        width: '60%',
        marginTop: scale(10)
    },
    textView: {
        width: '57%',
        backgroundColor: 'white'
    },
    restaurantName: {
        color: 'black',
        fontWeight: '500',
        paddingLeft: scale(5),
        paddingTop: scale(10),
        fontSize: scale(16),
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 1,
    },
    listingMarkerButton: {
        backgroundColor: Colors.primaryOrange,
        justifyContent: 'center',
        borderRadius: scale(6),
        height: scale(40),
        width: scale(40),
        alignSelf: 'center',
    },
    markerImage: {
        height: scale(25),
        width: scale(25),
        alignSelf: 'center',
    },
    individualStarStyle: {
        paddingHorizontal: 6
    },
    listContainer: {
        paddingBottom: scale(40)
    }
});

export default styles;