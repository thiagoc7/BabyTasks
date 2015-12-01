import React, {
    Text,
    TouchableHighlight,
    Component,
    StyleSheet,
    View,
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import * as actionCreators from './actions/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

class App extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>{this.props.count}</Text>
          <TouchableHighlight onPress={() => this.props.addCount(1)}>
            <Text>+</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

App.propTypes = {
  initialCount: React.PropTypes.number
};

App.defaultProps = {
  initialCount: 0
};

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)