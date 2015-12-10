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

export default class CurrentTaskSimple extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>oi</Text>
        </View>
    )
  }
}

CurrentTaskSimple.propTypes = {
  initialCount: PropTypes.number
};

CurrentTaskSimple.defaultProps = {
  initialCount: 0
};