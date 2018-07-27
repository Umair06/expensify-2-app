import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should test default filters values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should set by amount', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducers(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

//Here start test fields
test('should set text filter', () => {
    const text = 'This is my text';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducers(undefined, action)
    expect(state.text).toBe(text)
})

test('should set text filter', () => {
    const startDate = moment();

    const action  = {
        type:'SET_START_DATE',
        startDate
    }
    
    const state = filtersReducers(undefined, action)
    expect(state.startDate).toBe(startDate)
})


test('should set text filter', () => {
    const endDate = moment();

    const action  = {
        type:'SET_END_DATE',
        endDate
    }
    
    const state = filtersReducers(undefined, action)
    expect(state.endDate).toBe(endDate)
})

