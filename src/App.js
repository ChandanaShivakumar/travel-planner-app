import Place from './components/PlaceComponent'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Place title="Hampi" description="HAMPI" image="hampi" ratings="4"/>
      <Place title="Goa" description="GOA" image="goa" ratings="3.9"/>
      <Place title="Singapore" description="PONDICHERRY" image="singapore" ratings="4.2"/>
      <Place title="Thailand" description="THAILAND" image="Thailand" ratings="5"/>
    </div>
  );
}

export default App;
