import React from 'react'
import cl from './Toggle.module.css'

class Toggle extends React.Component {
	constructor(props) {
		super(props)
		this.state = { toggleState: false }
	}

	switchBack(e) {
		this.setState({
			toggleState: (this.state.toggleState = e.currentTarget.checked),
		})

		this.props.toggleCallback(this.state.toggleState)
	}

	render() {
		return (
			<div>
				<label className={cl.switch}>
					<input
						onClick={this.switchBack.bind(this)}
						type='checkbox'
						className={cl.switch_input}
					></input>
					<span className={cl.switch_slider}></span>
				</label>
			</div>
		)
	}
}

export default Toggle
