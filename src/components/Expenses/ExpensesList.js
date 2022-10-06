import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

/**
 * Creates a list of expenses that are passed from the 
 * parent component. This does not do any filtering.
 * 
 * @returns 
 */
function ExpensesList(props) {
	/** Data handed down from parent component holding the filtered expenses */
	const filteredExpenses = props.filteredExpenses;

	/**
	 * These conditional statements will show text if no expenses were found in the list 
	 * or a list of expenses if expenses were found.
	 */
	if(filteredExpenses.length === 0){
		return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
	}
	return(
		<ul className='expenses-list'>
			{filteredExpenses.map(expense => 
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date} />)}
		</ul>
		
	);
}

export default ExpensesList;