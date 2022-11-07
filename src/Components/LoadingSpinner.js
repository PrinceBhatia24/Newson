import React from 'react'
import loading from './loading.gif'

const LoadingSpinner = () => {

  return (
    <>
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    </>
  )

}
export default LoadingSpinner