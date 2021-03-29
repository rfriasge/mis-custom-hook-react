import  { useState } from 'react'

export const useForm = (intiialstate = {}) => {
	const [values, setValues] = useState(intiialstate)

	const reset = () => {
		setValues(intiialstate);
	}
    const handleImputChange = ({target}) => {
		setValues({
			...values,
			[target.name]:target.value
		})
	}


	return [values, handleImputChange, reset];

}
