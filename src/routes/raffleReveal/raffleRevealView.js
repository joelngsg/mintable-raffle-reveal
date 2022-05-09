import React, {  useState, useEffect } from 'react';
import {  Button } from 'react-bootstrap'
import './raffleReveal.css'
import RaffleRevealLogic from './raffleRevealLogic';
import silver_ticket from '../../assets/silver_ticket.png';
import gold_ticket from '../../assets/gold_ticket.png';
import diamond_ticket from '../../assets/diamond_ticket.png';
import ticket from '../../assets/ticket.png';

const RaffleReveal = () => {

	// business logic
	const {silverRaffleBalance, goldRaffleBalance, diamondRaffleBalance, drawTicket, placeholder_ticket_src, setPlaceholder_ticket_src} = RaffleRevealLogic();

	// ui logic
	const [selectedTicketOption, setSelectedTicketOption] = useState("silver")
	const [silverMask, setSilveMask] = useState("none")
	const [goldMask, setGoldMask] = useState("none")
	const [diamondMask, setDiamondMask] = useState("none")
	const startDragSilver = e => {
  		e.dataTransfer.setData("drag-item", "silver");
		// e.preventDefault();
		e.stopPropagation();
	}
	const startDragGold = e => {
  		e.dataTransfer.setData("drag-item", "gold");
		// e.preventDefault();
		e.stopPropagation();
	}
	const startDragDiamond = e => {
  		e.dataTransfer.setData("drag-item", "diamond");
		// e.preventDefault();
		e.stopPropagation();
	}
	const handleDrop = e => {
		switch(e.dataTransfer.getData("drag-item"))
		{
			case 'silver':
				setPlaceholder_ticket_src(silver_ticket)
				drawTicket("silver")
				break;
			case 'gold':
				setPlaceholder_ticket_src(gold_ticket)
				drawTicket("gold")
				break;
			case 'diamond':
				setPlaceholder_ticket_src(diamond_ticket)
				drawTicket("diamond")
				break;
			default:
				console.log("wrong")
		}
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDragLeave = e => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDragOver = e => {
		e.preventDefault();
		e.stopPropagation();
	};  
	const handleDragEnter = e => {
		e.preventDefault();
		e.stopPropagation();
	};

	useEffect(()=>{
		if(silverRaffleBalance === 0)
		{
			setSilveMask("block")
		}
		else
		{
			setSilveMask("none")

		}
	}, [silverRaffleBalance])
	useEffect(()=>{
		if(goldRaffleBalance === 0)
		{
			setGoldMask("block")
		}
		else
		{
			setGoldMask("none")

		}
	}, [goldRaffleBalance])
	useEffect(()=>{
		if(diamondRaffleBalance === 0)
		{
			setDiamondMask("block")
		}
		else
		{
			setDiamondMask("none")

		}
	}, [diamondRaffleBalance])


	return(
		<div style={{ overflow:"auto", display:"flex"}}>
        	<div style={{"width": "20%", "boxShadow": "0px 6px 15px rgba(0, 0, 0, 0.2)", "borderRadius": "12px", float: 'left', margin: '50px'}}>
        		<div>
        			Get More Tickets <Button className="Button">Buy</Button>
        		</div>
        		<div style={{"alignItems":"center", "flexDirection":"column", "justifyContent":"center", "display":"flex"}}>
        			<div  style={{"AlignSelf":"center", width:"50%", position:"relative", paddingTop:"22px"}}>
        				<div className="bg-image">
	        				<img src={silver_ticket} alt="Silver Ticket" onDragStart={startDragSilver} />
	        				<div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", display:silverMask }}></div>
	        			</div>
        				<div className="TicketBalanceIndicator">{silverRaffleBalance}</div>
        			</div>
        			<div  style={{"AlignSelf":"center", width:"50%", position:"relative", paddingTop:"22px"}}>
        				<div className="bg-image">
        					<img src={gold_ticket} alt="Gold Ticket" onDragStart={startDragGold} />
	        				<div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", display:goldMask }}></div>
	        			</div>
        				<div className="TicketBalanceIndicator">{goldRaffleBalance}</div>
        			</div>
        			<div  style={{"AlignSelf":"center", width:"50%", position:"relative", paddingTop:"22px"}}>
        				<div className="bg-image">
        					<img src={diamond_ticket} alt="Diamond Ticket" onDragStart={startDragDiamond}/>
	        				<div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", display:diamondMask }}></div>
	        			</div>
        				<div className="TicketBalanceIndicator">{diamondRaffleBalance}</div>
        			</div>
        		</div>
        	</div>
        	<div style={{"width": "60%", "boxShadow": "0px 6px 15px rgba(0, 0, 0, 0.2)", "borderRadius": "12px", float: 'left', margin: '50px', "alignItems":"center", "justifyContent":"center",  "display":"flex", "flexDirection":"column" }}>
        		<h2>Collectors Event</h2>
        		Participate and win high quality currated NFTs
        		<div  
        			onDrop={e => handleDrop(e)} 
        			onDragOver={e => handleDragOver(e)}
					onDragEnter={e => handleDragEnter(e)}
					onDragLeave={e => handleDragLeave(e)}>
        			<img alt="Drag Ticket here"  src={placeholder_ticket_src} />
        		</div>
        		<div>
	        		<img alt="ticket" src={ticket} style={{float:"left"}}/>
	        		<div style={{float:"left"}}>
	        		<b>Draw Tickets</b><br/>
	        		{silverRaffleBalance + goldRaffleBalance + diamondRaffleBalance} Tickets found<br/><br/>
	        		Open your tickets and get a chance to win $1000 worth of high quality NFTs!
	        		</div>
	        		<div style={{float:"left"}}>
	        			<select onChange={d => setSelectedTicketOption(d.target.value)}>
	        				<option value="silver">Silver Ticket({silverRaffleBalance})</option>
	        				<option value="gold">Gold Ticket({goldRaffleBalance})</option>
	        				<option value="diamond">Diamond Ticket({diamondRaffleBalance})</option>
	        			</select>
	        			<Button className="Button" onClick={() => drawTicket(selectedTicketOption)}>
	        				Draw Ticket
	        			</Button>
	        		</div>
	        	</div>
        	</div>
		</div>
	)
}

export default RaffleReveal;