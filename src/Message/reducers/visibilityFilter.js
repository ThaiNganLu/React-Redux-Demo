import { VisibilityFilters } from '../actions'

const filter = {
    search: VisibilityFilters.SHOW_ALL,
    add: VisibilityFilters.SHOW_ALL,
    all: VisibilityFilters.SHOW_ALL
}
const visibilityFilter = (state = filter, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return { search: action.filter.search, add: action.filter.add, all: action.filter.all }
        default:
            return state
    }
}

export default visibilityFilter