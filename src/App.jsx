import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Main from "@/page/Main";
import CafeList from "@/page/CafeList";
import Mypage from "@/page/Mypage";
import EditMypage from "@/page/EditMypage";
import DistanceCafeList from "@/page/DistanceCafeList";
import Rank from "@/components/Main/Rank";
import CafeDetail from "@/page/CafeDetail";
import ManagerCafeList from "@/page/ManagerCafeList";
import CafeRegist from "@/page/CafeRegist";
import CafeStats from "@/page/CafeStats";
import CommentManage from "@/page/CommentManage";
import EditProfile from "@/page/EditMypage";
import Purchase from "@/page/Purchase";
/* Auth */
import Login from "@/page/auth/Login";
import FindId from "@/page/auth/FindId";
import FindPw from "@/page/auth/FindPw";
import FindIDResult from "@/page/auth/IDResult";
import FindPWResult from "@/page/auth/PWResult";
import Signup from "@/page/auth/Signup";
import Review from "@/page/Review";

/* React-query dev tools*/
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/* react-cookie */
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        {/* The rest of your application */}
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cafeList" element={<CafeList />} />
            <Route path="/cafe/:id" element={<CafeDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<EditMypage />} />
            <Route path="/mypage-cafe" element={<Mypage />} />
            <Route path="/distance" element={<DistanceCafeList />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/login" element={<Login />} />
            <Route path="/find-id" element={<FindId />} />
            <Route path="/find-password" element={<FindPw />} />
            <Route path="/managerCafeList" element={<ManagerCafeList />} />
            <Route path="/find-id-result" element={<FindIDResult />} />
            <Route path="/find-pw-result" element={<FindPWResult />} />
            <Route path="/cafe-regist" element={<CafeRegist />} />
            <Route path="/cafeStats" element={<CafeStats />} />
            <Route path="/commentManage" element={<CommentManage />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/review" element={<Review />} />
            <Route path="/purchase" element={<Purchase />} />
          </Routes>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </CookiesProvider>
    </QueryClientProvider>
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
