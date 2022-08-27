
//selecting slider for grid size
const gridSlider = document.querySelector('.grid-size-slider');
//selecting grid-size to change number texts
const gridSize = document.querySelector('.grid-size');
//selecting color selector
const colorPick = document.querySelector('.color-selector');
gridSlider.addEventListener('input', gridCreate);
//setting default size for the grid
const defaultGridCSS = 16;
//setting default amount of divs
const defaultDivAmount = 256;

//running default state function
defaultState();

//default grid 
function defaultState() {
    const defaultGridSize =  document.querySelector(':root'); // grabbing :root in css file to change the row and column variables
    const gridContainer = document.querySelector('.grid'); // grabbing container to create tiles inside of it
    const slider = document.querySelector('.grid-size-slider'); // grabbing slider for grid size
    const defaultColorMode = document.querySelector('.color-mode'); // grabbing button for default state
    defaultColorMode.classList.add('active'); // setting color-mode button to default active button
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
        const totalTiles = document.querySelectorAll('.grid-tile'); // getting total amount of tiles
        let createTileNumbers = document.querySelector('.grid-size-slider').value; // setting createTileBumers to the value of the slider
        
        // if create tile numbers is less than or greater than total tiles then remove all the tiles 
        if (createTileNumbers > totalTiles || createTileNumbers < totalTiles) {
            totalTiles.forEach(tiles => {
                tiles.remove();
            })
        }
        
        // create the number of tiles selected.
        gridCreate(createTileNumbers, createTileNumbers);
    });
}

//create grid on user click
function gridCreate(col, row) {
    const gridContainer = document.querySelector('.grid'); // grabbing container to create tiles inside of it
    const gridColRow = document.querySelector(':root'); // grabbing css variables
    const gridScaleText = document.querySelector('.grid-size');
    gridColRow.style.setProperty('--grid-col', col) // setting grid-columns to 16
    gridColRow.style.setProperty('--grid-row', row) // setting grid-rows to 16

    gridScaleText.textContent = col + ' x ' + row; // changing the text above slider to correct number

    //loop through the col*row and create a tile for the grid.
    for(let i = 0; i < col*row; i++) {
        const defaultGridTiles = document.createElement('div');
        gridContainer.append(defaultGridTiles);
        defaultGridTiles.classList.add('grid-tile');
    }
}

//function that changes the button clicked to active
function settingChange(buttonPressed) {
    const buttons = document.querySelectorAll('.setting-button'); // selecting all buttons for colors

    // loop through all the buttons and remove the active classs
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // add active class to button selected
    buttonPressed.classList.add('active');
}


//
let mouseDown = false;
const isColorButtonActive = document.querySelector('.color-mode')
const isRainbowButtonActive = document.querySelector('.rainbow-mode');
const isEraserButtonActive = document.querySelector('.eraser-mode');
const gridContainer = document.querySelector('.grid')
const rainbowColorList = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

gridContainer.addEventListener('mouseover', function(e) {

    const gridtile = document.querySelector('.grid-tile')
    const colorChoice = document.querySelector('.color-selector').value;
    let colorNum = Math.floor((Math.random() * 7) + 1);
    

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
           
                e.target.style.setProperty('--grid-color-change', rainbowColorList[colorNum]);

        
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

//mouse is down set mouse down to true 
document.addEventListener('mousedown', function() {
    mouseDown = true;
})

//when mouse is up set mouseDown to false
document.addEventListener('mouseup', function() {
    mouseDown = false;
})