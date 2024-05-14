import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.js'
// 1. import `ChakraProvider` component
// import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <ChakraProvider>
//     <App />
//     </ChakraProvider>
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'


// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>,
)
