import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PagIndex } from './pages/index'
import { CreateUser } from './pages/authentication/createUserPage';
import { Login } from './pages/authentication/loginPage';
import { Home } from './pages/home';
import { Agendamentos } from './pages/meusAgendamentos/meusAgendamentosPage';
import { Perfil } from './pages/perfil/perfilPage';
import { SobreOSite } from './pages/sobreOSite';
import { ComoFunciona } from './pages/comoFunciona';

export function Rotas() {
    return(
        <>
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={PagIndex} />
          <Route path='/sobre-o-site' Component={SobreOSite} />
          <Route path='/como-funciona' Component={ComoFunciona} />
          <Route path='/create' Component={CreateUser} />
          <Route path='/login' Component={Login}/>
          <Route path='/home' Component={Home}/>
          <Route path='/agendamentos' Component={Agendamentos}/>
          <Route path='/perfil' Component={Perfil}/>
        </Routes>
      </BrowserRouter>
        </>
    )
}