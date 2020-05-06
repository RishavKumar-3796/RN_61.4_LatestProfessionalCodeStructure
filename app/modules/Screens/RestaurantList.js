import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Container, Spinner } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { SafeAreaView } from 'react-navigation';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './ScreenStyles.js/InitialScreenStyle';
import { connect } from 'react-redux';
import { getRestaurantListingRequest } from '../../redux/actions/Auth';
import { RestaurantListingComponent } from '../../components/RestaurantListingComponent';

class RestaurantList extends Component {
    constructor(props) {
        super(props);
        const { auth: { restaurantData, error } } = this.props;
        this.state = {
            restaurantDataList: restaurantData ? restaurantData : [],
            isLoading: false,
        };
    }

    componentDidMount() {
        const { getListOfRestaurant } = this.props;
        const { auth: { restaurantData, error } } = this.props;
        restaurantData == null && restaurantData == undefined && this.setState({ isLoading: true }, () => getListOfRestaurant());
    }

    componentDidUpdate(prevProps) {
        const { auth } = this.props;
        if (prevProps?.auth?.fetching && !auth?.fetching) {
            this.handleResponse(); //for initial api call
        }
    }

    handleResponse = () => {
        const { auth: { restaurantData, error } } = this.props;
        if (restaurantData && error === null) {
            this.setState({ isLoading: false, restaurantDataList: restaurantData })
        } else {
            this.setState({ isLoading: false });
        };
    }

    onEndReached = () => {
        // const { restaurantDataList, splicedArray } = this.state;
        // let restaurantDataListCopy = restaurantDataList
        // let splicedArrayCopy = splicedArray
        // let array = restaurantDataListCopy.concat(splicedArrayCopy)
        // this.setState({ restaurantDataList: array })
    }

    renderFlatlist = () => {
        const { restaurantDataList } = this.state;
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                data={restaurantDataList}
                removeClippedSubviews={true}
                initialNumToRender={8}
                maxToRenderPerBatch={1}
                updateCellsBatchingPeriod={1}
                renderItem={({ item }) => <RestaurantListingComponent item={item}
                    props={this.props}
                />
                }
                onEndReached={() => this.onEndReached()}
                onEndReachedThreshold={0.5}
                extraData={restaurantDataList}
                keyExtractor={(item, index) => item.id.toString()}
            />
        )
    }

    renderSpinner = () => {
        return (
            <>
                <Spinner />
                <Text style={styles.loadingText}>{'Loading...'}</Text>
            </>
        )
    }

    render() {
        const { isLoading } = this.state;
        return (
            <SafeAreaView style={ApplicationStyles.screen.safeAreaViewContainer} forceInset={{ bottom: 'never' }}>
                <CustomHeader title={'Restaurant List'} showBack={false} />
                <Container style={styles.containerStyle}>
                    {isLoading ? this.renderSpinner() :
                        this.renderFlatlist()
                    }
                </Container>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    getListOfRestaurant: () => dispatch(getRestaurantListingRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
