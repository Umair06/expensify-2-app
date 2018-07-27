import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should test default state of expense', () => {

    const state = expensesReducers(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
})


test('should remove expense by id ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducers(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
});


test('should not remove expense if id not found ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducers(expenses, action)
    expect(state).toEqual(expenses)
});

test('should add expense', () => {
    const expense = {
        id:'121',
        description: 'This is my Gass bill',
        note: 'need to submit this morning',
        amount: 300,
        createdAt: moment()
    }

    const action = {
        type:'ADD_EXPENSE',
        expense
    }

    const state = expensesReducers(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit and expense', () => {
    const amount = 13000;

    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }

    }
    const state = expensesReducers(expenses, action)
    expect(state[1].amount).toEqual(amount)
})



test('should not edit the expense if expense not found', () => {
    const amount = 13000;

    const action = {
        type:'EDIT_EXPENSE',
        id:'11',

        updates:{
            amount
        }
    }
    const state = expensesReducers(expenses, action)
    expect(state).toEqual(expenses)
})
