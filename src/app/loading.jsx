import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center mt-16'>
      <Image className='h-55' src="spinner.svg" alt="loading..." width={500} height={500} />
    </div>
  )
}
