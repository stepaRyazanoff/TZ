import React from 'react'

const DateNow = () => {
	let today = new Date().toLocaleDateString()

	let data = new Date()
	let hour = data.getHours()
	let minutes = data.getMinutes()

	let currentTime = `${hour}:${minutes}`

	return (
		<>
			<div>{today}</div>

			<div>{currentTime}</div>
		</>
	)
}

export default DateNow
