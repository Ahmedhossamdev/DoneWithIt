import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';

function AppFormField({ name, ...otherProps }) {
	const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...otherProps}
			></AppTextInput>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormField;
