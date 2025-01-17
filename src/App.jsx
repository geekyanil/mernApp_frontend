import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Footer from './components/footer/Footer'
import { Logout } from './pages/Logout'
import { AdminLayout } from './components/layouts/Admin-Layout'
import { AdminUser } from './components/layouts/Admin-users'
import { AdminContacts } from './components/layouts/Admin-contacts'
import { AdminUpdate } from './components/layouts/Admin-Update'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />

          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUser />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='users/:id/edit' element={<AdminUpdate />} />
          </Route>


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
