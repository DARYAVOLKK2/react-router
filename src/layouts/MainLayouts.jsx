import {Outlet} from 'react-router-dom'
import Menu from '../components/Menu'

function MainLayouts() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayouts
