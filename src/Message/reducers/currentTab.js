import { CurrentTab } from '../actions'

const currentTab = (state = CurrentTab.SEARCH, action) => {
    switch (action.type) {
        case 'SET_CURRENT_TAB':
            return action.tab
        default:
            return state
    }
}

export default currentTab