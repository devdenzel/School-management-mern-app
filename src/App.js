import Signup from "./pages/Signup/Signup"
import { AuthProvider } from "./contexts/AuthContext";

function App(){
  return (
    <AuthProvider>
      <Signup/>
    </AuthProvider>
  )
  
}
export default App;