import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux/native'

import DateLabel from './../components/DateLabel'
import DateSelector from './../components/DateSelector'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Home extends Component {

  render() {
    const { date, dispatch } = this.props;
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
          <DateLabel
              date={date}
              onPress={() => {
                this.props.navigator.push({
                  component: DateSelector,
                  passProps: {dispatch},
                  title: 'date'
              });
            }}
          />
        </ScrollView>
    )
  }
}

Home.propTypes = {
  date: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(Home)