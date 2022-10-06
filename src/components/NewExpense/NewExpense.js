import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

/**
 * Component that handles the new expense form. Has an editing 
 * state that either shows a button to add a new expense or shows 
 * the new expense form itself.
 * 
 * @returns 
 */
function NewExpense(props){
	/** State property whether we are adding a new expense or not */
	const [isEditing, setIsEditing] = useState(false);

	/** Function handed down to child ExpenseForm Component
	 * to received a new expense. Adds a random id and then lifts 
	 * that data up to the parent component.
	 */
	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		props.onAddExpense(expenseData);
	};

	/** Sets the editing state to true */
	const startEditingHandler = () =>{
		setIsEditing(true);
	}
	/** Sets the editing state to false */
	const stopEditingHandler = () =>{
		setIsEditing(false);
	}

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onStopEditing={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler}/>}
		</div>
	);
};

export default NewExpense;