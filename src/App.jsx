import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Game from './containers/Game'
import Home from './containers/Home'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="game" element={<Game />}></Route>
			</Routes>
		</div>
	)
}

export default App
