import { Route, Routes } from 'react-router-dom'
import DetailPage from './components/DetailPage'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>

        <Route path='/project/:postId' element={<DetailPage title={'Safari'}/>}></Route>
      </Routes>
      
      {/* <Footer/> */}
    </div>
  )
}

export default App
