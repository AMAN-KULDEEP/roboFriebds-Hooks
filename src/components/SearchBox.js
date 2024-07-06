import React from 'react';

const SearchBox = ({searchChange})=>{
	return(
		<div className = 'ma4'>
			<input 
				className = 'pa1 ba b--black bg-lightest-blue '
				type="search" placeholder='search robots'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;