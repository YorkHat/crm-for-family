import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../../Router/routes'

const AppRouter: FC = () => {
  return (
    <Routes>
      {
        routes.map(route => <Route element={<route.component/>} path={route.path}/>)
      }
    </Routes>
  )
}

export default AppRouter