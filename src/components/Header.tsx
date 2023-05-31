import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logo, power } from '../asset'

type HeaderProps = {
  children: React.ReactNode
}

const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <div className="flex h-16 shadow-md justify-between sticky">
      <img src={logo} alt="logo" className="w-14 ml-5 m-1 cursor-pointer" />
      <div className="flex items-center justify-center gap-4">
        {children}
        <span className="w-8 h-8 bg-blue-600 rounded-full shadow-lg flex justify-center items-center text-white">
          S
        </span>
        <img
          src={power}
          alt="logout"
          className="w-7 mr-5 m-1 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  )
}

export default Header
