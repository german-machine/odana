import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUpBuyer from './pages/SignUpBuyer'
import SignUpSeller from './pages/SignUpSeller'
import ChooseUser from './pages/ChooseUser'
import GetStarted from './pages/GetStarted'
import { LoadingProvider } from './components/LoadingContext'

function App() {

  return (
    <LoadingProvider>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/get-started' element={<GetStarted />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up-buyer' element={<SignUpBuyer />} />
            <Route path='/sign-up-seller' element={<SignUpSeller />} />
            <Route path='/signup-as' element={<ChooseUser />} />
        </Routes>          
    </LoadingProvider>
  )
}

export default App
