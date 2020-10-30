const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
  stopAutomatic
  // console.log(event.target.id)
  turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
  const colors = ['red', 'yellow', 'green'];
  const color = colors[ colorIndex ];
  turnOn[color]();
  nextIndex();
}

const stopAutomatic = () => {
  clearInterval ( intervalId );
}

const turnOn = {
  'red': () => img.src = './public/images/vermelho.png',
  'yellow': () => img.src = './public/images/amarelo.png',
  'green': () => img.src = './public/images/verde.png',
  'automatic': () => intervalId = setInterval(changeColor, 2000)
}

buttons.addEventListener('click', trafficLight);