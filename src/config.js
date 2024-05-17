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
        opacity: false,
        position: { x: 0, y: 0 },
        size: { width: 1000, height: 1000 }
      },
      {
        id: 'layer2',
        images: [
          { src: '/images/1F-outside.png' },
          { src: '/images/1F.png' }
        ],
        opacity: 0.6,
        position: { x: 0, y: 0 },
        size: { width: 1000, height: 1000 }
      },
      {
        id: 'layer3',
        images: [
          { src: '/images/2F-outside.png' },
          { src: '/images/2F.png' }
        ],
        opacity: 0.8,
        position: { x: 0, y: 0 },
        size: { width: 1000, height: 1000 }
      }
    ],
    groupOpacity: 0.5,
    groupPosition: { x: 0, y: 0 },
    groupSize: { width: 1000, height: 1000 },
  };
  
  export default config;