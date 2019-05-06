let messageListTemplate = [
    {
        id: 1,
        title: 'Message title 1',
        content: 'Message content 1',
        archived: false
    },
    {
        id: 2,
        title: 'Message title 2',
        content: 'Message content 2',
        archived: true
    },
    {
        id: 3,
        title: 'Message title 3',
        content: 'Message content 3',
        archived: false
    },
    {
        id: 4,
        title: 'Message title 4',
        content: 'Message content 4',
        archived: true
    },
    {
        id: 5,
        title: 'Message title 5',
        content: 'Message content 5',
        archived: false
    },
    {
        id: 6,
        title: 'Message title 6',
        content: 'Message content 6',
        archived: true
    },
    {
        id: 7,
        title: 'Message title 7',
        content: 'Message content 7',
        archived: false
    }, {
        id: 8,
        title: 'Message title 8',
        content: 'Message content 8',
        archived: true
    }, {
        id: 9,
        title: 'Message title 9',
        content: 'Message content 9',
        archived: false
    },
    {
        id: 10,
        title: 'Message title 10',
        content: 'Message content 10',
        archived: true
    }
]
const messages = (state = messageListTemplate, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    id: action.message.id,
                    title: action.message.title,
                    content: action.message.content,
                    archived: action.message.archived
                }
            ]
        case 'SET_MESSAGE_ARCHIVE_STATUS':
            //reset message status
            state = state.map(message =>
                (message.id === action.message.id)
                    ? { ...action.message }
                    : message
            )
            //reset current message

            return state;
        case 'SEARCH_MESSAGE':
            return;
        default:
            return state
    }
}

export default messages