import React, { useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Spreator from '../components/lists/Separator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
// import { FlatList } from 'react-native-gesture-handler';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/ahmed.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/ahmed.jpg'),
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('test')}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
				)}
				ItemSeparatorComponent={() => <Spreator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/ahmed.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},

	title: {
		fontWeight: '500',
	},

	subTitle: {
		color: 'gray',
	},

	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},

	container: {
		flexDirection: 'row',
		padding: 20,
	},

	text: {
		fontSize: 20,
		color: 'black',
	},
});

export default MessagesScreen;
