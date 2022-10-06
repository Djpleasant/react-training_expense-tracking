import './ExpensesFilter.css';

/**
 * Component handles the user interaction for selecting a year filter.
 *  
 * @returns 
 */
const ExpensesFilter = (props) => {
  /** Event handler fired when the year filter is changed and lifts that 
   * change up to the parent component
   */
	const onYearFilterChangeHandler = (event) => {
		props.onYearFilterChange(event.target.value);
	};

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onYearFilterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;