import React from "react";
import { marked } from "marked";

const Markdown = () => {
  const defaultContent = `
![dcodinghand](https://yt3.ggpht.com/KDOb1tUo5U0vgmpgSS6TzPDVSHfBwJEvCeisvyA_S8w9XLa9GPMLg7E1JXsbZDc5KdYS9wjYbA=s88-c-k-c0x00ffffff-no-rj)

# Hello, 
## say hello
### Dcodinghand


\`<div> this is inline code</div>\`

\`\`\`
const multiLineCode = (argument) => {
    return argument + " DcodingHand";
}
\`\`\`

**Some bold text**

[ youtube Channel](https://www.youtube.com/channel/UCrjD6WzZfrP2gYFdSA4bnlg)

> Block Quot

1. First list item
2. Second list item
`
  const [textInput, setTextInput] = React.useState(defaultContent);
  marked.setOptions({
    breaks: true,
  })
  return (
    <div className="Maincontainer">
      <textarea
        id="editor"
        rows="10"
       onChange={(e)=>setTextInput(e.target.value)}
        value={textInput}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(textInput),
         }}
      ></div>
    </div>
  );
};

export default Markdown;
