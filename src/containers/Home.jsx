import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import logo from "../assets/hang-man-logo.png"

function Home() {
	const [word, setWord] = useState(null)
	console.log(word);

	useEffect(()=>{
		const length = Math.floor(Math.random() * 4 + 4)
		console.log(length);
		fetch(`https://random-word-api.herokuapp.com/word?length=${length}`)
		.then(resp=>resp.json())
		.then(data=>setWord(data[0]))

	},[])

	return (
		<div className='Home'>
			<img src={logo} alt="logo" className='logo' />
			<h1>Hangman</h1>
			<Link to="/game" className='btn' state={word}>Start Game</Link>
		</div>
	)
}

export default Home
