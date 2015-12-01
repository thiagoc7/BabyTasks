import { combineReducers } from 'redux'

import { SET_CURRENT_TAB } from './../actions/actions'

function currentTab(state = 'home', action) {

  switch (action.type) {
    case SET_CURRENT_TAB:
      return action.currentTab;

    default:
      return state
  }
}

export default combineReducers({currentTab});