import { useState } from 'react';
import Layer from './components/Layer'
import config from './config';

const App = () => {
  const [activeLayer, setActiveLayer] = useState(1);

  const handleLayerChange = (direction) => {
    setActiveLayer((prevLayer) => {
      const newLayer = prevLayer + direction;
      if (newLayer < 0) return config.layers.length - 1;
      if (newLayer >= config.layers.length) return 0;
      return newLayer;
    });
  };
  console.log(activeLayer);

  return (
    <div className='app'>
      <div className="canvas" style={{
        position: 'relative',
        width: `${config.groupSize.width}px`,
        height: `${config.groupSize.height}px`,
        transform: `scale(${config.initialZoom})`,
        transformOrigin: 'top left',
        left: `${config.groupPosition.x}px`,
        top: `${config.groupPosition.y}px`
      }}>
        {config.layers.map((layer, index) => (
          index <= activeLayer && (
          <Layer
            key={layer.id}
            layer={layer}
            index={index}
            isVisible={index <= activeLayer}
            isCurrent={index === activeLayer}
          />
          )
        ))}
      </div>
      <div style={{ position: 'absolute', top: 10, left: 10 }}>
        <button onClick={() => handleLayerChange(-1)} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={() => handleLayerChange(1)}>Next</button>
      </div>
    </div>

  );
};

export default App;