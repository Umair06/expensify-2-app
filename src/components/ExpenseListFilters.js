import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndtDate } from '../actions/filters'

export  class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndtDate(endDate)
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };

    onTextChnage = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate()
        }
        else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange} />


                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>

                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calendarFocused}
                    showClearDates={() => true}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

            </div>
        )
    }
}

const mapDispatchToProps=()=>({
    setTextFilter: (text) => dispatch(setTextFilter(text)) ,
    sortByDate: () => dispatch(sortByDate()) ,
    sortByAmount: () => dispatch(sortByDate()) ,
    setStartDate: (startDate) => dispatch(setStartDate(startDate)) ,
    setEndDate: (endDate) => dispatch(setEndDate(endDate)) 
})


const mapStateToProp = (state) => {
    return {
        filters: state.filters
    }
}


export default connect(mapStateToProp, mapDispatchToProps)(ExpenseListFilters);