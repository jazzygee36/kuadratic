import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/landingPage";
import Tracks from "./components/pages/trackPage";
import Report from "./components/pages/reports";
import Profile from "./components/pages/profiles";
import Messages from "./components/pages/messages";
import Notifications from "./components/pages/notifications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/report" element={<Report />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
