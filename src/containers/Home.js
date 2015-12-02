import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux/native'

import CurrentTasks from './CurrentTasks'
import DateLabel from './../components/DateLabel'
import DateSelector from './../components/DateSelector'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
    marginBottom: 40
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Home extends Component {

  render() {
    const { date, currentTasks, ...others } = this.props;
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>

          <DateLabel
              date={date}
              onPress={() => {
                this.props.navigator.push({
                  component: DateSelector,
                  passProps: {...others},
                  title: 'date'
              });
            }}
          />

          <CurrentTasks currentTasks={currentTasks} {...others} />

        </ScrollView>
    )
  }
}

Home.propTypes = {
  date: PropTypes.string.isRequired,
  currentTasks: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};


export default connect(state => {
  return {
    date: state.date,
    currentTasks: state.currentTasks
  }
})(Home)