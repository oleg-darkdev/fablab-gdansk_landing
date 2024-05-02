import gamesData from '../gamesData';
import Auction from './template';
let gameData = gamesData.ksg;

let game = new Auction(gameData.promo, gameData.croundfanding, gameData.moreInfo);
game.lots = [
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		name: 'Name of lot',
		etsy: 'https://www.etsy.com/'
	}
];

export default game;
