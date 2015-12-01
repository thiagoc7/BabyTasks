import { today } from './../util/date'

import { combineReducers } from 'redux'

import { SET_CURRENT_TAB, SET_DATE } from './../actions/actions'

function currentTab(state = 'home', action) {
  switch (action.type) {
    case SET_CURRENT_TAB:
      return action.currentTab;

    default:
      return state
  }
}

function date(state = today(), action) {
  switch (action.type) {
    case SET_DATE:
      return action.date;

    default:
      return state
  }
}

export default combineReducers({
  currentTab,
  date
});