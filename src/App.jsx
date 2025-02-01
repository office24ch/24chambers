import "./App.css"; // CSS

// import libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Pages
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";
import Specialisation from "./pages/Specialisation/Specialisation";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound/NotFound";

// import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Disclaimer from "./components/Disclaimer/Disclaimer";

function App() {
  return (
    <div className="app_container">
      <Disclaimer />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="/specialisation" element={<Specialisation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
