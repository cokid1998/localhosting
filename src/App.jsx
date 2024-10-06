import Layout from "@/components/Layout/Layout";
import Test from "@/page/Test";
import Main from "@/page/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Layout>
  );
}

export default App;
