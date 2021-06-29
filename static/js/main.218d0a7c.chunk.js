(this["webpackJsonptext-editor"]=this["webpackJsonptext-editor"]||[]).push([[0],{185:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),c=t(14),r=t.n(c),s=(t(75),t(76),t(64)),l=t(65),o=t(21),h=t(70),d=t(68),u=t(2);var b=function(n){return Object(u.jsx)("div",{className:"text-raw",children:Object(u.jsx)("textarea",{onChange:n.handleChange,value:n.text})})},x=t(66),p=t.n(x),j=function(n){Object(h.a)(t,n);var e=Object(d.a)(t);function t(n){var i;Object(s.a)(this,t),(i=e.call(this,n)).handleChange=i.handleChange.bind(Object(o.a)(i));return i.state={rawText:"# Plain text\n\nline 1\nline 2\nline 3\nline 4\n\n# Headers\n\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n\n # h1\n ## h2\n ### h3\n #### h4\n ##### h5\n ###### h6\n\n# header *italic*\n## header _italic text_\n### header **bold text**\n#### header __bold text__\n##### header ~~strikethrough~~\n###### header `code`\n###### header ```code```\n###### header [opuscapita](https://www.opuscapita.com/)\n\n# Inline code\n\ntext `inline code` text\ntext ```inline code``` text\n`inline code`\n```inline code```\n\n# URL\n\n[opuscapita](https://www.opuscapita.com/)\n**[opuscapita](https://www.opuscapita.com/)**\n[~~opuscapita~~](https://www.opuscapita.com/)\n\n# Blockquotes\n\n> blockquote _italic text_\n>> blockquote **bold text**\n>>> blockquotes ~~strikethrough~~\n\n# Horisontal rules\n\n---\n***\n___\n\n\n# Ordered lists\n\n1. first line\n  1) first first line\n  2) first second line\n2. second line\n3. third line\n  1) third first line\n    1. third first first line\n\n# Unordered list\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\n# Emphasis\n\n_italic_\n*italic*\n__bold__\n**bold**\n~~strikethrough~~\n\n# Other\n\n## Code blocks\n\n```\ncode block\n  code block\n    code block\n```\n"},i}return Object(l.a)(t,[{key:"handleChange",value:function(n){this.setState({rawText:n.target.value})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"text-wrapper",children:[Object(u.jsx)("h1",{children:"Markdown to HTML converter"}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)(b,{handleChange:this.handleChange,text:this.state.rawText}),Object(u.jsx)("div",{className:"text-rich",children:Object(u.jsx)(p.a,{children:this.state.rawText})})]})]})}}]),t}(a.a.Component),w=t(69),g=t(67),v="CONVERT_TEXT",O=Object(w.a)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e.type===v?e.text:n}));var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(g.a,{store:O,children:Object(u.jsx)(j,{})})})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,186)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),_()},75:function(n,e,t){},76:function(n,e,t){}},[[185,1,2]]]);
//# sourceMappingURL=main.218d0a7c.chunk.js.map