import './App.css';
import Main from './pages/Main/index';
import Error from './pages/Erro/error'
import Carousel from './components/Carousel/index';
import Card from './components/Card/index';
import Header from './components/Header/index';
import Login from './pages/telaLogin/login'
import Cadastro from './pages/telaCadastro/cadastro';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRouter from './protectedRouter';
import Gender from './pages/Gender';

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>

            <Route element={<ProtectedRouter/>}> {/* Vai puxar a autenticação do usuário*/}
            <Route path='/' element={<Main/>} />
            <Route path='/Carousel' element={<Carousel/>} />
            <Route path='/Card' element={<Card/>} />
            <Route path='/Error'element={<Error/>} />
            <Route path='/Gender'element={<Gender/>} />
            </Route>

            <Route path='/Login' element={<Login/>} />
            <Route path='/Cadastro' element={<Cadastro/>} />

          </Routes>
      </BrowserRouter>




    // <div className="App">
    //   <Main/>
    // </div>
  );

}

export default App;
