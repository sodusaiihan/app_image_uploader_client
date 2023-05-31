import React from 'react'
import { Divider } from 'antd'
import { backgrounImage, images } from '../constants'
import { Register } from '../components'

const Login: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 w-full max-h-screen overflow-hidden">
        <div className="col-span-1">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-screen object-cover"
              src={backgrounImage}
              alt="climbing mountains"
            />
            <div className="absolute">
              <div className="flex gap-20">
                {images.map((image, i) => (
                  <div className="p-4 bg-white rounded-full">
                    <img
                      src={image.img}
                      alt={image.name}
                      key={i}
                      className="w-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-5 items-center justify-center h-full">
            <div>
              <span className="w-72 px-5 text-lg text-blue-800 font-bold">
                CLIENT
              </span>
              <Divider />
            </div>
            <Register />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
