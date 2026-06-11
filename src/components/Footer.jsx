import { Dot, Circle } from 'lucide-react';

function Footer(props) {
    return (
        <footer className='footer'>
        <div className="char-counter"><Circle fill='#f082b8' />{props.textLength} {props.symbolWord}</div>
        <Dot className='alone-dots-footer' />
        <div className='row-counter'>{props.rowCounter} {props.rowWord}</div>
        <Dot className='alone-dots-footer' />
        <div className='local-save'>Сохранено локально</div>
        <div className='last-save'>Последнее сохранение в {props.time}</div>
        <div className='is-all-saved'><Circle fill='#338852' />Все изменения сохранены</div>
    </footer>
    )
}

export default Footer