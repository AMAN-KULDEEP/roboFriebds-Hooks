import React from 'react';
import './Card.css';

const Card = ({name , email , id}) => {
	return(
		<div className = 'tc crd dib br2 ba b--black pa1 ma2 grow bw1 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='Robot'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;