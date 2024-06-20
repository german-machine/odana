import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ChooseUser from './pages/ChooseUser'

function App() {

  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/signup-as' element={<ChooseUser />} />
    </Routes>
  )
}

export default App
