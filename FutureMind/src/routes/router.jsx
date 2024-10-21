import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from '../components/ErrorElement'
import CadastroProfissional from '../pages/CadastroProfissional'
import EscolhaCadastro from '../pages/EscolhaCadastro'
import Inicio from '../pages/Inicio'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import SobreNos from '../pages/SobreNos'
import Termos from '../pages/Termos'
import CadastroFormado from '../components/CadastroFormado1'
import CadastroProfissionais6 from '../components/CadastroProfissinais6'
import CadastroProfissionais7 from '../components/CadastroProfissionais7'
import CadastroProfissionais4 from '../components/CadastroProfissionais4'
import CadastroProfissionais3 from '../components/CadastroProfissionais3'
import CadastroEstagiario2 from '../components/CadastroEstagiario2'
import CadastroProfissionais5 from '../components/CadastroProfissionais5'
import CadastroSelecao1 from '../components/CadastroSelecao1'


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
{
    path: '/termos',
    element: <Termos />
<<<<<<< HEAD
},
{
    path: '/cadastro1',
    element: <CadastroSelecao1 />
},
{
    path:'/cadastroF2',
    element: <CadastroFormado />
},
{
    path:'/cadastroE2',
    element: <CadastroEstagiario2 />
},
{
    path:'/cadastroP3',
    element: <CadastroProfissionais3 />
},
{
    path:'/cadastroP4',
    element: <CadastroProfissionais4/>
},
{
    path:'/cadastroP5',
    element: <CadastroProfissionais5 />
},
{
    path:'/cadastroP6',
    element: <CadastroProfissionais6 />
},
{
    path:'/cadastroP7',
    element: <CadastroProfissionais7 />
},

])

=======
}
])
>>>>>>> d65a3cc25a0f5cdf08e7166aacb84b1fc2fbc019

export default router