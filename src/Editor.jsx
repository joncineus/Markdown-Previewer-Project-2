

function Editor({markdown, setMarkdown}) {
    const handleChange = (event) => {
        setMarkdown(event.target.value)

    }

    return(
        <div className="p-4">
            {/*The title and dark mode button*/}
            <h2 className="text-2xl font-bold mb-4">Editor</h2>
            <textarea 
                id="editor" 
                className="w-full h-5/6 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Type here.." 
                value={markdown} 
                onChange={handleChange}>
            </textarea>
        </div>
    )

}

export default Editor;