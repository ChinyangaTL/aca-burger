import { useEffect, useState } from 'react';
import './App.css';
import Attribution from './components/Attribution';
import BaseBread from './components/BaseBread';
import Filling from './components/Filling';
import TopBread from './components/TopBread';
import { motion } from 'framer-motion';
import nodeid from 'node-id';

const initialFilling = [
  { id: nodeid(), type: 'Tomato', backgroundColor: 'red' },
  { id: nodeid(), type: 'Meat', backgroundColor: '#4e1700' },
  { id: nodeid(), type: 'Lettuce', backgroundColor: 'green' },
];

const FillingPicker = () => {
  return <div>filling picker</div>;
};

function App() {
  const [filling, setFilling] = useState(initialFilling);
  useEffect(() => {
    console.log(filling);
  });
  return (
    <motion.div className="App">
      <TopBread styling={breadStyles} />
      {filling.map((layer) => {
        const { id, type, backgroundColor } = layer;
        return (
          <Filling key={id} type={type} backgroundColor={backgroundColor} />
        );
      })}
      <BaseBread styling={breadStyles} />
      <Attribution />
      <FillingPicker />
    </motion.div>
  );
}

const breadStyles = {
  backgroundColor: 'rgb(238, 172, 40)',
};

export default App;
