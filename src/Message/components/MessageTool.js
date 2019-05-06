import React from 'react'
import { VisibilityFilters, CurrentTab, setVisibilityFilter } from '../actions'
import { connect } from 'react-redux'
import './scss/MessageTool.scss'

class MessageTool extends React.Component {

    render() {
        const { currentTab, currentFilter, setVisibility } = this.props;
        if (currentTab === CurrentTab.SEARCH) {
            return (
                <div className="tool">
                    <div className={currentFilter.search === VisibilityFilters.SHOW_ALL ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_ALL}</span>
                    </div>
                    <div className={currentFilter.search === VisibilityFilters.SHOW_ARCHIVED ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_ARCHIVED}</span>
                    </div>
                    <div className={currentFilter.search === VisibilityFilters.SHOW_DEARCHIVED ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_DEARCHIVED}</span>
                    </div>
                </div>
            );
        }
        else if (currentTab === CurrentTab.ADD) {
            return (
                <div className="tool">
                    <div className={currentFilter.add === VisibilityFilters.SHOW_ALL ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_ALL}</span>
                    </div>
                    <div className={currentFilter.add === VisibilityFilters.SHOW_ARCHIVED ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_ARCHIVED}</span>
                    </div>
                    <div className={currentFilter.add === VisibilityFilters.SHOW_DEARCHIVED ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_DEARCHIVED}</span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="tool">
                    <div className={currentFilter.all === VisibilityFilters.SHOW_ALL ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_ALL}</span>
                    </div>
                    <div className={currentFilter.all === VisibilityFilters.SHOW_ARCHIVED ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_ARCHIVED}</span>
                    </div>
                    <div className={currentFilter.all === VisibilityFilters.SHOW_DEARCHIVED ? 'tool-item active' : 'tool-item'} onClick={setVisibility}>
                        <span className="tool-content">{VisibilityFilters.SHOW_DEARCHIVED}</span>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentTab: state.currentTab,
        currentFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (state, eventData) => {
            switch (state.currentTab) {
                case CurrentTab.SEARCH:
                    dispatch(setVisibilityFilter({
                        search: eventData.target.innerText,
                        add: state.currentFilter.add,
                        all: state.currentFilter.all
                    }))
                    break;
                case CurrentTab.ADD:
                    dispatch(setVisibilityFilter({
                        search: state.currentFilter.search,
                        add: eventData.target.innerText,
                        all: state.currentFilter.all
                    }))
                    break;
                case CurrentTab.ALL:
                    dispatch(setVisibilityFilter({
                        search: state.currentFilter.search,
                        add: state.currentFilter.add,
                        all: eventData.target.innerText
                    }))
                    break;
                default: break;
            }

        }
    }
}

const mergeProps = (propsFromState, propsFromDispatch) => (
    {
        ...propsFromState,
        ...propsFromDispatch,
        setVisibility: (eventData) => propsFromDispatch.onClick(propsFromState, eventData),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MessageTool)