import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import RestSample from './RestSample';
import Login from './Login';


const AppNavigator = createStackNavigator({
    Login: {screen:Login},
    RestSample: { screen: RestSample },
});

const AppCont = createAppContainer(AppNavigator);

export default AppCont;