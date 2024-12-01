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
import PDFToJPGConverter from "./components/OurCovertSection/PDFToJPGConverter";
import SvgToPngApp from "./components/OurCovertSection/SVGToPNGConverter";
import TextToPDF from "./components/OurCovertSection/TextToPDF";
import TextToWord from "./components/OurCovertSection/TextToWord";
import TextToHTML from "./components/OurCovertSection/TextToHtml";
import TextToCSV from "./components/OurCovertSection/TextToCSV";
import CsvToJson from "./components/OurCovertSection/CsvToJSON";

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
          <Route path="/pdf_to_jpg" element={<PDFToJPGConverter />} />
          <Route path="/svg_to_png" element={<SvgToPngApp />} />
          <Route path="/text_to_pdf" element={<TextToPDF />} />
          <Route path="/text_to_word" element={<TextToWord />} />
          <Route path="/text_to_html" element={<TextToHTML />} />
          <Route path="/text_to_csv" element={<TextToCSV />} />
          <Route path="/csv_to_json" element={<CsvToJson />} />
          <Route path="/editor" element={<Text_Field />} />
          {/* JPGToPNGConverter */}
          {/* PDFToJPGConverter */}
          {/* TextToWord */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
