import { Heading1, Heading2, Heading3, Bold, Italic, CodeXml, Quote, List, ListOrdered, Link, Minus } from "lucide-react"

const symbols = {
    heading1: '# ',
    heading2: '## ',
    heading3: '### ',
    bold: '**',
    italic: '_',
    code: '`',
    quote: '> ',
    list: '* ',
    listOrdered: '1. ',
    hr: '___'
}

function FormattingToolbar({ text, setText }) {

    function Replacement(symbol) {
        const textarea = document.getElementById('editor')
        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        if (textarea.value.trim() === '') {
            if (symbol === 'bold' || symbol === 'italic' || symbol === 'code') {
                setText(`${symbols[symbol]}${symbols[symbol]}`)
            }
            else {
                setText(`${symbols[symbol]}`)
            }

            textarea.focus()
            return
        }

        const substr = textarea.value.substring(start, end)
        let replacement
        if (symbol === 'bold' || symbol === 'italic' || symbol === 'code') {
            replacement = `${symbols[symbol]}${substr}${symbols[symbol]}`
        }
        else {
            replacement = `${symbols[symbol]}${substr}`
        }
        textarea.setRangeText(replacement, start, end, 'end')
        setText(textarea.value)

        textarea.focus()
    }

    return (
        <div className="formatting-toolbar">
            <div className="headings">
                <button onClick={() => { Replacement('heading1') }}><Heading1 /></button>
                <button onClick={() => { Replacement('heading2') }}><Heading2 /></button>
                <button onClick={() => { Replacement('heading3') }}><Heading3 /></button>
            </div>

            <div className="text-formattings">
                <button onClick={() => { Replacement('bold') }}><Bold /></button>
                <button onClick={() => { Replacement('italic') }}><Italic /></button>
                <button onClick={() => { Replacement('code') }}><CodeXml /></button>
                <button onClick={() => { Replacement('quote') }}><Quote /></button>
            </div>

            <div className="lists">
                <button onClick={() => { Replacement('list') }}><List /></button>
                <button onClick={() => { Replacement('listOrdered') }}><ListOrdered /></button>
            </div>

            <div className="others">
                <button><Link /></button>
                <button onClick={() => {
                    const textarea = document.getElementById('editor')
                    const start = textarea.selectionStart
                    const end = textarea.selectionEnd
                    text.trim() === '' ? setText('___\n') : setText(text.slice(0, start) + '\n___\n' + text.slice(end))
                    textarea.focus()
                }}><Minus /></button>
            </div>
        </div>
    )
}

export default FormattingToolbar