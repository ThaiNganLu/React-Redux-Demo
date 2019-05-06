import React from 'react'
import { CurrentTab } from '../actions'
import { connect } from 'react-redux'
import { setCurrentTab } from '../actions'
import './scss/MessageTab.scss'

class MessageTab extends React.Component {
    render() {
        const { currentTab, onClick } = this.props;

        return (
            <div className="tab">
                <div className={currentTab === CurrentTab.SEARCH ? 'tab-item active' : 'tab-item'} onClick={onClick}>
                    <span className="tab-content" tab={CurrentTab.SEARCH}>SEARCH</span>
                </div>
                <div className={currentTab === CurrentTab.ADD ? 'tab-item active' : 'tab-item'} onClick={onClick}>
                    <span className="tab-content" tab={CurrentTab.ADD}>ADD</span>
                </div>
                <div className={currentTab === CurrentTab.ALL ? 'tab-item active' : 'tab-item'} onClick={onClick}>
                    <span className="tab-content" tab={CurrentTab.ADD}>ALL</span>
                </div>
            </div>
        );
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
            dispatch(setCurrentTab(currentTab.target.innerText))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageTab)