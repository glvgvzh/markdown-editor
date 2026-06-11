import { Pencil, Eye, Columns2, Trash2, RotateCcw, RotateCw, Download, EllipsisVertical } from 'lucide-react';


function Toolbar(props) {
    return (
        <div className="toolbar">
            <div className='toolbar-view'>
                <button className={props.viewMode === 'write' ? 'active-button' : ''} onClick={() => props.setViewMode('write')}><Pencil />Write</button>
                <button className={props.viewMode === 'preview' ? 'active-button' : ''} onClick={() => props.setViewMode('preview')}><Eye />Preview</button>
                <button className={props.viewMode === 'split' ? 'active-button' : ''} onClick={() => props.setViewMode('split')}><Columns2 />Split</button>
            </div>

            <div className='toolbar-history'>
                <button className='undo'><RotateCcw /></button>
                <button className='redo'><RotateCw /></button>
            </div>

            <div className='toolbar-actions'>
                <button className='download'><Download /></button>
                <button
                    className="clear-button"
                    onClick={() => props.setText('')}>
                    <Trash2 />
                </button>
                <button className='options'><EllipsisVertical /></button>
            </div>

        </div>
    )
}

export default Toolbar