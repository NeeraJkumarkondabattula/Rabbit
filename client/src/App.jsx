import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Topbar from "./components/Layout/Topbar";
import Header from "./components/Common/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
