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

        if (start === end) return

        const substr = textarea.value.substring(start, end)
        let replacement
        if (symbol === 'bold' || symbol === 'italic' || symbol === 'code') {
            replacement = `${symbols[symbol]}${substr}${symbols[symbol]}`
        }
        else {
            replacement = `${symbols[symbol]}${substr}`
        }
        textarea.setRangeText(replacement, start, end, 'select')
        setText(textarea.value)
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
                <button><Minus /></button>
            </div>
        </div>
    )
}

export default FormattingToolbar