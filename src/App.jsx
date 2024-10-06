import "./App.css";
import Test from "@/page/Test";
import Main from "@/page/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
