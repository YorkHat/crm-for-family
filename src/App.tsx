import { FC } from 'react'
import Header from './Components/Blocks/Header/Header'
import Sidebar from './Components/Blocks/Sidebar/Sidebar'
import AppRouter from './Components/Blocks/AppRouter/AppRouter'

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <AppRouter/>
    </div>
  )
}

export default App
