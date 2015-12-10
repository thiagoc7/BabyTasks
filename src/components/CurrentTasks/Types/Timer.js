import React, {
    Component,
    PropTypes,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import CurrentTaskDetail from './../CurrentTaskDetail'
import Button from './../../Elements/Button'

let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#3CABDA',
    borderBottomWidth: 1 / PixelRatio.get(),
    width: width,
    height: 50
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9
  },

  textLeft: {
    fontSize: 15
  },

  textRight: {
    fontSize: 12,
    color: '525252'
  },

  textCenter: {
    fontSize: 12,
    color: '525252',
    marginRight: 30
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default class Timer extends Component {

  redirect() {
    this.props.navigator.push({
      component: CurrentTaskDetail,
      passProps: {...this.props},
      title: this.props.task.name
    });
  }

  render() {
    return (
        <Button onPress={this.redirect.bind(this)} style={styles.container}>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              {this.renderIcon()}
              <Text style={styles.textLeft}>{this.props.task.name}</Text>
            </View>
            <Text style={styles.textCenter}>20min</Text>
            <Text style={styles.textRight}>{this.props.task.timeStart} - {this.props.task.timeEnd}</Text>
          </View>
        </Button>
    )
  }

  renderIcon() {
    return (
        <Icon
            name={this.props.task.timeEnd ? "ios-circle-filled" : "ios-circle-outline"}
            size={20}
            color="#ea4c89"
            style={{marginRight: 15}}
        />
    )
  }
}

Timer.propTypes = {
  task: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};