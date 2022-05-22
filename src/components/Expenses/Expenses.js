import React from 'react';
import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const [yearFiltered, setyearFiltered] = useState('2020');
    const filterByYear = (newYearFiltered) => {
        setyearFiltered(newYearFiltered);
    }

    const YearFilterdList = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFiltered;
    });


    return (
        <Card className="expenses">
            <ExpensesFilter selected={yearFiltered} onChangeFilter={filterByYear}/>
            <ExpenseList  items={YearFilterdList}/>
        </Card>
    );
}

export default Expenses;
