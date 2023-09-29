import './App.css'
import React from 'react'
import Login from './components/login/Login'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Education from './components/education/Education'
import GetStarted from './components/getStarted/GetStarted'
import Achievements from './components/achievements/Achievements'
import Notifications from './components/notifications/Notifications'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			backgroundLogin: null,
		}
	}

	loginBackgroundCallback(toggleState) {
		this.setState({
			backgroundLogin: toggleState,
		})

		this.toggleState = toggleState
	}

	render() {
		return (
			<div
				className={
					this.state.backgroundLogin ? 'loginBackground2' : 'loginBackground'
				}
			>
				<div className='wrapper'>
					<Sidebar
						loginBackgroundCallback={this.loginBackgroundCallback.bind(this)}
					/>
					<Routes>
						<Route
							path='/navbar?'
							element={<Navbar toggleState={this.toggleState} />}
						/>
						<Route path='/login' element={<Login />} />
						<Route path='/education' element={<Education />} />
						<Route path='/getStarted' element={<GetStarted />} />
						<Route path='/achievements' element={<Achievements />} />
						<Route path='/notifications' element={<Notifications />} />
					</Routes>
				</div>
			</div>
		)
	}
}

export default App
