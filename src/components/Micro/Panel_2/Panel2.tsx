import React from 'react'
import Info from '../../Items/Info/Info'
import Tecnologias from '../../Items/Tecnologias/Tecnologias'

function Panel2() {
  return (
    <div className=''>
      <div className="p-3 rounded-md bg-white shadow-md mb-5">
        <Info/>
      </div>
      <div className="p-3 rounded-md bg-white shadow-md">
        <Tecnologias/>
      </div>
    </div>
  )
}

export default Panel2