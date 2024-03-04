import usePaintHook from "./usePaintHook";

const PaintPage = () => {
  const {
    canvasRef,
    //getMousePosition,
    //drawDot,
    //drawLine,
  } = usePaintHook();

  return (
    <main
    className="h-full"
    >
      <div
      className="
      flex flex-col h-full
      container mx-auto p-10
      "
      >
        <h1
        className="
        text-3xl font-bold text-center underline text-green-500 py-6
        "
        >
        paint app
        </h1>

        <div
        className="
        flex flex-col gap-4
        border-2 rounded-lg p-4 flex-1
        "
        >
          {/* header */}
          <div
          className="
          flex gap-2 flex-wrap #border-b-2 p-2
          bg-slate-50 rounded-md shadow-md justify-between
          "
          >
            <div
            className="
            flex items-center gap-4 
            "
            >
              <label
              htmlFor="brush_color"
              >color:</label>
              <input 
              className="cursor-pointer"
              type="color" 
              id="brush_color" />
            </div>

            <div
            className="
            flex items-center gap-4
            "
            >
              <label
              htmlFor="brush_width"
              >width:</label>
              <input 
              className="cursor-pointer"
              type="range"
              min={3}
              max={20} 
              id="brush_width" />
            </div>

            <div
            className="
            flex items-center gap-4
            "
            >
              <label
              htmlFor="brush_opacity"
              >opacity:</label>
              <input 
              className="cursor-pointer"
              type="range"
              min={1}
              max={100} 
              id="brush_opacity" />
            </div>

          </div>

          {/* canvas */}
          <div>
            <canvas
            className="
            w-[300px] h-[300px] bg-slate-100
            "
            ref={canvasRef}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PaintPage