import React, {
    Component,
    PropTypes,
    StyleSheet,
    PixelRatio,
    Dimensions,
    TouchableHighlight,
    View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#3CABDA',
    width: Dimensions.get('window').width,
    height: 30
  }
});

export default class Buttom extends Component {

  render() {
    return (
        <TouchableHighlight
            style={[
              styles.container,
              this.props.warning && {backgroundColor: "#ea4c89"},
              this.props.style
            ]}
            activeOpacity={0.5}
            underlayColor='rgba(34,34,34,0.7)'
            onPress={this.props.onPress}>
          <View>
            {this.props.children}
          </View>
        </TouchableHighlight>
    )
  }
}

Buttom.propTypes = {
  warning: PropTypes.bool.isRequired,
  onPress: React.PropTypes.func.isRequired,
  style: React.PropTypes.object,
};

Buttom.defaultProps = {
  warning: false
};