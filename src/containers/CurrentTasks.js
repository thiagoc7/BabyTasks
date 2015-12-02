import React, {
    Component,
    PropTypes,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Text,
    View,
} from 'react-native';

import CurrentTask from './CurrentTask'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 40,
    borderColor: '#3CABDA',
    borderTopWidth: 1 / PixelRatio.get(),
    width: Dimensions.get('window').width
  }
});

export default class CurrentTasks extends Component {

  render() {
    const { currentTasks, ...others } = this.props;
    return (
        <View style={styles.container}>
          {currentTasks.map(task => <CurrentTask key={task.id} task={task} {...others} />)}
        </View>
    )
  }
}

CurrentTasks.propTypes = {
  currentTasks: PropTypes.array,
  navigator: PropTypes.object.isRequired
};