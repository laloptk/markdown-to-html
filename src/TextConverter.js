import RawText from './RawText.js';
import ReactMarkDown from "react-markdown";
import gfm from 'remark-gfm';
import { useSelector, useDispatch } from 'react-redux'
import convertText from './redux-store/actions'

const TextConverter = (props) => {
	const rawText = useSelector( state => state )
	const dispatch = useDispatch()
	
	const handleChange = (event) => {		
		dispatch(convertText(event.target.value))
	}
	
	return (
		<div className="text-wrapper">
			<h1>Markdown to HTML converter</h1>
			<p>
				This is a simple text area that, can turn markdown sintax into HTML. Edit the text in the textarea 
				so you can see the changes in the right side of the page
			</p>

			<p>This project was made using create-react-app along with react-markdown and react-redux</p>
			<div className={"text"}>					
				<RawText handleChange={handleChange} text={rawText} />
				<div className={"text-rich"}>
				 	<ReactMarkDown children={rawText} remarkPlugins={[gfm]}/>
				</div>
			</div>
		</div>
	)
}

export default TextConverter