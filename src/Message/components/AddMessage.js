import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import './scss/AddMessage.scss'

class AddMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: ""
        };
        this.setNotification = this.setNotification.bind(this);
    }

    setNotification() {
        this.setState(state => ({
            notification: "Successfully!"
        }))
    }

    render() {
        const { currentState, onAddMessage } = this.props;
        let id, title, content;
        return (
            <div className="add-message">
                <form
                    className="add-form"
                    onSubmit={onAddMessage}
                >
                    <input
                        name="id"
                        disabled
                        className="input-add"
                        ref={node => {
                            id = node
                        }}
                        placeholder="Message ID"
                        value={currentState.messages[currentState.messages.length - 1].id + 1}
                    />
                    <input
                        name="title"
                        className="input-add"
                        ref={node => {
                            title = node
                        }}
                        placeholder="Message Title"
                    />
                    <input
                        name="content"
                        className="input-add"
                        ref={node => {
                            content = node
                        }}
                        placeholder="Message Content"
                    />
                    <button className="btn-add" type="submit" onClick={this.setNotification}>Add</button>
                </form>
                <p className="error">{this.state.notification}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentState: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (dataEvent) => {
            dataEvent.preventDefault();
            const data = {
                id: parseInt(dataEvent.target[0].value),
                title: dataEvent.target[1].value,
                content: dataEvent.target[2].value,
                archived: false
            }
            dispatch(addMessage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)