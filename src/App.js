import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import ClientPage from "./pages/ClientPage";
import ContactPage from "./pages/ContactPage";
import DomainHostingPage from "./pages/DomainHostingPage";
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage";
import FacebookAdvertisingPage from "./pages/FacebookAdvertisingPage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import SocialMediaManagementPage from "./pages/SocialMediaManagementPage";
import SuperMailingSolutionsPage from "./pages/SuperMailingSolutionsPage";
import GoogleWorkspacePage from "./pages/GoogleWorkspacePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/services/domain&hosting"
            element={<DomainHostingPage />}
          />
          <Route
            path="/services/websitedevelopment"
            element={<WebsiteDevelopmentPage />}
          />
          <Route
            path="/services/facebookadvertising"
            element={<FacebookAdvertisingPage />}
          />
          <Route path="/services/googleads" element={<GoogleAdsPage />} />
          <Route
            path="/services/socialmediamanagement"
            element={<SocialMediaManagementPage />}
          />
          <Route
            path="/services/supermailingsolutions"
            element={<SuperMailingSolutionsPage />}
          />
          <Route
            path="/services/googleworkspace"
            element={<GoogleWorkspacePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
