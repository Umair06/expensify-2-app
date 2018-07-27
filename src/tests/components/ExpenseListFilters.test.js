import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate} />
    )
});

test('should set the Text filter Correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set the setTextFilter with alt Data Correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text changes', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith();
})


test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled();

})

test('should sort by amount', () => {
const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled();
    
})

test('should handle date changes', () => {
   const startDate = moment(0).add(4, 'years')
   const endDate = moment(0).add(8, 'years')
   wrapper.find('DateRangePicker').prop('onDateChange')({ startDate, endDate });
   expect(startDate).toHaveBeenLastCalledWith(startDate);
   expect(endDate).toHaveBeenLastCalledWith(startDate);
})

test('should handle data focus changg', () => {
const calendarFocused = 'endDate';
wrapper.find('DateRangePicker').prop('onFocusChnage')(calendarFocused)
expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})