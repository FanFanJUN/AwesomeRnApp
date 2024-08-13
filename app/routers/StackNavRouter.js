import {Colors} from '../assets/Assets';
import LoginPage, {GoToButton, LoginPageFunc} from '../pages/LoginPage';
import SplashPage from '../pages/splash/SplashPage';
import TabNavRouter from './TabNavRouter';
import Govern from '../pages/Govern/govern';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavRouter = createNativeStackNavigator({
  initialRouteName: 'login',
  screenOptions: {
    headerStyle: {
      backgroundColor: Colors.White,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      // 如果我们想自定义fontFamily，fontWeight等Text为标题样式属性，我们可以用它来做到这一点。
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      color: '#333333',
      fontSize: 18,
    },
  },
  screens: {
    splash: {
      screen: SplashPage,
      options: {},
    },
    login: {
      screen: LoginPageFunc,
      options: {
        title: null,
        header: () => null,
      },
    },
    main: {
      screen: TabNavRouter,
      options: {header: () => null},
    },
    eam: {
      screen: Govern,
      options: {},
    },
  },
});

export default StackNavRouter;
