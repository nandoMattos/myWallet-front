import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetCss from "./assets/styles/ResetCss";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Home from "./pages/Home/Home";
import Expenses from "./pages/Expenses/Expenses";
import Income from "./pages/Income/Income";

export default function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/home" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
