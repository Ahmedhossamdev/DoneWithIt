import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>

			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					placeholder="Email"
					textContentType="emailAddress"
					icon="email"
					autoCorrect={false}
					keyboardType="email-address"
					name="email"
				></AppFormField>
				<AppFormField
					autoCapitalize="none"
					placeholder="Password"
					textContentType="password"
					icon="lock"
					autoCorrect={false}
					secureTextEntry={true}
					name="password"
				></AppFormField>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
	input: {
		margin: 10,
		height: 40,
		borderWidth: 1,
	},
	button: {
		backgroundColor: 'blue',
		color: 'white',
		padding: 15,
		margin: 10,
	},
});

export default LoginScreen;
