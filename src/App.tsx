import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import twaLogo from './assets/tapps.png'
// import viteLogo from '/vite.svg'

import Layout from "./Layout/Layout";
import Screen2 from './pages/Screen2'
import Screen3 from './pages/Screen3'


import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route   path='/'  element={<Layout/>} />
      <Route   path='/exchange'  element={<Screen2/>} />
      <Route   path='/screen3'  element={<Screen3/>} />
     
    </Routes>
  )
}

export default App
