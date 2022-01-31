import './App.css';
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
    </div>
  );
}

const breadStyles = {
  backgroundColor: 'rgb(238, 172, 40)',
};

export default App;
