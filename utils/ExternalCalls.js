/**
 * Created by surajjha on 20/12/17.
 */
import _ from 'lodash';
import GenericUtils from './GenericUtils';
import React from 'react';

const genericUtils = new GenericUtils();

export default class ExternalCalls {
	constructor() {
		this.mapping = {
			'BTC': {'name':'Bitcoin', 'imgPath': require('../assets/images/Bitcoin.png')},
			'ETH': {'name':'Ethereum', 'imgPath': require('../assets/images/Ethereum.png')},
			'BCH': {'name':'Bitcoin Cash', 'imgPath': require('../assets/images/bitcoinCash.png')},
			'XRP': {'name':'Ripple', 'imgPath': require('../assets/images/Ripple.png')},
			'LTC': {'name':'Litecoin', 'imgPath': require('../assets/images/Litecoin.png')},
			'MIOTA': {'name':'Iota', 'imgPath': require('../assets/images/Iota.png')},
			'OMG': {'name':'OmiseGo', 'imgPath': require('../assets/images/OmiseGo.png')},
			'GNT': {'name':'Golem', 'imgPath': require('../assets/images/Golem.png')}
		};
	}


	async getPrices() {
		return new Promise(async (resolve, reject) => {
			const {err, result} = await genericUtils.invoker(fetch('https://koinex.in/api/ticker'));
			console.log(err, result);
			if(_.isNull(err)) {
				const tickerData = await result.json();
				const tickerPrices = tickerData.prices;
				const prices = [];
				for(const key in tickerPrices) {
					prices.push({
						'currency': this.mapping[key].name,
						'price': tickerPrices[key],
						'imgPath': this.mapping[key].imgPath
					});
				}
				console.log('prices array created', prices);
				resolve(prices);
			} else {
				console.log('some error occured while calling koinex api', err);
				reject(err);
			}
		});
	}
}

