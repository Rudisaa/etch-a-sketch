const gridSlider = document.querySelector('.grid-size-slider');
const gridSize = document.querySelector('.grid-size');
const colorPick = document.querySelector('.color-selector');
gridSlider.addEventListener('input', gridCreate);



const defaultGridCSS = 16;
const defaultDivAmount = 256;

defaultState();





//default grid 
function defaultState() {
    //
    const defaultGridSize =  document.querySelector(':root'); // grabbing :root in css file to change the row and column variables
    const gridContainer = document.querySelector('.grid'); // grabbing container to create tiles inside of it
    const slider = document.querySelector('.grid-size-slider');
    const defaultColorMode = document.querySelector('.color-mode');

    defaultColorMode.classList.add('active');
    
    
    defaultGridSize.style.setProperty('--grid-col', defaultGridCSS) // setting grid-columns to 16
    defaultGridSize.style.setProperty('--grid-row', defaultGridCSS) // setting grid-rows to 16;




   
    // loop through and create default div amount
    for(let i = 0; i < defaultDivAmount; i++) {
        const defaultGridTiles = document.createElement('div');
        gridContainer.append(defaultGridTiles);
        defaultGridTiles.classList.add('grid-tile');
    }

    //event listener to see when user changes grid-size
    slider.addEventListener('input', () => {


        const totalTiles = document.querySelectorAll('.grid-tile');
        let createTileNumbers = document.querySelector('.grid-size-slider').value;
    

        if (createTileNumbers > totalTiles || createTileNumbers < totalTiles) {
            totalTiles.forEach(tiles => {
                tiles.remove();
            })
        }

        gridCreate(createTileNumbers, createTileNumbers);

    });
}

//create grid on user click
function gridCreate(col, row) {
    const gridContainer = document.querySelector('.grid'); // grabbing container to create tiles inside of it
    const gridColRow = document.querySelector(':root');
    const gridScaleText = document.querySelector('.grid-size');
    gridColRow.style.setProperty('--grid-col', col) // setting grid-columns to 16
    gridColRow.style.setProperty('--grid-row', row) // setting grid-rows to 16;s

    gridScaleText.textContent = col + ' x ' + row;

    for(let i = 0; i < col*row; i++) {
        const defaultGridTiles = document.createElement('div');
        gridContainer.append(defaultGridTiles);
        defaultGridTiles.classList.add('grid-tile');
    }
}

function settingChange(buttonPressed) {
    const buttons = document.querySelectorAll('.setting-button');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    buttonPressed.classList.add('active');
}


let mouseDown = false;
const isColorButtonActive = document.querySelector('.color-mode')
const isRainbowButtonActive = document.querySelector('.rainbow-mode');
const isEraserButtonActive = document.querySelector('.eraser-mode');
const gridContainer = document.querySelector('.grid')
const rainbowColorList = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

gridContainer.addEventListener('mouseover', function(e) {

    const gridtile = document.querySelector('.grid-tile')
    const colorChoice = document.querySelector('.color-selector').value;
    

    if(isColorButtonActive.classList.contains('active')) {
        
        if(e.target.matches(".grid-tile") && mouseDown === true) {
            //changes the background color of the tile the user hovers over
           e.target.style.setProperty('--grid-color-change', colorChoice);
            console.log('color-mode')
            return;
        }
    } else if(isRainbowButtonActive.classList.contains('active')) {
        if(e.target.matches('.grid-tile') && mouseDown === true) {
            console.log('rainbow mode')
            return;
        }
    } else if(isEraserButtonActive.classList.contains('active')) {
        if(e.target.matches('.grid-tile') && mouseDown === true) {
            e.target.style.setProperty('--grid-color-change', '#FFFFFF')
            console.log('eraser')
            
            return;
        }
    }
    
            
})

document.addEventListener('mousedown', function() {
    mouseDown = true;
    console.log('the mouse is down');
})

document.addEventListener('mouseup', function() {
    mouseDown = false;
    console.log('the mouse is up')
})

