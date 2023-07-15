import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Signin from "./pages/User/Signin";
import Signup from "./pages/User/Signup";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
