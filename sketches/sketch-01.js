const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black'
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005
    context.strokeStyle = 'white'
    context.createLinearGradient(20,0, 220,0);

    const w = width * 0.1
    const h = height * 0.1
    const gap = width * 0.04
    const ix = width * 0.17
    const iy = height * 0.17

    const off = width * 0.02
    let x, y

    const gradient = context.createLinearGradient(0,0, 1080,1080)
    gradient.addColorStop(0, '#000000')
    gradient.addColorStop(1, '#ffffff')

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i
        y = iy + (h + gap) * j

        context.beginPath()
        context.rect(x, y, w, h)
        context.strokeStyle = gradient;
        context.stroke()

        let drawRectangles = (a, b) => {
          context.beginPath()
          context.rect(x + off * a, y + off * a, w - off * b, h - off * b)
          context.stroke()
        }

        if (Math.random() < 0.5) {
          if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
              if (Math.random() < 0.5) {
                drawRectangles(2, 4)
              }
              drawRectangles(1.5, 3)
            }
            drawRectangles(1, 2)
          }
          drawRectangles(0.5, 1)
          }
        }
      }
    };
  };

canvasSketch(sketch, settings);
