import './App.css'

// import ReactMarkdown from 'react-markdown'

import EditorSection from './components/EditorSection';
import MarkdownPreview from './components/MarkdownPreview';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

import { useState } from "react"



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

      <Toolbar viewMode={viewMode} setViewMode={setViewMode} setText={setText} />

      <main className={`main main-${viewMode}`}>

        {viewMode === 'write' &&
          <EditorSection text={text} setText={setText}/>
        }

        {viewMode === 'preview' &&
            <MarkdownPreview text={text} />
        }

        {viewMode === 'split' &&
          <>
            <EditorSection text={text} setText={setText} />
            <MarkdownPreview text={text} />
          </>
        }
      </main>

      <Footer textLength={text.length} symbolWord={getSymbolWord(text.length)} rowCounter={rowCounter} rowWord={getRowWord(rowCounter)} />

    </div>
  )
}

export default App
