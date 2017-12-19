/**
 * Created by surajjha on 19/12/17.
 */
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

export default class SplashScreen extends Component {
	constructor() {
		super();
	}

	render() {
		return (<Container>
					<Image source={require('../assets/images/bt.png')} />
					<Text>CyptoMania</Text>
				</Container>)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb4d22'
	},
	logo: {
		height: 200,
		width: 200,
	},
	appName: {
		fontSize: 28,
		marginTop: 16,
		color: '#ffffff',
		fontWeight: 'bold'
	},
});