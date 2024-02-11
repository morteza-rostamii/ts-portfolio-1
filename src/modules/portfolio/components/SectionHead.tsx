import React from 'react'

const SectionHead = ({
  title,
  subTxt,
}: any) => {
  return (
    <div
      className='
      mb-10 text-center
      '
      >
        <h2
        className='text-xl font-semibold underline mb-2 text-green-600'
        >
          {title}
        </h2>
        <p
        className='
        text-gray-400
        '
        >
          {subTxt}
        </p>
      </div>
  )
}

export default SectionHead