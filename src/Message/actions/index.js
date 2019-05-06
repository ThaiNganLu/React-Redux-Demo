export const VisibilityFilters = {
    SHOW_ALL: 'ALL',
    SHOW_ARCHIVED: 'ARCHIVED',
    SHOW_DEARCHIVED: 'DEARCHIVED'
}
export const CurrentTab = {
    SEARCH: 'SEARCH',
    ADD: 'ADD',
    ALL: 'ALL'
}
let nextMessageId = 0
// search message


// add message
export const addMessage = message => ({
    type: 'ADD_MESSAGE',
    message
})

// set visibility filter
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

//set current tab
export const setCurrentTab = tab => ({
    type: 'SET_CURRENT_TAB',
    tab
})

//set current message
export const setCurrentMessage = message => ({
    type: 'SET_CURRENT_MESSAGE',
    message
})

// toggle message
export const setMessageArchiveStatus = message => ({
    type: 'SET_MESSAGE_ARCHIVE_STATUS',
    message
})

//set search key
export const setSearchKey = searchKey => ({
    type: 'SET_SEARCH_KEY',
    searchKey
})




