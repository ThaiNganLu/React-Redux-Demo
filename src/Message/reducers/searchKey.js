const searchKey = (state = "", action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEY':
            return action.searchKey
        default:
            return state
    }
}

export default searchKey