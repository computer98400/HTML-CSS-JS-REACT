import { Link, Outlet } from 'react-router-dom';

export default function AfterLogin() {
    return (
        <>
            <span>로그인 성공 후 페이지 확인용</span>
            




            <p><Link to="/">홈으로 이동</Link></p>
            <Outlet />
        </>

    )


}