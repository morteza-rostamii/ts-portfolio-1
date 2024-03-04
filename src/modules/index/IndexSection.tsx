import React from 'react'

const IndexSection = ({children}:{children: React.ReactNode}) => {
  return (
    <section
    className="
    border-b-2 border-t-2 min-h-screen bg-white #overflow-hidden
    "
    >
      {children}
    </section>
  )
}

export default IndexSection