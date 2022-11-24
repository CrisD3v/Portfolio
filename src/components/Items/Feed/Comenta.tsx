import React from 'react'

interface Props {
  active : boolean
}

function Comenta() {
  return (
    <div className='border-t border-b w-box p-3 grid grid-cols-12'>
      <div className="mb-3 col-span-12">
        <input type="text"  className='border outline-none p-1 rounded-sm' autoFocus placeholder='Usuario...'/>
      </div>
      <div className="col-span-12">
        <textarea name="" id="" cols={77} className='border outline-none p-1 resize-none rounded-sm' placeholder='Comentario...'></textarea>
      </div>
      <div className="col-span-12">
        <div className="flex justify-end mr-1">
          <button className='border border-green-500 text-lg font-bold rounded-sm p-2 w-24 hover:bg-green-500 hover:text-white'>Feed</button>
        </div>
      </div>
    </div>
  )
}

export default Comenta