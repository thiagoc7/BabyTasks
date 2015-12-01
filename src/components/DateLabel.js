import React, {
    PropTypes,
    Component,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import { format } from './../util/date';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

export default class DateSelector extends Component {

  render() {
    return (
        <TouchableHighlight style={styles.container} onPress={this.props.onPress}>
          <Text>{format(this.props.date)}</Text>
        </TouchableHighlight>
    )
  }
}

DateSelector.propTypes = {
  date: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};