import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	// if(true){
	// 	throw new Error('404');
	// }
	const CardArray = robots.map((robot , i) => {
			return(
				<Card key = {robot.id}
				id = {robot.id} 
				name = {robot.name} 
				email = {robot.email} 
				/>
			);
		}
		);
	return(
		<>	
			{CardArray}
    	</>
	);
}

export default CardList;

