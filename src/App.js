import { useState } from 'react';
import './App.css';
import Attribution from './components/Attribution';
import BaseBread from './components/BaseBread';
import Filling from './components/Filling';
import TopBread from './components/TopBread';
import { motion } from 'framer-motion';

const initialFilling = [
  { type: 'Tomato', backgroundColor: 'red' },
  { type: 'Meat', backgroundColor: '#4e1700' },
  { type: 'Lettuce', backgroundColor: 'green' },
];

function App() {
  const [filling, setFilling] = useState(initialFilling);
  return (
    <motion.div className="App">
      <TopBread styling={breadStyles} />
      {filling.map((layer) => {
        const { type, backgroundColor } = layer;
        return <Filling type={type} backgroundColor={backgroundColor} />;
      })}
      <BaseBread styling={breadStyles} />
      <Attribution />
    </motion.div>
  );
}

const breadStyles = {
  backgroundColor: 'rgb(238, 172, 40)',
};

export default App;
