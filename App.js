import React from 'react';
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
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ListingsScreen />
		</GestureHandlerRootView>
	);
}
