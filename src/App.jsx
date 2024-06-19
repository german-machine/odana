import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ChooseUser from './pages/ChooseUser'

function App() {

  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/signup-as' element={<ChooseUser />} />
    </Routes>
  )
}

export default App
