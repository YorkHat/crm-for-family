import {FC} from 'react'
import Header from './Components/Blocks/Header/Header'
import Sidebar from './Components/Blocks/Sidebar/Sidebar'
import Home from './Components/Blocks/Home/Home'

const App: FC = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Home/>
    </>
  )
}

export default App
