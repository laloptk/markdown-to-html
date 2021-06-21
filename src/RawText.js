function RawText(props) {
	return(
		<div className={"text-raw"} >
			<textarea onChange={props.handleChange}/>
		</div>
	)
}

export default RawText