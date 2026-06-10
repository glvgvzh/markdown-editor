import './App.css'
import { useState } from "react"
import { Pencil, Eye, Columns2, Trash2, RotateCcw, RotateCw, Download, EllipsisVertical, Dot, Circle } from 'lucide-react';

import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function getSymbolWord(count) {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastDigit === 1 && lastTwoDigits !== 11) return 'символ'
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) return 'символа'
  return 'символов'
}

function getRowWord(count) {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastDigit === 1 && lastTwoDigits !== 11) return 'строка'
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) return 'строки'
  return 'строк'
}

function App() {
  const [text, setText] = useState('')
  const rowCounter = text === '' ? 0 : text.split('\n').length
  const [viewMode, setViewMode] = useState('split')
  

  return (
    <div className="app">
      
      <header className='header'>
        <h1 className='header-title'>Markdown Editor</h1>
        <h2 className='header-theme'>🌸 Sakura</h2>
      </header>
      
      <div className="toolbar">
        <div className='toolbar-view'>
          <button className={viewMode === 'write' ? 'active-button' : ''} onClick={() => setViewMode('write')}><Pencil />Write</button>
          <button className={viewMode === 'preview' ? 'active-button' : ''} onClick={() => setViewMode('preview')}><Eye />Preview</button>
          <button className={viewMode === 'split' ? 'active-button' : ''} onClick={() => setViewMode('split')}><Columns2 />Split</button>
        </div>

        <div className='toolbar-history'>
          <button className='undo'><RotateCcw /></button>
          <button className='redo'><RotateCw /></button>
        </div>

        <div className='toolbar-actions'>
          <button className='download'><Download /></button>
          <button 
            className="clear-button"
            onClick={() => setText('')}>
              <Trash2 />
          </button>
          <button className='options'><EllipsisVertical /></button>
        </div>

      </div>
      
      <main className={`main main-${viewMode}`}>
        
        {viewMode === 'write' &&
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
        }

        {viewMode === 'preview' &&
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
        }

        {viewMode === 'split' &&
          <>
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
          </>
        }
      </main>

      <footer className='footer'>
        <div className="char-counter"><Circle fill='#f082b8'/>{text.length} {getSymbolWord(text.length)}</div>
        <Dot className='alone-dots-footer' />
        <div className='row-counter'>{rowCounter} {getRowWord(rowCounter)}</div>
        <Dot className='alone-dots-footer' />
        <div className='local-save'>Сохранено локально</div>
        <div className='last-save'>Последнее сохранение в 13:37:13</div>
        <div className='is-all-saved'><Circle fill='#338852'/>Все изменения сохранены</div>
      </footer>
    </div>
  )
}

export default App
