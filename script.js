const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

const colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', () => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    colors[index].classList.add('selected');
  });
}
