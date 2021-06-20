import React from 'react';
import RawText from './RawText.js';
import ReactMarkDown from "react-markdown";

class TextConverter extends React.Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)

		this.state = {
			rawText: '',
		}
	}

	handleChange(event) {
		this.setState({
			rawText: event.target.value
		})
	}

	render() {
		return (
			<div>
			 <RawText handleChange={this.handleChange}/>
			 <ReactMarkDown children={this.state.rawText} />
			</div>
		)
	}
}

export default TextConverter