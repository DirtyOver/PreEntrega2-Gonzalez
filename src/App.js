import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailsItem from './components/components item/Detailsitem';


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ContainerCardItems />} />
          <Route path='/item/:id' element={ <DetailsItem />} />
          <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
        </Routes>      
      </BrowserRouter>      
  );
}

export default App;
