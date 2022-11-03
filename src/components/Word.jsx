import React from 'react'

function Word({word}) {
	console.log(Array.from(word))
	return (
		<div className='corr_word'>
			{Array.from(word).map((letter, index)=>(
				<div key={index} id={index} className='corr_letter not_guessed'>{letter}</div>
			))}
		</div>
	)
}

export default Word
