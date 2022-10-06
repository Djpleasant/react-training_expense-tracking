import { useState } from 'react';
import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

/**
 * Component visualizes the expenses and allows the user to filter 
 * expenses by year.
 * 
 * @returns 
 */
function Expenses(props){
	/** State property for the year we are filtering expenses for */
	const [yearFilter, setYearFilter] = useState('2022');

	/** Data passed down from parent component for all current expenses */
	const expenses = props.expenses;

	/** Holds the expense data only for those expenses in the filtered year */
	const filteredExpenses = expenses.filter(expense => {
		return expense.date.getFullYear().toString() === yearFilter;
	});
	
	/** Updates the state of the year filter */
	const onYearFilterChangeHandler = (year) => {
		setYearFilter(year);
	};

	return(
		<Card className="expenses">
			<ExpensesFilter selected={yearFilter} onYearFilterChange={onYearFilterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList filteredExpenses={filteredExpenses}/>
		</Card>
	);
}

export default Expenses;