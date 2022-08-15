import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./elements/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
