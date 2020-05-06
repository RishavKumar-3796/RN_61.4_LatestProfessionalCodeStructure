import { getStatusBarHeight } from 'react-native-status-bar-height';
import { scale } from '../theme';
import { Platform } from 'react-native';

const statusBarHeightFunc = () => {
    const statusBarHeight = getStatusBarHeight(true);
    let bottomMarginForNotch = scale(5);
    if (Platform.OS === 'ios') {
        if (statusBarHeight === 44) {
            bottomMarginForNotch = scale(20);
        }
    }
    return bottomMarginForNotch;
}

export default { statusBarHeightFunc }