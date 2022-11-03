import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HangMan from '../components/HangMan'
import Keyboard from '../components/Keyboard'
import Word from '../components/Word'
import {alphabet} from '../utils/alphabet'
import Confetti from 'react-confetti'


function Game() {
	const location = useLocation()
	const word = location.state
	const [err, setErr] = useState(0)
	const [corr, setCorr] = useState(0)
	console.log("Correct: ",corr);
	console.log("Error: ",err);
	const keysArray = Array.from(alphabet)
	if(err == 7){
		const missingLetters = Array.from(document.querySelectorAll('.not_guessed'))
		missingLetters.map(item=>{
			item.style.color = '#FF8787';
		});
		keysArray.map(letter=>{
			let hastSuccess = document.getElementById(letter).classList.contains('success')
			let hastError = document.getElementById(letter).classList.contains('error')
			if (!hastSuccess && !hastError){
				document.getElementById(letter).classList.add('endgame');
			}
		})
	}
	if(corr==word.length){
		keysArray.map(letter=>{
			let hastSuccess = document.getElementById(letter).classList.contains('success')
			let hastError = document.getElementById(letter).classList.contains('error')
			if (!hastSuccess && !hastError){
				document.getElementById(letter).classList.add('endgame');
			}
		})
	}
return (
		<div className='Game'>
			{corr==word.length && <Confetti />}
			<HangMan err={err} />
			<Word word={word} />
			<Keyboard err={err} setErr={setErr} word={word} setCorr={setCorr} />
			{err==7 && <h2>You lost!</h2>}
			{corr==word.length && <h2>You win!</h2>}
			<Link to="/" className='btn'>Play Again</Link>
		</div>
	)
}

export default Game
