function EditorSection({ text, setText }) {
    return (
        <section className='editor-section'>
            <textarea
              name="editor"
              id="editor"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}>
            </textarea>
        </section>
    )
}

export default EditorSection