import { Dot, Circle } from 'lucide-react';

function Footer({ textLength, symbolWord, rowCounter, rowWord, time }) {
    return (
        <footer className='footer'>
        <div className="char-counter"><Circle fill='#f082b8' />{textLength} {symbolWord}</div>
        <Dot className='alone-dots-footer' />
        <div className='row-counter'>{rowCounter} {rowWord}</div>
        <Dot className='alone-dots-footer' />
        <div className='local-save'>Сохранено локально</div>
        <div className='last-save'>Последнее сохранение в {time}</div>
        <div className='is-all-saved'><Circle fill='#338852' />Все изменения сохранены</div>
    </footer>
    )
}

export default Footer