const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}
