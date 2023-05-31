import { useRouteError } from 'react-router-dom'

function ErrorHandler() {
  const error = useRouteError()

  return (
    <p className="font-bold text-lg">
      {(error as { statusText?: string })?.statusText ||
        (error as Error)?.message}
    </p>
  )
}

export default ErrorHandler
