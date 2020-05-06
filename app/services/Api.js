import { apiConfig } from './Utils';
import Secrets from 'react-native-config';

const api = apiConfig('http://192.249.121.94/~mobile/');

const auth = () => {
    const getRestaurantList = () =>
        api.get('interview/public/api/restaurants_list');
    return { getRestaurantList };
};

export default { auth, };
