import {SwitchNavigator} from 'react-navigation';
import Login from '../login/Login';

const routeConfig = {
  Login: {screen: Login}
};

const navConfig = {
  initialRouteName: 'Login',
  navigationOptions: {
    header: null,
    gesturesEnabled: false,
  },
};

export default Root = SwitchNavigator(routeConfig, navConfig);
