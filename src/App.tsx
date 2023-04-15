import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ecommerce from "./pages/ecommerce";
import TicTacToe from "./pages/tic-tac-toe";
import FileExplorer from "./pages/file-explorer";
import Listing from "./pages/listing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Listing />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="tic-tac-toe" element={<TicTacToe />} />
        <Route path="file-explorer" element={<FileExplorer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
