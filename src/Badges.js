import React from 'react'

export default function Badges({list}) {
  return (
    <div className='mt-1 flex flex-wrap'>
      {list.map((b,idx)=> <div key={idx} className='mr-2 mb-2 px-2 bg-green-200 rounded-full text-center text-green-700 text-md'>{b}</div>)}
    </div>
  )
}
