const gridSlider = document.querySelector('.grid-size-slider');
const gridSize = document.querySelector('.grid-size');
gridSlider.addEventListener('input', gridCreate);
const defaultGridCSS = 16;
const defaultDivAmount = 256;

defaultState();


//default grid 
function defaultState() {
    const defaultGridSize =  document.querySelector(':root');
    const gridContainer = document.querySelector('.grid');
    
    
    defaultGridSize.style.setProperty('--grid-col', defaultGridCSS)
    defaultGridSize.style.setProperty('--grid-row', defaultGridCSS)

   

    for(let i = 0; i < defaultDivAmount; i++) {
        const defaultGridTiles = document.createElement('div');
        gridContainer.append(defaultGridTiles);
        defaultGridTiles.classList.add('grid-tile');
    }

    
}

//create grid on user click
function gridCreate(col, row) {

}
