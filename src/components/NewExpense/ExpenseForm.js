import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
	/** Holds current state data for the new expense input fields */
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	});


	/** Called when the title input field is changed */
	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	/** Called when the amount input field is changed */
	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};

	/** Called when the date input field is changed */
	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	};

	/** Called when the form is submitted. It does not
	 * validate the data, simply lifts the data up to the
	 * parent component and clears the form data.
	 */
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: +userInput.enteredAmount,
			date: new Date(userInput.enteredDate)
		};

		props.onSaveExpenseData(expenseData);

		setUserInput({
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: ''
		});

		props.onStopEditing();
	};

	return(
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min="0.01" step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min="2019-01-01" max='2022-12-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
				<button type='button' onClick={props.onStopEditing}>Cancel</button>
			</div>
		</form>
	);
};

export default ExpenseForm;