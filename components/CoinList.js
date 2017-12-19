/**
 * Created by surajjha on 19/12/17.
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, StyleProvider, Header } from 'native-base';
import TextTheme from '../native-base-theme/components/Text';
export default class CoinList extends Component {
	render() {
		return (
		<Container>
			<Header
				centerComponent={{ text: 'Currencies', style: { color: '#fff' } }}/>
		</Container>
			// <Container style={styles.container}>
			// 		<StyleProvider style={TextTheme()}><Text>CoinList page</Text></StyleProvider>
			// 	</Container>
	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 20,
		backgroundColor: '#bb4d22'
	}
});