import React from 'react'
import { CurrentTab } from '../actions'
import { connect } from 'react-redux'
import './scss/MessageTabContent.scss'
import AddMessage from './AddMessage';
import SearchMessage from './SearchMessage';

class MessageTabContent extends React.Component {
    render() {
        const { currentTab } = this.props;

        switch (currentTab) {
            case CurrentTab.SEARCH:
                return (
                    <SearchMessage />
                );
            case CurrentTab.ADD:
                return (
                    <AddMessage />
                );
            case CurrentTab.ALL:
                return (
                    <div></div>
                );
            default: return;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentTab: state.currentTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (currentTab) => {
            // dispatch(setCurrentTab(currentTab.target.innerText))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageTabContent)