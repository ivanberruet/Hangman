import React from 'react'
import {alphabet} from '../utils/alphabet'


function Keyboard({setErr, word, err, setCorr}) {
function handleClick(event){
	const guess = event.target.value
	//This disables the guess
	document.getElementById(guess).disabled = true

	let coincidence = false
	//This shows the letters that match the gess
	Array.from(word).map((letter, index)=>{
		if (letter == guess){
			document.getElementById(index).style.color = '#000'
			document.getElementById(index).classList.replace('not_guessed','guessed')
			setCorr(oldCorr=>oldCorr+1)
			coincidence = true
		}
	})
	
	//This sets success and error colors
	//Also increments the error count
	if(!coincidence){
		setErr(oldErr=>oldErr+1)
		document.getElementById(guess).classList.add('error')
	}
	else{
		document.getElementById(guess).classList.add('success')
	}
}

	return (			
		<div className='keyBoard'>
			{alphabet.map(letter=>(
				<button 
				key={letter} 
				id={letter} 
				value={letter} 
				className='letter' 
				onClick={handleClick} 
				disabled={err==7}
				>
					{letter}
				</button>
			))}
		</div>
	)
}

export default Keyboard
