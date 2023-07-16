import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Signin from "./pages/User/Signin";
import Signup from "./pages/User/Signup";
import Faq from "./pages/User/Faq";

import AdminLayout from "./Layout/AdminLayout";
import Faqs from "./pages/admin/Faqs";
import Races from "./pages/admin/Races";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="compte" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="faqs" element={<Faqs />} />
          <Route path="races" element={<Races />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
