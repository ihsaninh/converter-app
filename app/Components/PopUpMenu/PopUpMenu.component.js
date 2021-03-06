import React, { Component } from 'react';
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../Themes/Colors';

const ICON_SIZE = 24;

const iconStyle = { marginRight: 16 };

class PopUpMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    };
  }

  onError() {
    // console.log('Popup Error');
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      );
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Icon
            name="more-vert"
            size={ICON_SIZE}
            color={Colors.tundora}
            ref={this.onRef}
            style={{ ...iconStyle }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  onRef = (icon) => {
    if (!this.state.icon) {
      this.setState({ icon });
    }
  };
}

export { PopUpMenu };
