import React from 'react';
import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [yearFiltered, setyearFiltered] = useState('2020');
    const filterByYear = (newYearFiltered) => {
        setyearFiltered(newYearFiltered);
    }

    const filterdExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFiltered;
    });


    return (
        <Card className="expenses">
            <ExpensesChart expenses={filterdExpenses}/>
            <ExpensesFilter selected={yearFiltered} onChangeFilter={filterByYear}/>
            <ExpenseList  items={filterdExpenses}/>


        </Card>
    );
}

export default Expenses;
