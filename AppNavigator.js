import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './Login';
import LeaveRequest from './LeaveRequest';
import DashBoard from './DashBoard';
import PendingLeaves from './PendingLeaves';
import ApprovedLeaves from './ApprovedLeaves';

const AppNavigator = createStackNavigator({
    Login: {screen:Login},
    DashBoard: { screen: DashBoard },
    LeaveRequest: { screen: LeaveRequest },
    PendingLeaves: { screen: PendingLeaves },
    ApprovedLeaves: { screen: ApprovedLeaves },
    
});

const AppCont = createAppContainer(AppNavigator);

export default AppCont;