import { combineReducers } from 'redux'
import messages from './messages'
import currentMessage from './currentMessage'
import currentTab from './currentTab'
import visibilityFilter from './visibilityFilter'
import searchKey from './searchKey'

export default combineReducers({
    messages,
    currentMessage,
    visibilityFilter,
    currentTab,
    searchKey
})