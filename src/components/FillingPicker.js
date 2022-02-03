import React from 'react';
import nodeid from 'node-id';

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
export default FillingPicker;
