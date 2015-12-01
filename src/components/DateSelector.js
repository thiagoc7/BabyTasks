import React, {
    Component,
    PropTypes,
    StyleSheet,
    DatePickerIOS,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';

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
    console.log(this.state.date)
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

          <TouchableHighlight style={{marginTop: 20}} onPress={this.selectNewDate.bind(this)}>
            <Text>Ok</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

DateSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};