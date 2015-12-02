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

import CurrentTaskDetail from './CurrentTaskDetail'
import Button from './../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#3CABDA',
    borderBottomWidth: 1 / PixelRatio.get(),
    width: Dimensions.get('window').width,
    height: 50
  }
});

export default class CurrentTask extends Component {

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
          <Text>{this.props.task.name}</Text>
        </Button>
    )
  }
}

CurrentTask.propTypes = {
  task: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};