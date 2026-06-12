import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function MarkdownPreview({ text }) {
  return (
    <section className='preview-section'>
      <div className='preview-area'>
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')

              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    background: '#161224',
                    border: '1px solid #312540',
                    borderRadius: '10px',
                    padding: '20px',
                    margin: '16px 0',
                    fontSize: '14px',
                  }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default MarkdownPreview