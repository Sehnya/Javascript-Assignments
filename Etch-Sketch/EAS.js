document.addEventListener('DOMContentLoaded', () => {
const container = document.querySelector('.container');
const controlPanel = document.querySelector('.control-panel');
const colorPalette = document.querySelector('.color-palette');
const clearButton = document.querySelector('.clear-button');
const grid = document.querySelector('.grid');
const header = document.querySelector('h1');
const colorSelectorHeader = colorPalette.querySelector('h4');
const controlPanelHeader = controlPanel.querySelector('h4');
const rainbowButton = colorPalette.getElementsByClassName('color-rainbow')[0];

document.body.style.backgroundColor = '#F1F0E8';
header.style = `
    color: #4C585B;
    font-size: 5em;
    text-align: center;
    font-family: 'Courier New', monospace;
    text-shadow: 0 7px 27px #7E99A3;
    
`;
controlPanelHeader.style = `
    color: #4C585B;
    font-size: 2em;
    text-align: center;
    font-family: 'Courier New', monospace;
    text-shadow: 0 7px 27px #7E99A3;
`;
colorSelectorHeader.style = `
    color: #4C585B;
    font-size: 2em;
    text-align: center;
    font-family: 'Courier New', monospace;
    text-shadow: 0 7px 27px #7E99A3;
`;
container.style = `
    background-color: #E5E1DA;
    display: flex;
    flex-direction: column;
    margin: 5em auto;
    height: 750px;
    width: 750px;
    border-radius: 25px;
    padding: 10px;
    box-shadow: 0 0 25px 10px #7E99A3;
`;
grid.style = `
      background-color: #F1F0E8;
      flex: 1;
      display: grid;
      grid-template-columns: repeat(30, 1fr);
      gris-template-rows: repeat(30, 1fr);
      grid-gap: 1px;
      border-radius: 25px;
      padding: 10px;
`;
controlPanel.style = `
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
colorPalette.style = `
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
rainbowButton.style = `
    background: linear-gradient(90deg,
        rgba(255, 173, 173, 1) 0%,
        rgba(255, 183, 178, 1) 10%,
        rgba(255, 218, 193, 1) 20%,
        rgba(255, 214, 165, 1) 30%,
        rgba(226, 240, 203, 1) 40%,
        rgba(202, 255, 191, 1) 50%,
        rgba(181, 234, 215, 1) 60%,
        rgba(152, 246, 255, 1) 70%,
        rgba(160, 196, 255, 1) 80%,
        rgba(189, 178, 255, 1) 90%,
        rgba(255, 198, 255, 1) 100%
    );
    border-radius: 75%;
    height: 50px;
    width: 50px; 
    cursor: pointer;
`;
 let useRainbowColors = false;
function getRandomGradientColor() {
    const colors = [
      'rgba(255, 173, 173, 1)',
      'rgba(255, 183, 178, 1)',
      'rgba(255, 218, 193, 1)',
      'rgba(255, 214, 165, 1)',
      'rgba(226, 240, 203, 1)',
      'rgba(202, 255, 191, 1)',
      'rgba(181, 234, 215, 1)',
      'rgba(152, 246, 255, 1)',
      'rgba(160, 196, 255, 1)',
      'rgba(189, 178, 255, 1)',
      'rgba(255, 198, 255, 1)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  rainbowButton.addEventListener('click', () => {  
    useRainbowColors = !useRainbowColors;  
   }); 

grid.addEventListener('mouseover', (e) => {
   if (e.target.style.backgroundColor === '') {  
    if (useRainbowColors) {  
      e.target.style.backgroundColor = getRandomGradientColor();  
    } else {  
      e.target.style.backgroundColor = '#B3C8CF';  
    }  
   }  
  });  

    for (let i = 0; i < 900; i++) {
        const gridItem = document.createElement('div');
        grid.appendChild(gridItem);
    }
    clearButton.addEventListener('click', () => {
        const gridItems = grid.querySelectorAll('div');
        gridItems.forEach(item => {
          item.style.backgroundColor = '';
        });
      });
});