import React, {
    PropTypes,
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Button from './../Elements/Button';

import { format } from './../../util/date';

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
        <Button style={styles.container} onPress={this.props.onPress}>
          <Text>{format(this.props.date)}</Text>
        </Button>
    )
  }
}

DateSelector.propTypes = {
  date: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};