import logo from './logo.svg';
import './App.css';


import { Usuario } from './componentes/Usuario';
import { Imgmemes } from './componentes/Imgmemes';

function App() {
  return (
    <div className="App">


      <Imgmemes />

      {/* 
      <Usuario nombre="María" cargo="gerente general" conoceme="cv de María" color="primary" imagen='imagen.jpg'/>
      <Usuario nombre="Luis" cargo="sub-gerente" conoceme="cv de Luis" color="secondary" imagen='imagen1.jpg'/>
      <Usuario nombre="Pedro" cargo="gerente general de región" conoceme="cv de Pedro"  color="danger" imagen='imagen2.jpg'/>
      <Usuario nombre="Martín" cargo="CEO" conoceme="cv de Martín"  color="warning" imagen='imagen3.jpg'/> 
      */}
    </div>
  );
}

export default App;
