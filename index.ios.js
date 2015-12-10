import React, { Component, AppRegistry} from 'react-native'
import { Provider } from 'react-redux/native'

import store from './src/store/configureStore'
import App from './src/containers/App'

class BabyTasks extends Component {
  render() {
    return (
        <Provider store={store}>
          {() => <App />}
        </Provider>
    )
  }
}

AppRegistry.registerComponent('BabyTasks', () => BabyTasks);