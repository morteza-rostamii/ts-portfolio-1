import React from 'react'

const TwitchCarousel = ({
  width,
  height,
  cards,
}:any) => {
  const middle = Math.floor(cards.length / 2);

  

  return (
    <div
    className='
    relative
    w-[200px] h-[200px] aspect-video
    '
    >
      {
        cards?.length
        ?(
          cards.map((Card:any, i:number) => (
            <CarouselItem 
            key={i}
            item={Card}
            index={i}
            />
          ))
        ):''
      }
    </div>
  )
}

const CarouselItem = ({
  item,
  index,
}: any) => {
  return (
  <div
  className='
  absolute
  w-full h-full
  '
  // style={{
  //   scale: 
  // }}
  >
    {item}
  </div>
  )
}

export default TwitchCarousel