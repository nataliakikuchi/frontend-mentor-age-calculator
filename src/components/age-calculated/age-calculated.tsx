import './age-calculated.css';

type AgeCalculatedProps = {
	year: number;
	month: number;
	day: number;
}

const AgeCalculated = (props: AgeCalculatedProps) => {
	const showInputValue = (value: number) => {
		if(!Number.isNaN(value) && value !== null) {
			return value;
		}
		return '- -';
	}

	return (
		<div className='age-calculated'>
			<div className='age-calculated__result'>
				<span>{showInputValue(props.year)}</span>
				<span>years</span>
			</div >
			<div className='age-calculated__result'>
				<span>{showInputValue(props.month)}</span>
				<span>months</span>
			</div>
			<div className='age-calculated__result'>
				<span>{showInputValue(props.day)}</span>
				<span>days</span>
			</div>
		</div>
	);
};

export default AgeCalculated;
