import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetCss from "./assets/styles/ResetCss";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import NewIncome from "./pages/Income/NewIncome";
import Revenue from "./pages/Revenue/Revenue";
import NewExpense from "./pages/Expense/NewExpense";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <AuthContext.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/" element={<Revenue />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/incomes" element={<NewIncome />} />
            <Route path="/expenses" element={<NewExpense />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}
