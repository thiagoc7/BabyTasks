import React, {
    Component,
    PropTypes,
    StyleSheet,
    DatePickerIOS,
    Text,
    View,
} from 'react-native';

import Button from './Button'

import { setDate } from './../actions/actions'
import { dateToString } from './../util/date'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

export default class DateSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  selectNewDate() {
    this.props.dispatch(
        setDate(
            dateToString(this.state.date)
        )
    );

    this.props.navigator.pop();
  }

  render() {
    return (
        <View style={styles.container}>
          <DatePickerIOS
              date={this.state.date}
              mode="date"
              onDateChange={date => this.setState({date})}
          />

          <Button style={{marginTop: 20}} onPress={this.selectNewDate.bind(this)} warning>
            <Text>Ok</Text>
          </Button>
        </View>
    )
  }
}

DateSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};