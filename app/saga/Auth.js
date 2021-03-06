import { call, put } from 'redux-saga/effects';
import API from '../services/Api';
import { getRestaurantListingSuccess, getRestaurantListingFailure } from '../redux/actions/Auth';
import { getError } from '../services/Utils';


export function* getRestaurantDetailListing(action) {
    const api = API.auth();

    const response = yield call(api.getRestaurantList);
    console.log(api.getRestaurantList);

    if (response.status === 200) {
        yield put(getRestaurantListingSuccess(response.data));
    } else {
        const error = getError(response);
        yield put(getRestaurantListingFailure(error));
    }
}