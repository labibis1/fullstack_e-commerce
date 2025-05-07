import React from 'react'
import ProtectedRoute from './Layout/ProtectedRoute'

const App = () => {
  return (
    <div>
      Dashboard page

      <ProtectedRoute/>

    </div>
  )
}

export default App
