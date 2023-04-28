import { FormEvent, useState } from 'react';
import './input.css';
// import { isGreaterThan } from './validation';

// const validationFunctions = [
// 	{
// 		key: 'isGreaterThan',
// 		fn: isGreaterThan,
// 	}
// ]

// type Validator = {
//   validationName: Validation;
//   valueToCompare: any;
// };

// type Validation = 'isGreaterThan'

type InputProps = {
	label: string;
	id: string;
	placeholder: string;
	max: number;
	min?: number;
	maxLength: number;
	errorMessage: string;
	value: (value: number) => void;
	isValueInvalid: (value: boolean) => void;
	// validations?: Validator[]
}

const KEYS_TO_BLOCK = ["e", "E", "+", "-"];
const ACCEPTED_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Input = ({label, id, placeholder, max, min, maxLength, errorMessage, value, isValueInvalid}: InputProps) => {
	const [isInvalid, setIsInvalid] = useState(false); // sempre que o estado muda o componente é renderizado de novo. Estados e props são a única forma de atualizar o componente

	const avoidNegativeNums = (event: FormEvent<HTMLInputElement>) => {
    // console.log(event.value);
	
	const isBlockedKeys = KEYS_TO_BLOCK.includes(event.key);
	const isAcceptedKeys = ACCEPTED_KEYS.includes(event.key);
	const isMaxLength = event.target.value.length >= maxLength;

	if ( isBlockedKeys || (isAcceptedKeys && isMaxLength)) {
    	event.preventDefault();
		return;
  	}
  };

//   const validateInput = (event: Event) => {
// 	if(!validations || validations?.length === 0) {
// 		return;
// 	}
// 	validations?.forEach(validation => {
// 		const fn = validationFunctions.find(validationName => validation.validationName === validationName.key)?.fn
// 		const result = fn?.(event.target.value, validation.valueToCompare);
// 		// console.log(result)
// 		if(result) {
// 			event.target.setCustomValidity('teste teste');
// 		} else {
// 			event.target.setCustomValidity('');
// 		}
// 		event.target.reportValidity();
// 		console.log(event)
// 	})
//   };

const checkValidity = (event) => {
	if(!event.target.validity.valid) {
		setIsInvalid(true)
		isValueInvalid(true)
	} else {
		setIsInvalid(false)
		value(event.target.valueAsNumber)
		isValueInvalid(false)
	}
}
	return (
    <span className="container__input">
      <input
        type="number"
        id={id}
        placeholder={placeholder}
		max={max}
		min={min}
        onKeyDown={avoidNegativeNums}
		onInput={(event) => checkValidity(event)}
      />
      <label htmlFor={id}>{label}</label>
	  {isInvalid && <span className='error-message'>{errorMessage}</span>}
    </span>
  );
};
// o que o onInput enviar como evento é o que a função recebe como parâmetro. 
export default Input;

//verificar se a tecla atual é numérica se for verifico o tamanho. Se for qq outra tecla nao entra na condicao

//O ideal é que tenhamos variáveis que representam as condições e elas devem fazer parte do if ou ter funções com nome que explica o que a lógica da condição faz. A função retorna o valor e a variável recebe
// se a função for usada em outras partes da aplicação é um helper