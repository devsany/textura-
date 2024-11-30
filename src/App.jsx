import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHome from "./components/MainHome";
import JpgToText from "./components/JpgToText";
import Header from "./components/navigationbar/Header";
import Text_Field from "./components/Text_Field";
import JPGToPNGConverter from "./components/OurCovertSection/JpgToPng";
 

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
        <Header />

        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/jpg_to_text" element={<JpgToText />} />
          <Route path="/jpg_to_png" element={<JPGToPNGConverter />} />
          <Route path="/editor" element={<Text_Field />} />
          {/* JPGToPNGConverter */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
