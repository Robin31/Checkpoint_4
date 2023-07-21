import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLayout from "./Layout/UserLayout";
import Acceuil from "./pages/User/Acceuil";
import Signin from "./pages/User/Signin";
import Signup from "./pages/User/Signup";
import Faq from "./pages/User/Faq";
import Chien from "./pages/User/Chien";
import ChienSolo from "./pages/User/ChienSolo";
import Localisation from "./pages/User/Localisation";
import Profil from "./pages/User/Profil";

import AdminLayout from "./Layout/AdminLayout";
import Faqs from "./pages/admin/Faqs";
import Races from "./pages/admin/Races";
import Chiens from "./pages/admin/Chiens";

import Error from "./Error";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Acceuil />} />
          <Route path="compte" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="faq" element={<Faq />} />
          <Route path="chiens" element={<Chien />} />
          <Route path="chiens/:id" element={<ChienSolo />} />
          <Route path="localisation" element={<Localisation />} />
          <Route path="profil" element={<Profil />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="faqs" element={<Faqs />} />
          <Route path="chiens" element={<Chiens />} />
          <Route path="races" element={<Races />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
