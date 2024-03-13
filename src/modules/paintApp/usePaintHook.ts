import { useEffect, useRef, useState } from "react";

function usePaintHook() {
  // lines 
  //const [linesStack, setLinesStack] = useState<[any][any]>([]);// stack  
  // after undo move to this
  //const [redosStack, setRedosStack] = useState<[any][any]>([]);

  // holds one line
  let lineRef: any = useRef([]);

  const canvasRef: any = useRef();
  const [isDrawing, setIsDrawing] = useState(false); 
  let canvas:any = null;
  let ctx: any = null;

  const drawDot = (
    x: number,
    y: number,
    //radius: number,
    color: string,
  ) => {
    const ctx = canvasRef.current.getContext('2d');

    console.log(x, y)
    // draw ca circle 
    ctx.beginPath();
    // 0 to 360
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  const draw = (event:any) => {

    if (!isDrawing) return;
    // array to hole a line (points)
     
    //const canvas = canvasRef.current;
    //const ctx = canvas.getContext('2d');
    
    // point coordinates
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    console.log('draw:---------',x, y);
    // push each last point to stack

    /**
      [
        [{x,y}, {xy}] // line
      ] 
     
    */
    
    // lineRef.current.push({
    //   x, y
    // });
    // console.log('pushed--', lineRef.current);

    // starts from x and y
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.4;
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  const startDrawing = (e:any) => {
    console.log('--start');
    setIsDrawing(true);
    canvas.addEventListener('mousemove', draw);
    draw(e);
  }

  const stopDrawing = () => {
    console.log('--stop');
    setIsDrawing(false);
    ctx.beginPath();
    canvas.removeEventListener('mousemove', draw);

    console.log('--stop-- ', isDrawing, lineRef.current);
    // store a line
    //setLinesStack((c:any) => [...c, lineRef.current]);
    // clean the line
    //lineRef.current = [];
    if (isDrawing) {
    }
  }

  // get x and y of mouse click
  const getMousePosition = (
    //canvas:any, 
    event:any) => {
    //const rect = canvas.getBoundingClientRect();

    const x = event.clientX - canvasRef.current.offsetLeft;
    const y = event.clientY - canvasRef.current.offsetTop;

    return {
      x, y
    };
    //console.log(event.clientX, rect.left);
  }

  useEffect(() => {
    // set the canvas width and height
    if (!canvasRef?.current) return;
    canvasRef.current.width = 300;
    canvasRef.current.height = 300;

    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    // events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    }

    // any time isDrawing is set =: set events again to work with new values.
  }, [canvasRef.current]);

  // useEffect(() => {
  //   console.log('---', linesStack);
  // }, [linesStack]);

  useEffect(() => {
    console.log(isDrawing);
  }, [isDrawing]);
  return {
    canvasRef,
    drawDot,
    //draw,
    getMousePosition,
  };
}

export default usePaintHook