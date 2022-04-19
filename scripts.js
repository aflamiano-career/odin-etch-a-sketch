gridContainer = document.querySelector('.grid-container');
buttonNewGrid = document.querySelector('.btn-new-grid');

let gridSize = 16;
let brightness = [];

const newGrid = () => {
    let keepGoing = true;
    while (keepGoing) {
        gridSize = parseInt(prompt("Enter number of grids: "));
        if (!Number.isInteger(gridSize)) {
            alert("Not a number. Please enter a number between 1 and 100.");
        } else if (gridSize < 1 || gridSize > 100) {
            alert("Please enter a number between 1 and 100.");
        } else {
            keepGoing = false;
        }
    }
    gridContainer.innerHTML = '';
    generateGrid();
}

const generateGrid = () => {
    console.log(gridSize);
    for(i = 1; i <= gridSize; i++) {
        for(j = 1; j <= gridSize; j++) {
            gridItem = document.createElement('div');
            // gridItem.innerText = i;
            gridContainer.appendChild(gridItem);
        }
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridItems = document.querySelectorAll('.grid-container div');
    gridItems.forEach((item, index) => {
        brightness[index] = 100;
        item.classList.add('grid-item');
        item.addEventListener('mouseover', (e)=> {
            if (item.style.backgroundColor) {
                item.style.filter = `brightness(${ brightness[index] -= 10 }%)`;
            } else {
                item.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        });
    });
}

buttonNewGrid.addEventListener('click', newGrid);

generateGrid();