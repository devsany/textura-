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
import CsvToHtml from "./components/OurCovertSection/CsvToHtml";
import CsvToWord from "./components/OurCovertSection/CsvToWord";
import CsvToExcel from "./components/OurCovertSection/CsvToExcell";
import JsonToExcel from "./components/OurCovertSection/JsonToExcell";
import JsonToWord from "./components/OurCovertSection/JsonToWord";
import PptxToWord from "./components/OurCovertSection/PowerPointToWord";
import PowerPointToWord from "./components/OurCovertSection/PowerPointToWord";
import ExcelToCSV from "./components/OurCovertSection/ExcelToCSV";
import ExcelToImage from "./components/OurCovertSection/ExcelToImage";
// import ExcelToJSON from "./components/OurCovertSection/ExcelToJSON";
import ExcelToHTML from "./components/OurCovertSection/ExcelToHtml";
import ExcellToWord from "./components/OurCovertSection/ExcellToWord";
import ExcelToPDF from "./components/OurCovertSection/ExcelToPDF";
import WordToPDF from "./components/OurCovertSection/WordToPDF";
import WordToExcel from "./components/OurCovertSection/WordToExcel";
import ExcelToEditableJSON from "./components/OurCovertSection/ExcelToJSON";
import CsvToPDF from "./components/OurCovertSection/CsvToPDF";
import WordToImage from "./components/OurCovertSection/WordToImage";
import AboutPage from "./components/possible_list/AboutPage";
import Contact from "./components/possible_list/Contact";

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
          <Route path="/csv_to_html" element={<CsvToHtml />} />
          <Route path="/csv_to_word" element={<CsvToWord />} />
          <Route path="/csv_to_excell" element={<CsvToExcel />} />
          <Route path="/json_to_excell" element={<JsonToExcel />} />
          <Route path="/json_to_word" element={<JsonToWord />} />
          <Route path="/pptx_to_word" element={<PowerPointToWord />} />
          <Route path="/excel_to_csv" element={<ExcelToCSV />} />
          <Route path="/excel_to_json" element={<ExcelToEditableJSON />} />
          <Route path="/excel_to_image" element={<ExcelToImage />} />
          <Route path="/excel_to_html" element={<ExcelToHTML />} />
          <Route path="/excel_to_word" element={<ExcellToWord />} />
          <Route path="/excel_to_pdf" element={<ExcelToPDF />} />
          <Route path="/word_to_pdf" element={<WordToPDF />} />
          <Route path="/word_to_excel" element={<WordToExcel />} />
          <Route path="/csv_to_pdf" element={<CsvToPDF />} />
          <Route path="/word_to_image" element={<WordToImage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editor" element={<Text_Field />} />
          {/* JPGToPNGConverter */}
          {/* PDFToJPGConverter */}
          {/* TextToWord */}
          {/* PptxToWord */}
          {/* ExcelToJSON */}
          {/* ExcelToHTML */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
