export const isGreaterThan = (value, valueToCompare):boolean => {
  if(value > valueToCompare) {
		return true;
  }
	return false;
}

//true é inválido, ou seja, valores maiores que os aceitos
//false é válido, valor correto