import { Dot, Circle } from 'lucide-react';

function Footer({ textLength, symbolWord, rowCounter, rowWord, time, hasSavedData }) {
    console.log(hasSavedData)
    return (
        <footer className='footer'>
            <div className="char-counter"><Circle fill='#f082b8' />{textLength} {symbolWord}</div>
            <Dot className='alone-dot-footer' />
            <div className='row-counter'>{rowCounter} {rowWord}</div>
            <div className='last-save'>{hasSavedData && `Последнее сохранение в ${time}`}</div>
            <div className='is-all-saved'>
                {hasSavedData ? <Circle fill='#338852' /> : <Circle fill='#740000' />}
                {hasSavedData ? 'Изменения сохранены локально': 'Нет сохранений'}
            </div>
        </footer>
    )
}

export default Footer