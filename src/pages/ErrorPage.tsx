import React from 'react'
import { ErrorHandler } from '../error'
import { pagenotfound } from '../asset'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const ErrorPage: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <img
        src={pagenotfound}
        alt="page not found"
        className="w-72 h-72 object-cover"
      />
      <ErrorHandler />
      <Button className="w-64 my-8" type="dashed">
        <Link to="/">Буцах</Link>
      </Button>
    </div>
  )
}

export default ErrorPage
