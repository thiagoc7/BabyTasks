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
import { setCurrentTab } from './actions/actions'

import Home from './containers/Home'
import Tasks from './containers/Tasks'

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
                title,
                rightButtonTitle: 'New Invite'
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

          <TabBarIOS.Item
              systemIcon="history"
              selected={currentTab === 'home'}
              onPress={() => dispatch(setCurrentTab('home'))}>

            {this.renderContent(Home, "Baby's Tasks")}

          </TabBarIOS.Item>

          <TabBarIOS.Item
              systemIcon="more"
              selected={currentTab === 'tasks'}
              onPress={() => dispatch(setCurrentTab('tasks'))}>

            {this.renderContent(Tasks, "Baby's Tasks")}

          </TabBarIOS.Item>

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