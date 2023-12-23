import React from 'react'

function Navbar() {
  return (
      <>
      <div className="flex justify-between md:px-28 px-4 mt-6">
        <div className="flex">
          <h1 className='text-4xl font-[800]'>nameless</h1>
        </div>
        <div className="md:block hidden">
          <span className="text-3xl font-medium">Login</span>
        </div>
      </div></>
  )
}

export default Navbar