/**
 * Created by surajjha on 19/12/17.
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, StyleProvider, Header, Spinner, Content, List, ListItem, Thumbnail, Left, Body, Right, } from 'native-base';

export default class CoinList extends Component {
	state = {
		'prices': [],
		'loading': true
	};

	mapping = {
		'BTC': {'name':'Bitcoin', 'imgPath': require('../assets/images/Bitcoin.png')},
		'ETH': {'name':'Ethereum', 'imgPath': require('../assets/images/Ethereum.png')},
		'BCH': {'name':'Bitcoin Cash', 'imgPath': require('../assets/images/bitcoinCash.png')},
		'XRP': {'name':'Ripple', 'imgPath': require('../assets/images/Ripple.png')},
		'LTC': {'name':'Litecoin', 'imgPath': require('../assets/images/Litecoin.png')},
		'MIOTA': {'name':'Iota', 'imgPath': require('../assets/images/Iota.png')},
		'OMG': {'name':'OmiseGo', 'imgPath': require('../assets/images/OmiseGo.png')},
		'GNT': {'name':'Golem', 'imgPath': require('../assets/images/Golem.png')}
	};

	async componentDidMount() {
		let tickerData = await fetch('https://koinex.in/api/ticker');
		tickerData = await tickerData.json();

		const tickerPrices = tickerData.prices;
		const prices = [];
		for(const key in tickerPrices) {
			prices.push({
				'currency': this.mapping[key].name,
				'price': tickerPrices[key],
				'imgPath': this.mapping[key].imgPath
			});
		}

		this.setState({
			prices,
			'loading': false
		});
	}

	render() {
		if(this.state.loading) {
			return (
				<Container style={styles.spinnerContainer}><Spinner /></Container>
			)
		}
		return (
			<Container>
				<Header centerComponent={{ 'text': 'Currencies', 'style': { 'color': '#fff' } }}/>
				<Content>
					<List dataArray={this.state.prices} renderRow={(item) =>
						<ListItem style={{padding:5}} avatar>
							<Left>
								<Thumbnail size={90} source={item.imgPath} />
							</Left>
							<Body>
							<Text>{item.currency} - inr {item.price}</Text>
							</Body>
							<Right></Right>
						</ListItem>
					}>
					</List>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	'container': {
		'flex': 1,
	},
	'header': {
		'height': 20,
		'backgroundColor': '#bb4d22'
	},
	'spinnerContainer': {
		'justifyContent': 'center',
		'alignItems': 'center',
		'flex': 1
	}
});