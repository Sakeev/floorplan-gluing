import React, { useState } from 'react';
import Layer from './components/Layer'
import config from './config';

const App = () => {
  const [activeLayer, setActiveLayer] = useState(1);

  const handleLayerChange = (floor) => {
    setActiveLayer(floor);
  };

  return (
    <div className='app'>
      <div className="canvas">
        
            <Layer
              key={config.layers[activeLayer].id}
              layer={config.layers[activeLayer]}
              index={activeLayer}
            />
         
      </div>
      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 100}}>
        <button onClick={() => handleLayerChange(2)}>2F</button>
        <button onClick={() => handleLayerChange(1)}>1F</button>
        <button onClick={() => handleLayerChange(0)}>GF</button>
      </div>
    </div>
  );
};

export default App;
