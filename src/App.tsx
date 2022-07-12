import {FC} from 'react'
import Header from './Components/Blocks/Header/Header'
import Sidebar from './Components/Blocks/Sidebar/Sidebar'
import FamilyProfile from './Components/Blocks/FamilyProfile/FamilyProfile'
import Home from './Components/Blocks/Home/Home'

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <Home/> 
    </div>
    </>
  )
}

export default App
