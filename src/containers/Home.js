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

export default class Home extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
    )
  }
}

Home.propTypes = {
  initialCount: React.PropTypes.number
};

Home.defaultProps = {
  initialCount: 0
};