import { useSession } from './hooks/useSession'
import AddNewPatient from './pages/AddNewPatient'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  const session = useSession()

  return (
    <div>
      <Navbar />
      {!session ? <Login /> : <div>Your app</div>}
      <AddNewPatient />
    </div>
  )
}

export default App
