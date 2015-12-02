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

const initialData = [
  {
    id: 1,
    type: 'simple',
    name: 'Acordou',
    time: '09:00'
  },
  {
    id: 2,
    type: 'timer',
    name: 'Dormiu',
    timeStart: '10:00',
    timeEnd: '10:40'
  },
  {
    id: 3,
    type: 'simple',
    name: 'Comeu Fruta',
    time: '11:00'
  },
  {
    id: 4,
    type: 'timer',
    name: 'Dormiu',
    timeStart: '11:20',
    timeEnd: null
  },
  {
    id: 5,
    type: 'check',
    name: 'Tomar Remédio 1',
    time: '13:00',
    done: true
  },
  {
    id: 6,
    type: 'check',
    name: 'Tomar Remédio 2',
    time: '18:00',
    done: false
  },
  {
    id: 7,
    type: 'timer',
    name: 'Dormiu',
    timeStart: '10:00',
    timeEnd: '10:40'
  },
  {
    id: 8,
    type: 'timer',
    name: 'Dormiu',
    timeStart: '10:00',
    timeEnd: '10:40'
  },
  {
    id: 9,
    type: 'timer',
    name: 'Dormiu',
    timeStart: '10:00',
    timeEnd: '10:40'
  }
];

function currentTasks(state = initialData, action) {
  switch (action.type) {
    //case SET_DATE:
    //  return action.date;

    default:
      return state
  }
}

export default combineReducers({
  currentTab,
  date,
  currentTasks
});