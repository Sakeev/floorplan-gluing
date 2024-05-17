const config = {
    initialZoom: 1,
    initialPosition: { x: 0, y: 0 },
    layers: [
      {
        id: 'layer1',
        images: [
          { src: '/images/GF-outside.png' },
          { src: '/images/GF.png' }
        ],
        opacity: 0.28,
        position: { x: 0, y: 0 },
        size: { width: 900, height: 900 }
      },
      {
        id: 'layer2',
        images: [
          { src: '/images/1F-outside.png' },
          { src: '/images/1F.png' }
        ],
        opacity: 0.28,
        position: { x: 0, y: 0 },
        size: { width: 900, height: 900 }
      },
      {
        id: 'layer3',
        images: [
          { src: '/images/2F-outside.png' },
          { src: '/images/2F.png' }
        ],
        opacity: 0.28,
        position: { x: 0, y: 0 },
        size: { width: 900, height: 900 }
      }
    ],
    groupOpacity: 0.5,
    groupPosition: { x: 0, y: 0 },
    groupSize: { width: 900, height: 900 },
  };
  
  export default config;