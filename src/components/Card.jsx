// import React, { Component } from 'react'

// class Card extends Component {
// constructor(props) {
// 	super(props)
// 	console.log('in constructor()')
// 	console.log(props)
// }

// 	render() {
// 		console.log('in render()')
// 		console.log(this.props)
// 		return (
// 			<div className="card">
// 				<h1 className="headline">I am a Card </h1>
// 				<h2 className="paragraph">
// 					{2+2} my goal is to {this.props.action} some{' '}
// 					{this.props.subject}
// 				</h2>
// 			</div>
// 		)
// 	}
// }

// export default Card

//--------------------------------------------------------
//   Destructure - extract values from the props object
//--------------------------------------------------------
// import React, { Component } from 'react'

// export default class Card extends Component {
// 	render() {
// 		const { action, subject } = this.props

// 		return (
// 			<div className="card">
// 				<h1 className="headline">I am Card</h1>
// 				<h2 className="paragraph">
// 					i {action} {subject}
// 				</h2>
// 			</div>
// 		)
// 	}
// }

//-------------------------------------
//   Function Components
//-------------------------------------
// import React from 'react'

// const Card = (props) => {
// 	const { action, subject } = props

// 	return (
// 		[
// 			<div className="card">
// 				<h1 className="headline">I am a Card</h1>
// 				<h2 className="paragraph">
// 					i {action} {subject}
// 				</h2>
// 			</div>,
// 			<div className="card">
// 				<h1 className="headline">I am a Card</h1>
// 				<h2 className="paragraph">
// 					i {action} {subject}
// 				</h2>
// 			</div>
// 		]
// 	)
// }
// export default Card

//-------------------------
//   Inline destructure
//--------------------------
// import React from 'react'

// const Card = ({ action, subject }) => {
// 	return (
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				i {action} {subject}
// 			</h2>
// 		</div>
// 	)
// }
// export default Card

//---------------------------------
//   Minimal function component
//---------------------------------
// import React from 'react'

// const Card = ({ action, subject }) => (
// 	<div className="card">
// 		<h1 className="headline">I am a Card</h1>
// 		<h2 className="paragraph">
// 			i {action} {subject}
// 		</h2>
// 	</div>
// )

// export default Card;
// //---------------------------------
//   JSX possible outputs
//   container tag / React.fragment
//   / string / null
//---------------------------------
// import React from 'react'

// const Card = ({ action, subject }) => (
// 	[
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				i {action} {subject}
// 			</h2>
// 		</div>,
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				i {action} {subject}
// 			</h2>
// 		</div>
// 	]
// )

// export default Card

//---------------------------------
//   Spread objects into props
//---------------------------------
import React from 'react'
import Thumb from './Thumb'

const Card = (props) => {
	// console.log(props)
	let { action, subject } = props

	let extraData = {
		day: 'Wednesday',
		feel: 'great'
	}

	return (
		<div className="card">
			<h1 className="headline">I am a Card</h1>
			<h2 className="paragraph">
				my goal is to {action} someeee {subject}
			</h2>
			{/* <Thumb action={props.action} subject={props.subject} /> */}
			<Thumb {...props} {...extraData} />
		</div>
	)
}
export default Card
