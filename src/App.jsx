import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Test from "@/page/Test";
import Main from "@/page/Main";
import Hello from "@/page/Hello";
import CafeList from "@/page/CafeList";
import EventTest from "@/page/test/EventTest";
import Signup from "@/page/Signup";
import Mypage from "@/page/Mypage";
import DistanceCafeList from "@/page/DistanceCafeList";
import Rank from "@/components/Main/Rank";
import CafeDetail from "@/page/CafeDetail";
import Login from "@/page/Login";
import FindId from "@/page/FindId";
import FindPw from "@/page/FindPw";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/event" element={<EventTest />} />
        <Route path="/cafeList" element={<CafeList />} />
        <Route path="/cafe/:id" element={<CafeDetail />} />
        {/* <Route path="/join" element={<Join />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/distance" element={<DistanceCafeList />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-id" element={<FindId />} />
        <Route path="/find-password" element={<FindPw />} />
      </Routes>
    </Layout>
  );
}

// 라우팅을 위한 코드들입니다.
// Route라는 컴포넌트의 props에 path는 url을 지정, element는 path로 지정한 주소에 맞는 컴포넌트를 보여줍니다.
// (꺽쇠안에 path, element같은걸 props라고 부름)
// 예를 들어 <Route path="/hello" element={<Hello />} />를 추가하면
// @/page/Hello경로의 파일을 화면에 보여줍니다.
// <Route path="/hello" element={<Hello />} />를 위 코드에 추가하고 아래 주소로 방문해보세요!
// http://localhost:5173/hello
// 🚨<주의>🚨 Route는 Routes안에 넣어줘야합니다.

export default App;
