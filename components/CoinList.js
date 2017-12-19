/**
 * Created by surajjha on 19/12/17.
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, StyleProvider, Header, Spinner, Content, List, ListItem } from 'native-base';
import TextTheme from '../native-base-theme/components/Text';
import _ from 'lodash';
export default class CoinList extends Component {
	constructor() {
		super();
		this.state = {
			prices: [],
			loading: true
		}
	}

	async componentDidMount() {
		let tickerData = await fetch('https://koinex.in/api/ticker');
		this.setState({loading: false});
		//console.log(tickerData._bodyText);
		tickerData = JSON.parse(tickerData._bodyText);
		let prices = tickerData.prices;
		let data = [];
		for(key in prices) {
			if(tickerData.hasOwnProperty(key)) {
				let currency = {
					currency: key,
					price: prices[key]
				}
				console.log(key, prices[key]);
				data.push(currency);
			}
		}
		//console.log(this.state.prices);
		console.log(data);
		//console.log(_.values(prices));
		this.setState({prices: data});

		console.log(this.state.prices);


	}

	render() {
		if(this.state.loading) {
			return (
				<Container style={styles.spinnerContainer}><Spinner /></Container>
			)
		}
		return (
		<Container>
			<Header centerComponent={{ text: 'Currencies', style: { color: '#fff' } }}/>
			<Content>
				<List dataArray={this.state.prices} renderRow={(item) =>
					<ListItem>
						<Text>{item.currency} - {item.price}</Text>
					</ListItem>
				}>

				</List>
			</Content>
		</Container>



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
	},
	spinnerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});