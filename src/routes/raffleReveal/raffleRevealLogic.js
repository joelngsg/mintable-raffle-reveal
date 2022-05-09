import { useState } from 'react';
import btcnft from '../../assets/btcnft.png';
import noreward from '../../assets/noreward.png';
import processing from '../../assets/processing.png';
import placeholder_ticket from '../../assets/placeholder_ticket.png';

const RaffleRevealLogic = () => {
	const [silverRaffleBalance, setSilverRaffleBalance] = useState(1);
	const [goldRaffleBalance, setGoldRaffleBalance] = useState(3);
	const [diamondRaffleBalance, setDiamondRaffleBalance] = useState(0);
	const [placeholder_ticket_src, setPlaceholder_ticket_src] = useState(placeholder_ticket)

	const drawTicket = (ticketType) => {
		switch(ticketType)
		{
			case 'silver':
				setPlaceholder_ticket_src(processing)
				// process
				setTimeout(function() { //Start the timer
				  	setPlaceholder_ticket_src(noreward)
				}.bind(this), 1000)
				setSilverRaffleBalance(silverRaffleBalance - 1)
				break;
			case 'gold':
				setPlaceholder_ticket_src(processing)
				// process
				setTimeout(function() { //Start the timer
				  	setPlaceholder_ticket_src(btcnft)
				}.bind(this), 1000)
				setGoldRaffleBalance(goldRaffleBalance - 1)
				break;
			case 'diamond':
				setPlaceholder_ticket_src(processing)
				// process
				setTimeout(function() { //Start the timer
				  	setPlaceholder_ticket_src(btcnft)
				}.bind(this), 1000)
				setDiamondRaffleBalance(diamondRaffleBalance - 1)
				break;
			default:
				console.log(ticketType)
		}
	}


	return {silverRaffleBalance, goldRaffleBalance, diamondRaffleBalance, drawTicket, placeholder_ticket_src, setPlaceholder_ticket_src};
}

export default RaffleRevealLogic;