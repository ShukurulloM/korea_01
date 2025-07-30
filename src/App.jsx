import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Markaz from './pages/Markaz';
import MarkazHaqida from './pages/MarkazHaqida';
import MarkazTarixi from './pages/MarkazimizTarixi';
import MarkazMaqsadi from './pages/MarkazimizMaqsadi';
import KoreysTiliOrganish from './pages/KareysTiliniOrganish';
import OqishHaqidaUmumiyMalumot from './pages/OqishHaqidaUmumiyMalumot';
import OqitishUslublari from './pages/OqitishUslublari';
import OqitishJarayoni from './pages/OqitishJarayoni';
import OqishgaQabul from './pages/OqishgaQabul';
import MarkazgaQabulgaBosqich from './pages/MarkazgaQabulBosqich';
import MarkazdaOqishningAfzalliklari from './pages/MarkazdaOqishningAfzalliklari';
import RoyhatdanOtish from './pages/RoyhatdanOtish';
import EpsTopik from './pages/EpsTopik';
import Yangiliklar from './pages/Yangiliklar';
import SavolJavob from './pages/SavolJavob';
import Aloqa from './pages/Aloqa';
import Koruzeps from './pages/Koruzeps';
import Carousel from './components/Carousel';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<Koruzeps />} />
        <Route path='/markaz' element={<Markaz />} />
        <Route path='/markazhaqida' element={<MarkazHaqida />} />
        <Route path='/markazimiztarixi' element={<MarkazTarixi />} />
        <Route path='/markazimizmaqsadi' element={<MarkazMaqsadi />} />
        <Route path='/koreystiliniorganish' element={<KoreysTiliOrganish />} />
        <Route path='/oqishhaqidaumumiymalumot' element={<OqishHaqidaUmumiyMalumot />} />
        <Route path='/oqitishuslublari' element={<OqitishUslublari />} />
        <Route path='/oqitishjarayoni' element={<OqitishJarayoni />} />
        <Route path='/oqishgaqabul' element={<OqishgaQabul />} />
        <Route path='/markazgaqabulbosqich' element={<MarkazgaQabulgaBosqich />} />
        <Route path='/markazdaoqishningafzalliklari' element={<MarkazdaOqishningAfzalliklari />} />
        <Route path='/royhatdanotish' element={<RoyhatdanOtish />} />
        <Route path='/epstopik' element={<EpsTopik />} />
        <Route path='/yangiliklar' element={<Yangiliklar />} />
        <Route path='/savoljavob' element={<SavolJavob />} />
        <Route path='/aloqa' element={<Aloqa />} />
        <Route path='/carousel' element={<Carousel />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App