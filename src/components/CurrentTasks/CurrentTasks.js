import React, {
    Component,
    PropTypes,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Text,
    View,
} from 'react-native';

import Check from './Types/Check'
import Simple from './Types/Simple'
import Timer from './Types/Timer'

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
    return (
        <View style={styles.container}>
          {this.props.currentTasks.map(task => this.renderTask(task))}
        </View>
    )
  }

  renderTask(task) {
    const Component = this.chooseComponent(task);
    const { currentTasks, ...others } = this.props;

    return <Component key={task.id} task={task} {...others} />
  }

  chooseComponent(task) {
    switch (task.type) {
      case 'timer':
        return Timer;

      case 'check':
        return Check;

      default:
        return Simple;
    }
  }
}

CurrentTasks.propTypes = {
  currentTasks: PropTypes.array,
  navigator: PropTypes.object.isRequired
};