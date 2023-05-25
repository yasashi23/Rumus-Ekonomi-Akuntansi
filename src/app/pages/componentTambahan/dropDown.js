import React from 'react'

export default function DropDown({func,val}) {
  return (
    <div>
        <p className='text-center pointer dropDown'>klik untuk <span className='pointer underline underline-offset-4 decoration-indigo-500 penjelasan' onClick={func}>{val ? 'tutup' : 'lihat'} penjelasannya</span></p>        
    </div>
  )
}
