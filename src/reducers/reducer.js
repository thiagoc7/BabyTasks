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

const initialCurrentTasks = [
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
  }
];

function currentTasks(state = initialCurrentTasks, action) {
  switch (action.type) {
    //case SET_DATE:
    //  return action.date;

    default:
      return state
  }
}


const initialTasks = [
  {
    id: 1,
    name: 'Acordou',
    type: 'simple'
  },
  {
    id: 2,
    name: 'Dormiu',
    type: 'timer'
  },
  {
    id: 3,
    name: 'Tomar Remédio',
    type: 'check'
  },
  {
    id: 3,
    name: 'Tomar Remédio 2',
    type: 'check'
  }
];

function tasks(state = initialTasks, action) {
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
  currentTasks,
  tasks
});