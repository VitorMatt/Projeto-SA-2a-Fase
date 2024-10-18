import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from '../components/ErrorElement'
import CadastroProfissional from '../pages/CadastroProfissional'
import EscolhaCadastro from '../pages/EscolhaCadastro'
import Inicio from '../pages/Inicio'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import SobreNos from '../pages/SobreNos'


const router = createBrowserRouter([{

    path: '/',
    element: <Inicio />,
    errorElement: <ErrorElement />,
},
{
    path: '/sobrenos',
    element: <SobreNos />
},
{
    path: '/cadastro',
    element: <EscolhaCadastro />
},
{
    path: '/landingpage',
    element: <LandingPage />
},
{
    path:'/login',
    element: <Login />
},
{
    path:'/cadastro-profissional',
    element: <CadastroProfissional />
},
])

export default router