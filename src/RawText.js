function RawText(props) {
	return(
		<div className={"text-raw"} >
			<textarea onChange={props.handleChange} value={props.text}/>
		</div>
	)
}

export default RawText