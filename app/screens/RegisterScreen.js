import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(1).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>

			<AppForm
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					placeholder="Name"
					textContentType="none"
					icon="account"
					autoCorrect={false}
					keyboardType="default"
					name="name"
				/>
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
				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});

export default RegisterScreen;
