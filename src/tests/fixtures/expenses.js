import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 5,
        createdAt: moment(0)

    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 12000,
        createdAt: moment(0).subtract(4, 'days').valueOf()

    },
    {
        id: '3',
        description: 'Income',
        note: '',
        amount: 20000,
        createdAt: moment(0).add(4, 'days').valueOf()

    }
]
