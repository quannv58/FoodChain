import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  RefreshControl,
  ViewPropTypes,
} from 'react-native';
import SwipeRow from '../swipeview/SwipeRow';
import * as common from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  text: {
    color: 'white',
  },
  viewFooter: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

class SwipeFlatlist extends React.PureComponent {
  state = {
    scrollEnabled: true,
    rowID: null,
    refreshing: false,
  }

  _renderItem = ({item, index}) => {
    let {
      backgroundColorItem,
      disabled,
      styleItems,
      buttonWidth,
      leftTitle,
      rightTitle,
      onLeft,
      onRight,
      leftTitleColor,
      rightTitleColor,
      leftBackgroundColor,
      rightBackgroundColor,
      renderItem,
      rightArray,
      leftArray,
    } = this.props;

    return (
      <SwipeRow
        rightTitle={rightTitle ? rightTitle : undefined}
        leftTitle={leftTitle ? leftTitle : undefined}
        disabled={disabled ? disabled : undefined}
        style={styleItems ? styleItems : undefined}
        buttonWidth={buttonWidth ? buttonWidth : undefined}
        onLeft={onLeft ? () => onLeft(item) : undefined}
        onRight={onRight ? () => onRight(item) : undefined}
        leftTitleColor={leftTitleColor ? leftTitleColor : undefined}
        rightTitleColor={rightTitleColor ? rightTitleColor : undefined}
        leftBackgroundColor={leftBackgroundColor ? leftBackgroundColor : undefined}
        rightBackgroundColor={rightBackgroundColor ? rightBackgroundColor : undefined}
        backgroundColor={backgroundColorItem ? backgroundColorItem : undefined}
        onOpen={() => this.setState({rowID: index, scrollEnabled: false})}
        onClose={() => this.onRowClose(index)}
        close={index !== this.state.rowID ? true : false}
        scroll={event => this._allowScroll(event)}
        sensitivity={50}
        leftArray={leftArray}
        rightArray={rightArray ? rightArray(item) : undefined}
      >
        {
          renderItem ? renderItem(item) : this.renderIndi(item)
        }
      </SwipeRow>
    )
  };

  onRowClose(id) {
    if (this.state.rowID === id) {
      this.setState({
        rowID: null
      })
    }
  }

  renderIndi(item) {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>
          {item.title}
        </Text>
      </View>
    );
  }

  _allowScroll(scrollEnabled) {
    this.setState({scrollEnabled: scrollEnabled})
  }

  render() {
    let {
      ListHeaderComponent,
      ItemSeparatorComponent,
      ListFooterComponent,
      refreshing,
      onRefresh,
      titleRefreshing,
      titleColorRefreshing,
      colorRefreshingIndicator,
      onEndReached,
    } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          scrollEnabled={this.state.scrollEnabled}
          {...this.props}
          data={this.props.data}
          extraData={this.state}
          keyExtractor={(item, id) => id}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={200}
          removeClippedSubviews={false}
          refreshControl={onRefresh ?
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colorRefreshingIndicator}
              title={titleRefreshing}
              titleColor={titleColorRefreshing}
            /> : undefined
          }
          ListFooterComponent={ListFooterComponent}
          onEndReached={onEndReached}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListHeaderComponent={ListHeaderComponent}
        />
      </View>
    );
  }
}

SwipeFlatlist.defaultProps = {
  data: [
    {title: 'a'},
    {title: 'b'},
    {title: 'c'},
  ],
  // onEndThreshold: 0.5,
  titleRefreshing: 'refreshing...',
  titleColorRefreshing: common.COLOR_ACTIVE,
  colorRefreshingIndicator: common.COLOR_INACTIVE,
}

SwipeFlatlist.propTypes = {
  data: PropTypes.array,
  ListHeaderComponent: PropTypes.func,
  ItemSeparatorComponent: PropTypes.func,
  onEndReached: PropTypes.func,
  onEndThreshold: PropTypes.number,
  ListFooterComponent: PropTypes.func,
  renderItem: PropTypes.any,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
  titleRefreshing: PropTypes.string,
  titleColorRefreshing: PropTypes.string,
  colorRefreshingIndicator: PropTypes.string,
  rightArray: PropTypes.func,
  leftArray: PropTypes.func,

  // render items
  backgroundColorItem: PropTypes.string,
  disabled: PropTypes.bool,
  styleItems: ViewPropTypes.style,
  buttonWidth: PropTypes.number,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  leftTitleColor: PropTypes.string,
  rightTitleColor: PropTypes.string,
  leftBackgroundColor: PropTypes.string,
  rightBackgroundColor: PropTypes.string,
}

export default SwipeFlatlist;
