import React from 'react'
import './scss/Message.scss'

const Message = ({ onClick, message }) => (
    <div className="message">
        <span className="message-id">{message.id}</span>
        <span className="message-title">{message.title}</span>
    </div>
)

// Message = connect()(Message)

export default Message