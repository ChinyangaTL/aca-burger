import BaseBread from './components/BaseBread';
import Filling from './components/Filling';
import TopBread from './components/TopBread';

function App() {
  return (
    <div className="App">
      <TopBread />
      <Filling type="Tomato" />
      <Filling type="Meat" />
      <Filling type="Lettuce" />
      <BaseBread />
    </div>
  );
}

export default App;
