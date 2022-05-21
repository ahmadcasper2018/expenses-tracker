import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const expenseFetch = expense => {
        props.onForward(expense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseFormSave={expenseFetch}/>
        </div>
    );
};

export default NewExpense;