import { Pencil, Eye, Columns2, Trash2, RotateCcw, RotateCw, Download, EllipsisVertical } from 'lucide-react';


function Toolbar({ handleDownload, viewMode, setViewMode, setText, text }) {

    return (
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
                <button className='download'
                    disabled={text === ''}
                    onClick={handleDownload}><Download /></button>
                <button
                    className="clear-button"
                    onClick={() => setText('')}>
                    <Trash2 />
                </button>
                <button className='options'><EllipsisVertical /></button>
            </div>

        </div>
    )
}

export default Toolbar