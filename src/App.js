import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Authorization/SignIn";
import SignUp from "./pages/Authorization/SignUp";
import ResetCss from "./assets/styles/ResetCss";
import GlobalStyle from "./assets/styles/GlobalStyle";

export default function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
