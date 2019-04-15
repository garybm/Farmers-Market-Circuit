import React from 'react';
import Button from './Button';

function Nav(){
	var navStyle={
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		borderBottom: '1px solid gray'
	};
	var rounded={
		padding:'10px',
		border:'1px solid skyblue',
		borderRadius:'10px',
		textAlign:'center',
		margin:'20px 0'
	}

	return(
		<div style={navStyle}>
			<div>
				<Button content='Home' />
				<Button content='Notifications' />
				<Button content='Messages' />
			</div>
			<div>
			<input style={rounded} type="text" placeholder="Search"/>
			<input style={rounded} type="text" placeholder="Tweet"/>
			</div>

		</div>
	)
}

export default Nav