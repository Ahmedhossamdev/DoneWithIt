import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableHighlight,
	View,
	Button,
	Alert,
	Platform,
	TextInput,
	Switch,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import AppText from './app/components/AppText';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import colors from './app/config/colors';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
];

export default function App() {
	return <RegisterScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
});
