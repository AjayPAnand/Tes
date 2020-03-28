import React from 'react';

const Card = (props) =>{
	return(
			<div className='tc bg-light-green dib br3 pa3 ma2 grow' >
				<img alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<p> {props.name} </p>
				<p> {props.email} </p>
			</div>
			</div>

	);


}

export default Card