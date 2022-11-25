import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
