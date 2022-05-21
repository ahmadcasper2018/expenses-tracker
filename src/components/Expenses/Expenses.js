import React from 'react';
import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [yearFiltered, setyearFiltered] = useState('2020');
    const filterByYear = (newYearFiltered) => {
        setyearFiltered(newYearFiltered);
    }

    const YearFilterdList = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFiltered;
    });

    let renderedExpenses = <p>No expenses to show.</p>;

    if (YearFilterdList.length > 0) {
        renderedExpenses = YearFilterdList.map(
            (expense) =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)

    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={yearFiltered} onChangeFilter={filterByYear}/>
            {renderedExpenses}
        </Card>
    );
}

export default Expenses;
