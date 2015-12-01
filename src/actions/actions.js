export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    currentTab
  }
}

export const SET_DATE = 'SET_DATE';
export function setDate(date) {
  return {
    type: SET_DATE,
    date
  }
}