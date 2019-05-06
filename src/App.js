import React from 'react';
import './App.scss';
import MessageTab from './Message/components/MessageTab';
import MessageTool from './Message/components/MessageTool';
import MessageTabContent from './Message/components/MessageTabContent';
import MessageList from './Message/components/MessageList';
import MessageDetail from './Message/components/MessageDetail';


export default class App extends React.Component {
  render() {
    return (
      <div className="app-message">
        <div className="message-tool">
          <div className="message-tab">
            <MessageTab />
          </div>
          <div className="message-tab-content">
            <MessageTabContent />
            <MessageList />
          </div>
          <div className="message-control">
            <MessageTool />
          </div>
        </div>
        <div className="message-detail">
          <MessageDetail />
        </div>

      </div>
    );
  }
};
