import './ChartBar.css';

/**
 * Component visualizes an individual time frame (ex: 'Jan') and 
 * fills in the bar based on the value and maxValue props that are
 * provided from the parent component.
 * 
 * @returns 
 */
const ChartBar = props => {
	/** Fill height used in JSX component style to be set dynamically */
	let barFillHeight = '0%';

	/** Calculates the fill height of the bar */
	if(props.maxValue > 0){
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
	}

	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div className='chart-bar__fill' style={{height: barFillHeight}}></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div>
	);
}

export default ChartBar;