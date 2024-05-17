import React, { useState } from 'react';
import Layer from './components/Layer'
import config from './config';

const App = () => {
  const [activeLayer, setActiveLayer] = useState(1);

  const handleLayerChange = (floor) => {
    
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
      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 100, zIndex: 5}}>
        <button onClick={() => setActiveLayer(2)}>2F</button>
        <button onClick={() => setActiveLayer(1)}>1F</button>
        <button onClick={() => setActiveLayer(0)}>GF</button>
      </div>
    </div>
  );
};

export default App;
