import {StackNavigator} from 'react-navigation';
import Login from '../../containers/login/Login';
import * as common from '../../config/styles';


const routeConfig = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  }

};

const navConfig = {
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: {
      backgroundColor: common.COLOR_BACKGROUND_NABAR,
      shadowColor: 'transparent',
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: common.COLOR_WHITE,
    headerTitleStyle: {
      fontSize: 17,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    headerBackTitle: null,
  },
};

export default Login = StackNavigator(routeConfig, navConfig);
