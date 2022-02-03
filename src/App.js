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

const FillingPicker = ({ filling, setFilling }) => {
  const addLayer = (e) => {
    let layerBackgroundColor = '';
    if (e === 'meat') {
      layerBackgroundColor = '#4e1700';
    }
    if (e === 'tomato') {
      layerBackgroundColor = 'red';
    }
    if (e === 'lettuce') {
      layerBackgroundColor = 'green';
    }
    if (e === 'cheese') {
      layerBackgroundColor = 'yellow';
    }
    const newLayer = {
      id: nodeid(),
      type: e,
      backgroundColor: layerBackgroundColor,
    };
    setFilling([newLayer, ...filling]);
  };

  return (
    <>
      <p>Note: Layer will be added to the top</p>
      <div>
        <button
          type="button"
          value="tomato"
          onClick={(e) => addLayer(e.target.value)}
        >
          Add Tomato
        </button>
        <button
          type="button"
          value="lettuce"
          onClick={(e) => addLayer(e.target.value)}
        >
          Add Lettuce
        </button>
        <button
          type="button"
          value="cheese"
          onClick={(e) => addLayer(e.target.value)}
        >
          Add Cheese
        </button>
        <button
          type="button"
          value="meat"
          onClick={(e) => addLayer(e.target.value)}
        >
          Add Meat
        </button>
      </div>
    </>
  );
};

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
