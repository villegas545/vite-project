import React from 'react'
import { Ambiente } from './Paginas/Ambiente/Ambiente'
import FloraFauna from './Paginas/FloraFauna/FloraFauna'
import { Nav } from './Paginas/Nav/Nav'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './index.css'
import Footer from './Paginas/Footer/Footer'

const App = () => {
  return (
    <>

<BrowserRouter>
    <Nav />
       <Routes>
           <Route path="ambiente" element={<Ambiente />} />
           <Route path="flora-fauna" element={<FloraFauna />} />
         
       </Routes>
       <Footer></Footer>
     </BrowserRouter>



    
    </>
  )
}

export default App