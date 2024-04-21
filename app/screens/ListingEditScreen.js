import React from 'react';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	category: Yup.object().required().nullable().label('Category'),
	description: Yup.string().label('Description'),
});

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Camera', value: 3 },
];

function ListingEditScreen() {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField maxLength={255} name="title" placeholder="Title"></AppFormField>
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				></AppFormField>
				<AppFormPicker items={categories} name="category" placeholder="Category"></AppFormPicker>

				<AppFormField
					maxLength={255}
					multiline
					numberOfLines={3}
					name="description"
					placeholder="Description"
				></AppFormField>
				<SubmitButton title="Post"></SubmitButton>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default ListingEditScreen;
