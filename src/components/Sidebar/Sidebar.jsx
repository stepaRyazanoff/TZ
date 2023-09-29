import React from 'react'
import Date from '../date/DateNow'
import Toggle from '../toggle/Toggle'
import cl from './Sidebar.module.css'
import Profile from '../profile/Profile'
import Tests from '../testComplited/Tests'
import { NavLink } from 'react-router-dom'
import Briefing from '../briefing/Briefing'
import Examiner from '../examiner/Examiner'
import Certification from '../certification/Certification'

class Sidebar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { toggleState: null }
	}

	toggleCallback(toggleState) {
		this.setState({ toggleState: toggleState })
		this.props.loginBackgroundCallback(toggleState)
	}

	render() {
		return (
			<div
				className={
					this.state.toggleState ? cl.sidebarBackground2 : cl.sidebarBackground
				}
			>
				<div className={cl.sidebar}>
					<div className={cl.item_1}>
						<Date />
					</div>
					<div className={cl.item_2}>
						<NavLink to='/login'>Выход</NavLink>
					</div>
					<div className={cl.item_3}>
						<Toggle toggleCallback={this.toggleCallback.bind(this)} />
					</div>
					<div className={cl.item_4}>
						<Profile />
					</div>
					<div className={cl.item_5}>
						<Briefing />
					</div>
					<div className={cl.item_6}>
						<Examiner />
					</div>
					<div className={cl.item_7}>
						<Tests />
					</div>
					<div className={cl.item_8}>
						<Certification />
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar
