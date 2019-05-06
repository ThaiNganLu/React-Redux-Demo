import React from 'react'
import { connect } from 'react-redux'
import { setSearchKey } from '../actions'
import { DebounceInput } from 'react-debounce-input';
import './scss/SearchMessage.scss'

class SearchMessage extends React.Component {
    render() {
        const { onSearch } = this.props;
        return (
            <div className="search-message">
                <form className="search-form">
                    <DebounceInput
                        className="input-search"
                        placeholder="Enter Message ID"
                        debounceTimeout={1000}
                        onChange={onSearch} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchKey: state.searchKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (eventData) => {
            dispatch(setSearchKey(eventData.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMessage)