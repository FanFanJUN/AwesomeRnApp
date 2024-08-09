/**
 * @ProjectName:  front-saas-mobile
 * @ClassName:    index
 * @Desc:         作用描述:
 * @source:       来源:
 * @Author:       luthink
 * @CreateDate:   2019/10/15 9:53 上午
 * @UpdateUser:   更新者:
 * @UpdateDate:   2019/10/15 9:53 上午
 * @UpdateRemark: 更新内容:
 * @Version:      1.0
 */

import {Dimensions, Platform} from 'react-native';
import {
  isIPhoneWithMonobrow,
  getStatusBarHeight,
} from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');

export const screenWidth = width;
export const screenHeight = height;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isIphonex = isIPhoneWithMonobrow();
export const NavConfig = {
  height: isAndroid ? 50 : isIphonex ? 88 : 64,
  top: isAndroid ? 20 : isIphonex ? 34 : 20,
};

export const statusBarHeight = getStatusBarHeight();

export {default as px2dp} from './Ratio';
