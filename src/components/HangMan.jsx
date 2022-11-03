import React from 'react'

const head = (<div className='head' />)
const body = (<div className='body' />)
const leftArm = (<div className='leftArm' />)
const rightArm = (<div className='rightArm' />)
const leftLeg = (<div className='leftLeg' />)
const rightLeg = (<div className='rightLeg' />)

function HangMan({err}) {
	return (
		<div className='hook-container'>
			{err>0 && head}
			{err>1 && body}
			{err>2 && leftArm}
			{err>3 && rightArm}
			{err>4 && leftLeg}
			{err>5 && rightLeg}
			<div className='hook' />
			<div className='top' />
			<div className='column' />
			<div className='base' />
		</div>
	)
}

export default HangMan
