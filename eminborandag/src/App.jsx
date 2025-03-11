import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import AdminPanel from "./adminpanel/AdminPanel";
import AdminKitapEkleme from "./adminpanel/AdminKitapEkleme";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/adminpanel/kitap-ekle" element={<AdminKitapEkleme />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
