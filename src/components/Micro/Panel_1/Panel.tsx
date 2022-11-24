import React from 'react'
import Perfil from '../../Items/Perfil/Perfil'
import Portada from '../../Items/Portada/Portada'

function Panel() {
  return (
    <div className='grid grid-cols-12'>
        <div className="">
            <Portada/>
        </div>
        <div className="w-80 col-start-6 mt-96">
            <Perfil/>
        </div>
        <div className="row-start-2 col-start-6 col-span-2 mt-2">
          <h1 className='text-center font-bold text-2xl text-rose-600'>Cristian Camilo Londoño Osorio</h1>
        </div>
    </div>
  )
}

export default Panel