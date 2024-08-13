import {createStaticNavigation} from '@react-navigation/native';
import StackNavRouter from './StackNavRouter';

const AppContainer = createStaticNavigation(StackNavRouter);

export default AppContainer;
