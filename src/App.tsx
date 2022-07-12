import {FC} from 'react'
import Header from './Components/Blocks/Header/Header'
import Sidebar from './Components/Blocks/Sidebar/Sidebar'
import FamilyProfile from './Components/Blocks/FamilyProfile/FamilyProfile'

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <FamilyProfile/>
    </div>
  )
}

export default App
