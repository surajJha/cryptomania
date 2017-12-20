/**
 * Created by surajjha on 19/12/17.
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ExternalCalls from '../utils/ExternalCalls';
import GenericUtils from '../utils/GenericUtils';
import { Container, Text, StyleProvider, Header, Spinner, Content, List, ListItem, Thumbnail, Left, Body, Right, } from 'native-base';

const externalCalls = new ExternalCalls();
const utils = new GenericUtils();

export default class CoinList extends Component {
	state = {
		'prices': [],
		'loading': true
	};

	async componentDidMount() {
		const {err, result} = await utils.invoker(externalCalls.getPrices());
		this.setState({
			prices: result,
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