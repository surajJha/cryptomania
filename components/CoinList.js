/**
 * Created by surajjha on 19/12/17.
 */
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container } from 'native-base';

export default class CoinList extends Component {
	render() {
		return (<Container style={styles.container}><Text>CoinList page</Text></Container>);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

});