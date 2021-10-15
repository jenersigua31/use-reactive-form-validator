import React from 'react'

import { useMyHook } from 'use-reactive-form-validator'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
