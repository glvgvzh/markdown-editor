function EditorSection({ text, setText, emoji }) {
  return (
    <section className='editor-section'>
      <textarea
        name="editor"
        id="editor"
        placeholder={`${emoji}  Начните писать Markdown`}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      >
      </textarea>
    </section>
  )
}

export default EditorSection