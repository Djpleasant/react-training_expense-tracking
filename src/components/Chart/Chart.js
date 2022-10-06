import './Chart.css';

import ChartBar from './ChartBar';

/**
 * Creates a visualization in bar graph form of the expenses per month in 
 * a given year.
 *  
 * @returns 
 */
function Chart(props){
	/** 
	 * Data points to visualize passed down from parent component.
	 * It spreads the dataPoint.value into an array so we can calculate
	 * the maxValue a little easier.
	 */
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

	/** The max value calculated from the provided data points */
	const maxValue = Math.max(...dataPointValues);

	return(
		<div className='chart'>
			{props.dataPoints.map(dataPoint =>
			<ChartBar
				key={dataPoint.label}
				value={dataPoint.value}
				maxValue={maxValue}
				label={dataPoint.label}/>)
			}
		</div>
	);
}

export default Chart;