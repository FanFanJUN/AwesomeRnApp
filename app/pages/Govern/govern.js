import React, {Component} from 'react';
import {DeviceEventEmitter, View} from 'react-native';
import {mTheme} from '../../theme';
import {EamNavBarView} from '../../component/TRNavbar';

export default class Govern extends Component {
  constructor(props) {
    super(props);
    const code = props.navigation.getParam('code') || '';
    this.state = {
      isBack: code.length > 0,
      isShow: code.length > 0,
      code: code,
    };
  }
  async componentDidMount() {
    // this.subscription = DeviceEventEmitter.addListener('onClickMore', obj => {
    //   this.setState({
    //     isShow: true,
    //     code: obj?.code || '',
    //   });
    // });
  }
  componentWillUnmount() {
    // this.subscription && this.subscription.remove();
  }
  render() {
    const {isShow, code, isBack} = this.state;
    // if (!isShow) return null;
    const number = this.props.screenProps.count || 0;
    return (
      <View style={[mTheme.container, mTheme.bg_White]}>
        <EamNavBarView
          navigation={this.props.navigation}
          title={'EAM'}
          leftBtn={{optionType: 'back', btnL: 'icon-back'}}
        />
      </View>
    );
  }
}
Govern.navigationOptions = {
  header: null,
};
