
import React, { useEffect, useRef, useState } from 'react'
//import './Page.css';
import Sidebar from '@/modules/spotify/components/sidebar/Sidebar';
import SpotiMain from '@/modules/spotify/components/main/SpotiMain';

let isResizing: boolean = false;

const SpotifyHomePage = () => {
  const [col1Width, setCol1Width] = useState('20%');
  //const [isResizing, setIsResizing] = useState(false);
  const resizeBarRef = useRef<any>(null);
  const colsContainerRef = useRef<any>(null); 

  const handMouseMove = (e: any) => {
    if (resizeBarRef.current === null) return;
    if (colsContainerRef.current === null) return;
    
    console.log(isResizing)
    if (!isResizing) return;
    
    console.log('move', e.clientX, colsContainerRef.current)
    // resize col-1 =: on drag
    //if (!container) return;

    const containerRect = colsContainerRef.current.getBoundingClientRect();

    const newPosition = (e.clientX - containerRect.left) / containerRect.width;

    // Limit the resizing within 25% to 50% of the container width
    let newWidthPercent = Math.min(Math.max(newPosition * 100, 20), 40);

    newWidthPercent = Math.round(newWidthPercent);

    const leftColWidth = newWidthPercent + '%';
    const rightColWidth = 100 - newWidthPercent + '%';

    console.log(e.clientX, containerRect.width, containerRect.left, leftColWidth);
    setCol1Width(leftColWidth);
  }

  // mouseDown =: sets: mouseUp
  const handMouseDown = () => {
    if (resizeBarRef.current === null) return;
    if (colsContainerRef.current === null) return;

    //setIsResizing(true);
    isResizing = true;

    console.log('--down')
    document.addEventListener('mousemove', handMouseMove);
    // up mouse up clean up
    // set it in document =: any where you let it go
    document.addEventListener('mouseup', handMouseUp);
  }

  const handMouseUp = () => {
    if (resizeBarRef.current === null) return;
    if (colsContainerRef.current === null) return;
    //setIsResizing(false);
    isResizing = false;
    console.log('--up')

    resizeBarRef.current.removeEventListener('mousemove', handMouseMove);
    resizeBarRef.current.removeEventListener('mouseup', handMouseUp);
  }

  useEffect(() => {
    console.log('love..', col1Width);
  }, [col1Width])

  return (
    <div
    className='
    grid grid-cols-1 h-full gap-4
    px-4 p-3 w-full bg-neutral-950
    text-white overflow-hidden
    '
    >
      <div
      className='
      flex h-full #gap-3 w-full
      select-none transition-all overflow-hidden
      '
      ref={colsContainerRef}
      >
        <div
        className={`
        #basis-[${col1Width}]
        h-full
        select-none #transition-all rounded-lg

        hidden
        md:block
        `}

        style={{
          flexBasis: col1Width,
        }}
        >
          <Sidebar/>
        </div>

        <div
        className='
        h-full w-2 bg-neutral-950 cursor-col-resize
        select-none mr-2
        #hover:border-l-2 #border-slate-300 transition-all
        '
        ref={resizeBarRef}
        onMouseDown={handMouseDown}
        >
        </div>

        <div
        className='
        bg-neutral-800 flex-1 rounded-lg
        select-none overflow-hidden
        '
        >
          <SpotiMain/>
        </div>
      </div>
    </div>
  )
}

export default SpotifyHomePage