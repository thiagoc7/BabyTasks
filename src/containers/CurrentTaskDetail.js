import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

export default class CurrentTaskDetail extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>{this.props.task.name}</Text>
        </View>
    )
  }
}

CurrentTaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};