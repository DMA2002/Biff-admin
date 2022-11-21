import './App.css';
import Home from './Pages/Home/Home';
import List from '../src/Component/List/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorie from './Component/Categorie/Categorie';
import Client from './Component/Client/Client';
import Commande from './Component/Commande/Commande';
import Modifi from './Pages/Modifi/Modifi';
import Nouveau_tableau from './Pages/Nouveau_tableau/Nouveau_tableau';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route element={<Home />}>
            <Route path='/list' element={<List/>}/>
            <Route path='/categorie' element={<Categorie/>}/>
            <Route path='/client' element={<Client/>}/>
            <Route path='/commande' element={<Commande/>}/>
          </Route>
          <Route path='/modifi' element={<Modifi/>}/>
          <Route path='/nouveau' element={<Nouveau_tableau/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
