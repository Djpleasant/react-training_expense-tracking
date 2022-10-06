import './Card.css';

/**
 * Basic card component that adds rounded edges and a light box shadow
 * 
 * @param {*} props 
 * @returns 
 */
function Card(props){
	/** Sets the card class by default and then any additional classes added by the parent component*/
	const classes = 'card ' + props.className;

	/** Wraps the child elements in the 'card' div to apply */
	return <div className={classes}>{props.children}</div>
}

export default Card;