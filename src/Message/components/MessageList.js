import React from 'react'
import { CurrentTab, VisibilityFilters, setCurrentMessage } from '../actions'
import { connect } from 'react-redux'
import './scss/MessageList.scss'
import Message from './Message'

class MessageList extends React.Component {
    render() {
        const { currentState, setCurrentMessage } = this.props;

        switch (currentState.currentTab) {
            case CurrentTab.SEARCH:
                const messageSearchList = currentState.messages.filter(message => message.id == currentState.searchKey);
                if (messageSearchList.length === 0 && currentState.searchKey !== "") {
                    return (<p className="error">No result found!</p>);
                }
                switch (currentState.visibilityFilter.search) {
                    case VisibilityFilters.SHOW_ALL:
                        return (
                            <div className="message-list">
                                {messageSearchList.map((message) => {
                                    return (
                                        <div className="message-item" key={message.id} onClick={setCurrentMessage} >
                                            <Message message={message} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    case VisibilityFilters.SHOW_ARCHIVED:
                        return (
                            <div className="message-list">
                                {messageSearchList.filter(message => message.archived).map((message) => {
                                    return (
                                        <div className="message-item" key={message.id} onClick={setCurrentMessage} >
                                            <Message message={message} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    case VisibilityFilters.SHOW_DEARCHIVED:
                        return (
                            <div className="message-list">
                                {messageSearchList.filter(message => !message.archived).map((message) => {
                                    return (
                                        <div className="message-item" key={message.id} onClick={setCurrentMessage} >
                                            <Message message={message} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    default: return;
                }
            case CurrentTab.ADD:
                switch (currentState.visibilityFilter.add) {
                    case VisibilityFilters.SHOW_ALL:
                        return (<div></div>);
                    case VisibilityFilters.SHOW_ARCHIVED:
                        return (<div></div>);
                    case VisibilityFilters.SHOW_DEARCHIVED:
                        return (<div></div>);
                    default: return;
                }
            case CurrentTab.ALL:
                switch (currentState.visibilityFilter.all) {
                    case VisibilityFilters.SHOW_ALL:
                        return (
                            <div className="message-list tab-all-height">
                                {currentState.messages.map((message) => {
                                    return (
                                        <div className="message-item" key={message.id} onClick={setCurrentMessage}>
                                            <Message message={message} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    case VisibilityFilters.SHOW_ARCHIVED:
                        return (
                            <div className="message-list tab-all-height">
                                {currentState.messages.filter(message => message.archived).map((message) => {
                                    return (
                                        <div className="message-item" key={message.id} onClick={setCurrentMessage} >
                                            <Message message={message} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    case VisibilityFilters.SHOW_DEARCHIVED:
                        return (
                            <div className="message-list tab-all-height">
                                {currentState.messages.filter(message => !message.archived).map((message) => {
                                    return (
                                        <div className="message-item" key={message.id} onClick={setCurrentMessage} >
                                            <Message message={message} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    default: return;
                }
            default: return;
        }

    }
}

const mapStateToProps = (state) => {
    return { currentState: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (messages, dataEvent) => {
            let messageID = dataEvent._dispatchInstances.key;
            let message = messages.find(item => item.id == messageID);
            dispatch(setCurrentMessage(message))
        }
    }
}

const mergeProps = (propsFromState, propsFromDispatch) => (
    {
        ...propsFromState,
        ...propsFromDispatch,
        setCurrentMessage: (eventData) => propsFromDispatch.onClick(propsFromState.currentState.messages, eventData),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MessageList)