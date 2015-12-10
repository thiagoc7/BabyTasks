import React, {
    PropTypes,
    Component,
    NavigatorIOS,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} from 'react-native';

import { connect } from 'react-redux/native'
import { setCurrentTab } from './../actions/actions'

import Icon from 'react-native-vector-icons/Ionicons'

import Home from './Home'
import Tasks from './Tasks'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

class App extends Component {

  renderContent(component, title) {
    return (
        <NavigatorIOS
            style={{flex: 1}}
            initialRoute={{
                component,
                title
            }}
            tintColor={"#ea4c89"}
            titleTextColor={"#ea4c89"}
        />
    );
  }

  render() {
    const { currentTab, dispatch } = this.props;

    return (
        <TabBarIOS tintColor={"#ea4c89"}>

          <Icon.TabBarItem
              title="Home"
              iconName="ios-home-outline"
              selectedIconName="ios-home"
              selected={currentTab === 'home'}
              onPress={() => dispatch(setCurrentTab('home'))}>

            {this.renderContent(Home, "Home")}

          </Icon.TabBarItem>

          <Icon.TabBarItem
              title="Tasks"
              iconName="ios-checkmark-outline"
              selectedIconName="ios-checkmark"
              selected={currentTab === 'tasks'}
              onPress={() => dispatch(setCurrentTab('tasks'))}>

            {this.renderContent(Tasks, "Tasks")}

          </Icon.TabBarItem>

        </TabBarIOS>
    )
  }
}

App.propTypes = {
  currentTab: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    currentTab: state.currentTab
  }
}

export default connect(mapStateToProps)(App)