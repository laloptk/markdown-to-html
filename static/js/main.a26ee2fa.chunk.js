(this["webpackJsonptext-editor"]=this["webpackJsonptext-editor"]||[]).push([[0],{219:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(16),c=t.n(r),s=(t(84),t(85),t(72)),o=t(73),l=t(23),h=t(79),d=t(77),u=t(2);var x=function(e){return Object(u.jsx)("div",{className:"text-raw",children:Object(u.jsx)("textarea",{onChange:e.handleChange,value:e.text})})},p=t(74),b=t.n(p),j=t(75),g=t.n(j),w=function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(e){var a;Object(s.a)(this,t),(a=n.call(this,e)).handleChange=a.handleChange.bind(Object(l.a)(a));return a.state={rawText:"# Plain text\n\nline 1\n\nline 2\n\nline 3\n\nline 4\n\n# Headers\n\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n\n# header *italic*\n## header _italic text_\n### header **bold text**\n#### header __bold text__\n##### header ~~strikethrough~~\n###### header `code`\n###### header ```code```\n###### header [opuscapita](https://www.opuscapita.com/)\n\n# Inline code\n\ntext `inline code` text\ntext ```inline code``` text\n`inline code`\n```inline code```\n\n# URL\n\n[opuscapita](https://www.opuscapita.com/)\n**[opuscapita](https://www.opuscapita.com/)**\n[~~opuscapita~~](https://www.opuscapita.com/)\n\n# Blockquotes\n\n> blockquote _italic text_\n>> blockquote **bold text**\n>>> blockquotes ~~strikethrough~~\n\nHorizontal rules\n=========\n\n---\n***\n___\n\n\n# Ordered lists\n\n1. first line\n  1) first first line\n  2) first second line\n2. second line\n3. third line\n  1) third first line\n    1. third first first line\n\n# Unordered list\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\n# Emphasis\n\n_italic_\n*italic*\n__bold__\n**bold**\n~~strikethrough~~\n\n# Other\n\n## Code blocks\n\n```\ncode block\n  code block\n    code block\n```\n"},a}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({rawText:e.target.value})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"text-wrapper",children:[Object(u.jsx)("h1",{children:"Markdown to HTML converter"}),Object(u.jsx)("p",{children:"This is a simple text area that, can turn markdown sintax into HTML. Edit the text in the textarea so you can see the changes in the right side of the page"}),Object(u.jsx)("p",{children:"This project was made using create-react-app along with react-markdown and react-redux"}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)(x,{handleChange:this.handleChange,text:this.state.rawText}),Object(u.jsx)("div",{className:"text-rich",children:Object(u.jsx)(b.a,{children:this.state.rawText,remarkPlugins:[[g.a,{singleTilde:!1}]]})})]})]})}}]),t}(i.a.Component),O=t(78),f=t(76),v="CONVERT_TEXT",m=Object(O.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return n.type===v?n.text:e}));var k=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f.a,{store:m,children:Object(u.jsx)(w,{})})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,220)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),_()},84:function(e,n,t){},85:function(e,n,t){}},[[219,1,2]]]);
//# sourceMappingURL=main.a26ee2fa.chunk.js.map