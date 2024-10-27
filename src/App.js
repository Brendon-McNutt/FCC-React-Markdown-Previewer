import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";


const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;
function App() {
  const [markdownText, setMarkdowntext] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1 id="header">Markdown Previewer</h1>
        <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdowntext(e.target.value)}></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
        </div>
        <p id="sig">By Brendon McNutt</p>
      </div>
    </>
  );
}

export default App;
