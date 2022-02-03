import { useEffect, useState } from 'react';
import './App.css';
import Attribution from './components/Attribution';
import BaseBread from './components/BaseBread';
import Filling from './components/Filling';
import TopBread from './components/TopBread';
import { motion } from 'framer-motion';
import nodeid from 'node-id';
import FillingPicker from './components/FillingPicker';

const initialFilling = [
  { id: nodeid(), type: 'Tomato', backgroundColor: 'red' },
  { id: nodeid(), type: 'Meat', backgroundColor: '#4e1700' },
  { id: nodeid(), type: 'Lettuce', backgroundColor: 'green' },
];

function App() {
  const [filling, setFilling] = useState(initialFilling);

  useEffect(() => {
    console.log(filling);
  }, [filling]);

  const removeLayer = (id) => {
    setFilling(filling.filter((layer) => layer.id !== id));
  };

  return (
    <motion.div className="App">
      <TopBread styling={breadStyles} />
      {filling.map((layer) => {
        const { id, type, backgroundColor } = layer;
        return (
          <Filling
            key={id}
            id={id}
            type={type}
            backgroundColor={backgroundColor}
            removeLayer={removeLayer}
          />
        );
      })}
      <BaseBread styling={breadStyles} />
      <Attribution />
      <FillingPicker filling={filling} setFilling={setFilling} />
    </motion.div>
  );
}

const breadStyles = {
  backgroundColor: 'rgb(238, 172, 40)',
};

export default App;
