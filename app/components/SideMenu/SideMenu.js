/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './styles';
import {NavigationActions} from 'react-navigation';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList, Alert,
  AsyncStorage,
} from 'react-native';
import * as IC from '../../../assets/images/iconSideMenu/index';
import * as SETTING from '../../config/settings';
import langs from '../../languages/sideMenu';
import langsCm from '../../languages/commonLang';
import ChangePassword from '../../containers/change_password/ChangePassword';

export default class SideMenu extends Component {

  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: this.props.activeItemKey,
      logoutStatus: false,
      avatarUrl: '',
      nameUser: '',
      idUser: '',
      role: '',
    };
    this.setupUI();
  }

  componentWillMount() {
  }

  setupUI = async () => {
    const EmployeeDTO = await AsyncStorage.getItem('@MySuperStore:EmployeeDTO');
    const dataJson = JSON.parse(EmployeeDTO);
    this.setState({
      nameUser: dataJson.full_name,
      idUser: dataJson.employee_code,
    });
    if (dataJson.avatar) {
      this.setState({
        avatarUrl: dataJson.avatar.path_string,
      });
    }
    if (dataJson.user) {
      console.log('hehe', EmployeeDTO)
      this.setState({
        role: dataJson.user.role,
      });
    }
  };

  renderTitle(param) {
    switch (param) {
      case SETTING.TIMEKEEPING_NAVIGATION:
        return langs.timeKeeping;
      case SETTING.STAFF_NAVIGATION:
        return langs.staffList;
      case SETTING.CHECKOS_NAVIGATION:
        return langs.staffCheckOnsite;
      case SETTING.LEAVELIST_NAVIGATION:
        return langs.leave;
      case SETTING.APPROVECHECKOS_NAVIGATION:
        return langs.requestOnsite;
      case SETTING.CONFIRMREQUEST_NAVIGATION:
        return langs.request;
      case SETTING.CHANGE_PASSWORD:
        return langs.changePassword;
      default:
        return;
    }
  }

  renderIcon(param) {
    switch (param) {
      case SETTING.TIMEKEEPING_NAVIGATION:
        return IC.IC_MENU_CHECKIN;
      case SETTING.STAFF_NAVIGATION:
        return IC.IC_MENU_NHANSU;
      case SETTING.CHECKOS_NAVIGATION:
        return IC.IC_MENU_CHECKOS;
      case SETTING.LEAVELIST_NAVIGATION:
        return IC.IC_MENU_PHEP;
      case SETTING.APPROVECHECKOS_NAVIGATION:
        return IC.IC_MENU_REQUESTOS;
      case SETTING.CONFIRMREQUEST_NAVIGATION:
        return IC.IC_MENU_REQUEST;
      case SETTING.CHANGE_PASSWORD:
        return IC.IC_MENU_PASSWORD;
      default:
        return;
    }
  }
  renderSelectedView() {
    return (
      <View style={styles.selectedView} />
    );
  }
  onPressOption(key) {
    if (key != 'Logout') {
      this.navigateToScreen(key);
    }
    this.setState({selectedKey: key});
  }

  onPressLogOut() {
    this.setState({logoutStatus: true});
  }

  logout() {
    AsyncStorage.removeItem('@MySuperStore:EmployeeDTO',
      (err) => console.log('finished', err));
    AsyncStorage.removeItem('@MySuperStore:UserToken',
      (err) => console.log('finished', err));
    this.props.stackNav.navigate('Login');
  }

  _renderItem({item}) {
    if (item.key === SETTING.LOGOUT_NAVIGATION ||
        item.key === SETTING.CHECKOS_NAVIGATION ||
        item.key === SETTING.APPROVECHECKOS_NAVIGATION) {
      return null;
    }

    if (this.state.role === 'employee' &&
      ( item.key === SETTING.STAFF_NAVIGATION ||
        item.key === SETTING.APPROVECHECKOS_NAVIGATION||
        item.key === SETTING.CONFIRMREQUEST_NAVIGATION )) {
      return null;
    }

    return (
      <TouchableOpacity style={
        this.props.activeItemKey === item.key ?
          styles.navSectionStyleSelected : styles.navSectionStyle}
        onPress={() => this.onPressOption(item.key)}
      >
        {this.props.activeItemKey === item.key ?
          this.renderSelectedView() : null}
        <Image
          source={this.renderIcon(item.key)}
          style={styles.imgCell}
        />
        <Text style={styles.navItemStyle}>
          {this.renderTitle(item.key)}
        </Text>

      </TouchableOpacity>
    );
  }

  render() {
    const logout = (
      (this.state.logoutStatus) && (
        Alert.alert(
          langs.logoutLower,
          langs.checkLogout,
          [
            {text: langsCm.Cancel, onPress: () => this.setState({logoutStatus: false})},
            {text: langsCm.OK, onPress: () =>
                this.logout(),
              cancelable: false,
            },
          ],
          {cancelable: false}
        )
      )
    )

    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          {this.state.avatarUrl === '' ?
            <Image
              source={require('../../../assets/images/default_avatar.png')}
              style={styles.userAvatar}
            /> :
            <Image
            source={{uri: this.state.avatarUrl}}
            style={styles.userAvatar}
            />
          }
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{this.state.nameUser}</Text>
            <Text style={styles.userId}>ID: {this.state.idUser}</Text>
          </View>
        </View>
        <FlatList
          data={this.props.items}
          extraData={this.state}
          renderItem={(item) => this._renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
        {logout}
        <TouchableOpacity style={styles.logoutBtn} onPress={() => this.onPressLogOut()}>
          <Text style={styles.titleLogout}>{langs.logout}</Text>
        </TouchableOpacity>
        <Text style={styles.textVersion}>Version 1.0 (Build 2)</Text>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
  stackNav: PropTypes.object.isRequired,
};
