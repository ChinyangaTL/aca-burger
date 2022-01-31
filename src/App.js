import './App.css';
import Attribution from './components/Attribution';
import BaseBread from './components/BaseBread';
import Filling from './components/Filling';
import TopBread from './components/TopBread';

function App() {
  return (
    <div className="App">
      <TopBread styling={breadStyles} />
      <Filling type="Tomato" backgroundColor="red" />
      <Filling type="Meat" backgroundColor="#4e1700" />
      <Filling type="Lettuce" backgroundColor="green" />
      <BaseBread styling={breadStyles} />
      <Attribution />
    </div>
  );
}

const breadStyles = {
  backgroundColor: 'rgb(238, 172, 40)',
};

export default App;
