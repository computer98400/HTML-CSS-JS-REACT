import { Outlet } from 'react-router-dom';


export default function BeforeLogin() {
    return (
        <>
            <span>로그인전 페이지 확인용 컴포넌트</span>
            <Outlet />
        </>
    )


}