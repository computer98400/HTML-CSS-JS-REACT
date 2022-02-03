import { useRoutes } from 'react-router-dom';
import AfterLogin from '../component/AfterLogin';
import BeforeLogin from '../component/BeforeLogin';
import Login from '../component/Login';
import LoginForm from '../component/LoginForm';
import Main from '../component/Main';

const TestRouter = () => {
    const routes = useRoutes([
        {
            path: '/', element: <Main />,
            children: [
                {index: true, element:<Login />},   //기본값
                {
                    path: '/beforeLogin',element:<Login />
                },
                {
                    path: '/afterLogin',element:<AfterLogin/>
                },
            ],
        },

])
    return routes;   
}
export default TestRouter;