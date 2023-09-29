import React from 'react'
import cl from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundNavbar: null,
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.toggleState !== this.props.toggleState)
			this.setState({
				backgroundNavbar: this.props.toggleState,
			})
	}

	render() {
		return (
			<div
				className={
					this.state.backgroundNavbar
						? cl.navbarBackground2
						: cl.navbarBackground
				}
			>
				<div className={cl.navbar}>
					<div className={cl.item_1}>
						<NavLink to='/getStarted'>Начать работу</NavLink>
					</div>
					<div className={cl.item_2}>
						<NavLink to='/notifications'>Уведомления</NavLink>
					</div>
					<div className={cl.item_3}>
						<NavLink to='/education'>Обучение</NavLink>
					</div>
					<div className={cl.item_4}>
						<NavLink to='/achievements'>Достижения</NavLink>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar
