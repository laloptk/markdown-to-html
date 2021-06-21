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
			<div className="text-wrapper">
				<h1>Markdown to HTML converter</h1>
				<div className={"text"}>
					
					<RawText handleChange={this.handleChange}/>
					<div className={"text-rich"}>
					 	<ReactMarkDown children={this.state.rawText} />
					</div>
				</div>
			</div>
		)
	}
}

export default TextConverter