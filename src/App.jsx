import Editor from "./Editor"
import Previewer from "./Previewer"
import { useState, useEffect } from "react"

function App() {
  const sampleText = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

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
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.

  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. But the list goes on...

  ![Cute Puppy](https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4NzE0NDc3LWltYWdlLWt3dnhocTEzLmpwZw.jpg)

  `;

  const [markdown, setMarkdown] = useState(sampleText)

  return (
    <div className="items-stretch grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
      <Editor markdown={markdown} setMarkdown={setMarkdown}/>
      <Previewer markdown={markdown}/>
    </div>
  )
}

export default App
