import React from 'react'
import { connect } from 'react-redux'
import { setMessageArchiveStatus } from '../actions'
import './scss/MessageDetail.scss'

class MessageDetail extends React.Component {
    render() {
        const { message, setMessageArchiveStatus } = this.props;
        if (message) {
            return (
                <div>
                    <h3 className="message-detail-text">MESSAGE DETAIL</h3>
                    <p className="notification">{message.archived ? 'This message is archived! ' : 'This message is not archived! '} <span className="message-action" onClick={setMessageArchiveStatus}>{message.archived ? 'Dearchive' : 'Archive'}</span></p>
                    <table className="message-table">
                        <tbody>
                            <tr>
                                <td className="message-template">ID</td>
                                <td className="message-content">{message.id}</td>
                            </tr>
                            <tr>
                                <td className="message-template">Title</td>
                                <td className="message-content">{message.title}</td>
                            </tr>
                            <tr>
                                <td className="message-template">Content</td>
                                <td className="message-content">{message.content}</td>
                            </tr>
                            <tr>
                                <td className="message-template">Archived</td>
                                <td className="message-content">{message.archived.toString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        return (
            <div>Click an message to view detail!</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.currentMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (message) => {
            dispatch(setMessageArchiveStatus({
                ...message,
                archived: !message.archived
            }))
        }
    }
}

const mergeProps = (propsFromState, propsFromDispatch) => (
    {
        ...propsFromState,
        ...propsFromDispatch,
        setMessageArchiveStatus: () => propsFromDispatch.onClick(propsFromState.message),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MessageDetail)