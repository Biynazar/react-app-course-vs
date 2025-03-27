import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'

function App() {


  // return (

  //   <MainLayout />

  // )

  return <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<div>home</div>} />
        <Route path='/forbidden' element={<div>💛 forbidden!!!</div>} />
        <Route path='/addquestion' element={<div>💛 addquestion💛</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
