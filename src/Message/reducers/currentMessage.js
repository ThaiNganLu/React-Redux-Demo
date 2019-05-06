const currentMessage = (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_MESSAGE':
            return action.message
        case 'SET_MESSAGE_ARCHIVE_STATUS':
            return action.message
        default:
            return state
    }
}

export default currentMessage