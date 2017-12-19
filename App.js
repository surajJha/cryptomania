import React from 'react';
import SplashScreen from './components/SplashScreen';
import CoinList from './components/CoinList';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			loading: true
		}
	}

	async componentWillMount() {
		this.setState({ loading: true });
		await Expo.Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		});
		setTimeout(() => {
			this.setState({loading: false});
		}, 3000);

	}

  render() {
	  if(this.state.loading) {
		  return (<SplashScreen/>);
	  }
	  return (<CoinList/>);
  }
}

