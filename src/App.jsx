import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayouts from './layouts/MainLayouts'
import Coursers from './components/Coursers'
import SingleCoursers from './components/SingleCoursers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="coursers" element={<Coursers />} />
          <Route path="coursers/:coursersSlug" element={<SingleCoursers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
