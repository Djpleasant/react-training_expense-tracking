import './ExpenseDate.css';

/**
 * Component stores and visualizes the date for the ExpenseItem
 *  
 * @returns 
 */
function ExpenseDate(props){
	/** Property to store a string representation of the month */
	const month = props.date.toLocaleString('en-US', {month: 'long'});

	/** Property to store a string representation of the day */
	const day = props.date.toLocaleString('en-US', {day: '2-digit'});

	/** Property to store a string representation of the yaer */
	const year = props.date.getFullYear();

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
}

export default ExpenseDate;