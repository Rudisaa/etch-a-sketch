const gridSlider = document.querySelector('.grid-size-slider');
const gridSize = document.querySelector('.grid-size');
gridSlider.addEventListener('input', gridCreate);
const defaultGridCSS = 16;
const defaultDivAmount = 256;

defaultState();
tileColorChange();


//default grid 
function defaultState() {
    const defaultGridSize =  document.querySelector(':root'); // grabbing :root in css file to change the row and column variables
    const gridContainer = document.querySelector('.grid'); // grabbing container to create tiles inside of it
    const slider = document.querySelector('.grid-size-slider');
    
    
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


// change color of tile when user clicks on it to draw
function tileColorChange() {
    const colorPick = document.querySelector('.color-selector').value;
    console.log(colorPick);

   
}