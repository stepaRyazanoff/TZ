import React from 'react'
import cl from './Profile.module.css'

class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			profile: {
				name: 'Моисеев Михаил Сергеевич',
				dateOfBirth: '13.08.1980',
				table: 'Таб №: ГОКИ ОООО',
				specialization:
					'Электрослесарь (слесарь дежурный и по ремонту оборудования) 1 разряда',
			},
		}
	}

	render() {
		return (
			<div className={cl.main}>
				<header className={cl.header}>{this.state.profile.name}</header>
				<div className={cl.dateOfBirth}>{this.state.profile.dateOfBirth}</div>
				<div className={cl.table}>{this.state.profile.table}</div>
				<div className={cl.specialization}>
					{this.state.profile.specialization}
				</div>
			</div>
		)
	}
}

export default Profile
