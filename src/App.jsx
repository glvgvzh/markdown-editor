import './App.css'

import EditorSection from './components/EditorSection';
import MarkdownPreview from './components/MarkdownPreview';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

import { useState, useEffect, useRef } from "react"

const themes = {
  sakura: '🌸 Sakura',
  ocean: '🌊 Ocean',
}


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

  const [theme, setTheme] = useState('sakura')

  const savedData = JSON.parse(localStorage.getItem('Data'))

  const [text, setText] = useState(() => {
    return savedData !== null ? savedData.text : ''
  })

  const [time, setTime] = useState(() => {
    return savedData !== null ? savedData.time : ''
  })

  const rowCounter = text === '' ? 0 : text.split('\n').length

  const prevText = useRef(text)

  useEffect(() => {
    if (prevText.current === text) return

    const currentTime = new Date(Date.now()).toLocaleTimeString()
    const dataToSave = { text, time: currentTime }

    prevText.current = text
    setTime(currentTime)
    localStorage.setItem('Data', JSON.stringify(dataToSave))
  }, [text])

  const [viewMode, setViewMode] = useState('split')

  function handleDownload() {
    //на случай если сломается button disabled
    if (text === '') {
      alert('Нет текста для скачивания😔')
      return
    }
    const fileToDownload = new Blob([text], { type: 'text/markdown' })
    const objectURL = URL.createObjectURL(fileToDownload)
    const link = document.createElement('a')
    link.href = objectURL
    link.download = 'sakura.md'
    link.click()
    URL.revokeObjectURL(objectURL)
  }

  return (

    <div className={`theme-${theme}`}>
      <div className='app'>

        <header className='header'>
          <h1 className='header-title'>Markdown Editor</h1>
          <h2 className='header-theme'>{themes[theme]}</h2>
            <select className='select-theme' value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="sakura">Sakura</option>
              <option value="ocean">Ocean</option>
          </select>
        </header>

        <Toolbar
          handleDownload={handleDownload}
          viewMode={viewMode}
          setViewMode={setViewMode}
          setText={setText}
          text={text}
        />

        <main className={`main main-${viewMode}`}>

          {viewMode === 'write' &&
            <EditorSection text={text} setText={setText} />
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

        <Footer
          time={time}
          textLength={text.length}
          symbolWord={getSymbolWord(text.length)}
          rowCounter={rowCounter}
          rowWord={getRowWord(rowCounter)}
          hasSavedData={savedData !== null}
        />

      </div>
    </div>

  )
}

export default App
