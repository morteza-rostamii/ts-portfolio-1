import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const ColorGame = () => {
  const [gameState, setGameState] = useState<'play' | 'over'>('play');
  const [color, setColor] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [message, setMessage] = useState<'success' | 'wrong' | ''>('');

  // generate 40 random hex colors and pick 3---------

  function generateHexColor() {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
    let hex = '#';

    // hex has 6 digits
    for (let i=0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index];
    }

    return hex;
  }

  function pickThreeRandomHex() {
    const randomHex: string[] = Array.from({length: 3}).map(() => generateHexColor());

    const target = randomHex[Math.floor(Math.random() * randomHex.length)];

    setOptions(randomHex);
    setColor(target);
  }

  function handColorPicker(hex:string) {
    console.log(hex, color);
    if (hex === color) {
      setMessage('success');
      setGameState('over');
    }
    else {
      setMessage('wrong');
    }
  }

  // start game-------------
  function handStartGame() {
    setGameState('play');
    pickThreeRandomHex();
  }

  useEffect(() => {
    if (!color) pickThreeRandomHex();
  }, []);

  console.log(color)
  return (
    <main
    className='
    grid place-content-center h-full
    '
    >
      <div
      className='
      relative
      flex flex-col gap-4
      container mx-auto
      '
      >
        <h1
        className='text-center text-2xl'
        >
        ColorGame
        </h1>  
        <p className='text-center text-gray-500'>
          Guess the hex color.
        </p>
        <div
        className={`
        rounded-md
        w-full h-40 
        `}
        style={{
          backgroundColor: color,
        }}
        >
        </div>

        <div
        className='
        flex gap-2
        '
        >
          {
            options?.length
            ?(
              options.map((el:any) => (
                <Button
                onClick={() => handColorPicker(el)}
                isDisabled={gameState === 'over' ? true : false}
                >
                  {el}
                </Button>
              ))
            ):''
          }
        </div>
        <div
        className={`
        text-center
        `}
        >
          {message}
        </div>

        {/* game over screen */}
        {
          !!(gameState === 'over') && (
            <div
            className='
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            '
            >
              <Button
              colorScheme='green'
              onClick={handStartGame}
              >
                Play again
              </Button>
            </div>
            
          )
        }
      </div>
    </main>
  )
}

export default ColorGame