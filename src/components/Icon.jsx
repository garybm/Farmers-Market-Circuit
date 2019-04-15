import React from 'react';
import userIcon from '../assets/img/icon.png';

function Icon(props){
	var  styles={
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:props.color,
		padding:'10px'
	}
	return (
		<div style={styles}>
			<img src={userIcon}/>	
		</div>
		);
}


export default Icon;
