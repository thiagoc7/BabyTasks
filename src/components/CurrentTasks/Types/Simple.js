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

import CurrentTaskDetail from './../CurrentTaskDetail'
import Button from './../../Elements/Button'

import Icon from 'react-native-vector-icons/Ionicons'

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

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default class Simple extends Component {

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
              <Icon name="ios-star-outline" size={20} color="#ea4c89" style={{marginRight: 15}} />
              <Text style={styles.textLeft}>{this.props.task.name}</Text>
            </View>
            <Text style={styles.textRight}>{this.props.task.time}</Text>
          </View>
        </Button>
    )
  }
}

Simple.propTypes = {
  task: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};