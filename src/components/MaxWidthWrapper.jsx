import React from 'react'

const MaxWidthWrapper = ({ children }) => {
  return (
    <div className='w-full min-h-screen xl:max-w-[1600px] mx-auto'>
        {children}  
    </div>
  )
}

export default MaxWidthWrapper