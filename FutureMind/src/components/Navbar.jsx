import { useContext, useEffect } from 'react';
import './CSS/Navbar.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Navbar() {

  const { user } = useContext(GlobalContext);
  const userAux = {...user};

  useEffect(() => {

    userAux.profissional = user.profissional;
    userAux.logado = user.logado;
  }, [user])
  return (
    <nav className='navbar'>
      <img src='logo (2).png' className='logo-nav'/>
      <div className='Links'>
        <Link className='Link' to='/'>Início</Link>
        <Link className='Link' to='/sobrenos'>Sobre nós</Link>
        <div className='input-container'>
          <input type="text" className='input-nav' placeholder='Busca de ajuda e apoio...' />
          <img src="lupa.svg" alt="ícone de busca" className='img-navBar' />
        </div>

        {
          !userAux.logado
          ?
          (

            <Link to='/login' className='btn2'>Entrar</Link>
          )
          :
          (
            <Link to={ userAux.profissional ? '/perfilprofissional' : '/perfil-paciente'} className='btn2'>
            <img src="iconuser.svg" alt="" className="user" />
            </Link>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;