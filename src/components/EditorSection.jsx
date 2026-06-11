function EditorSection(props) {
    return (
        <section className='editor-section'>
            <textarea
              name="editor"
              id="editor"
              value={props.text}
              onChange={(e) => {
                props.setText(e.target.value)
              }}>
            </textarea>
        </section>
    )
}

export default EditorSection