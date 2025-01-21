import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserList from './components/UserList'
import ChangeUserName from './components/ChangeUserName'

function App() {
  

  return (
    <Provider store={store}>
        <Users></Users>
    </Provider>
  )
}

export const Users: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<ChangeUserName />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
