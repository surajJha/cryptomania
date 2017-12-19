/**
 * Created by surajjha on 15/12/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

export default class Game extends React.Component {
	static propTypes = {
		randomNumberCount : PropTypes.number.isRequired,
	};

	 randomNumbers = [];
	 target;


	render() {
		this.randomNumbers = [];
		for(let i = 0; i < this.props.randomNumberCount; i++) {
			if(i == this.props.randomNumberCount)break;
			this.randomNumbers.push(Math.floor(Math.random() * 10));
		}
		this.target = this.randomNumbers.slice(0, this.props.randomNumberCount-2).reduce((accumulator, current) => accumulator + current, 0);
		console.log(this.target);
		console.log(this.randomNumbers);
		return (
			<View style={styles.container}>
				<Text style={styles.target}>{this.target}</Text>
				<Text>{this.props.randomNumberCount}</Text>
				{this.randomNumbers.map((num, index) => {
					<Text key={index}>{num}</Text>
				})
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ddd',
		paddingTop: 30
	},
	target: {
		fontSize: 40,
		backgroundColor: '#aaa',
		marginHorizontal: 50,
		textAlign: 'center'
	},
});

