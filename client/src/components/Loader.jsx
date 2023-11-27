import React from 'react'
import {Bars} from 'react-loader-spinner'  

const Loader = () => {
  return (
    <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className="w-full h-full flex justify-center items-center bg-blue-500"
        visible={true}
    />
  )
}

export default Loader