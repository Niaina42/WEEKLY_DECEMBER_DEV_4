import "./assets/css/style.css";
import Router from "./router/Router";
import { AuthProvider } from "./services/context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
