import { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";
function App() {
  const [markdownText, setMarkdownText] = useState<string>();
  return (
    <>
      <div>
        <div className="container">
          <h1 id="title">Markdown Previewer</h1>

          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <Markdown>{markdownText}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
