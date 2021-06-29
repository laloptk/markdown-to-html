import React from 'react';
import RawText from './RawText.js';
import ReactMarkDown from "react-markdown";
import gfm from 'remark-gfm'

class TextConverter extends React.Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)

		const markdown = `# Plain text

line 1
line 2
line 3
line 4

# Headers

# h1
## h2
### h3
#### h4
##### h5
###### h6

# header *italic*
## header _italic text_
### header **bold text**
#### header __bold text__
##### header ~~strikethrough~~
###### header \`code\`
###### header \`\`\`code\`\`\`
###### header [opuscapita](https://www.opuscapita.com/)

# Inline code

text \`inline code\` text
text \`\`\`inline code\`\`\` text
\`inline code\`
\`\`\`inline code\`\`\`

# URL

[opuscapita](https://www.opuscapita.com/)
**[opuscapita](https://www.opuscapita.com/)**
[~~opuscapita~~](https://www.opuscapita.com/)

# Blockquotes

> blockquote _italic text_
>> blockquote **bold text**
>>> blockquotes ~~strikethrough~~

# Horisontal rules

---
***
___


# Ordered lists

1. first line
  1) first first line
  2) first second line
2. second line
3. third line
  1) third first line
    1. third first first line

# Unordered list

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

# Emphasis

_italic_
*italic*
__bold__
**bold**
~~strikethrough~~

# Other

## Code blocks

\`\`\`
code block
  code block
    code block
\`\`\`
`


		this.state = {
			rawText: markdown
		}
	}

	handleChange(event) {
		this.setState({
			rawText: event.target.value
		})

		//store.dispatch(convertText(event.target.value))
	}

	render() {
		return (
			<div className="text-wrapper">
				<h1>Markdown to HTML converter</h1>
				<p>
					This is a simple text area that, can turn markdown sintax into HTML. Edit the text in the textarea 
					so you can see the changes in the right side of the page
				</p>

				<p>This project was made using create-react-app along with react-markdown and react-redux</p>
				<div className={"text"}>					
					<RawText handleChange={this.handleChange} text={this.state.rawText} />
					<div className={"text-rich"}>
					 	<ReactMarkDown children={this.state.rawText} remarkPlugins={[[gfm, {singleTilde: false}]]}/>
					</div>
				</div>
			</div>
		)
	}
}

export default TextConverter