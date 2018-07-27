import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense object', () => {
    const action = removeExpense({ id: 'abc123' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})

test('shuld setup update expense objec', () => {
    const action = editExpense('abc123', { note: 'this is my update value' })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'this is my update value'
        }
    })
})

test('should setup add expense object', () => {
    const expenseDate = {
        description: 'House Rent',
        amount: 12000,
        createdAt: 1000,
        note: 'pay before 5 july'
    }
    const action = addExpense(expenseDate)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    });

})

test('should setup add expense object', () => {
    const action = addExpense()

    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description:'',
                amount:0,
                createdAt:0,
                note:''
            } })
}) 