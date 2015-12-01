import React, {
    Component,
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

export default class Tasks extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>tasks</Text>
        </View>
    )
  }
}

Tasks.propTypes = {
  initialCount: React.PropTypes.number
};

Tasks.defaultProps = {
  initialCount: 0
};