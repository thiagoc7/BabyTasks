import React, {
    Component,
    PropTypes,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Text,
    View,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux/native';

let { width } = Dimensions.get('window');

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
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    borderColor: '#3CABDA',
    borderBottomWidth: 1 / PixelRatio.get(),
    height: 50
  },

  textLeft: {
    fontSize: 15
  },

  textRight: {
    fontSize: 12,
    color: '525252'
  },
});

class Tasks extends Component {

  render() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
          {this.props.tasks.map(task => this.renderTask(task))}
        </ScrollView>
    )
  }

  renderTask(task) {
    return (
        <View style={styles.content} key={task.id} >
          <View style={styles.iconContainer}>
            <Text style={styles.textLeft}>{task.name}</Text>
          </View>
          <Text style={styles.textRight}>{task.type}</Text>
        </View>
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};


export default connect(state => {
  return {
    tasks: state.tasks
  }
})(Tasks)