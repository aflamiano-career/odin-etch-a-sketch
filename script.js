const DEFAULT_GRID_SIZE = 16;

const resizeBtn = document.querySelector(".resize-btn");
resizeBtn.addEventListener("click", () => {
  const gridContainer = document.querySelector(".grid-container");
  let keepGoing = true;
  let x = 0;
  gridContainer.textContent = "";
  do {
    x = prompt("Grid size?");
    if (isNaN(x) || x > 100 || x < 1) {
      alert("Please enter a number between 1-100");
    } else {
      keepGoing = false;
    }
  } while (keepGoing);
  createGrid(x);
});

function createGrid(x = 16) {
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 0; i < x; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.setAttribute("id", "grid-column");
    gridContainer.append(gridColumn);
    for (let j = 0; j < x; j++) {
      const gridItem = document.createElement("div");
      gridItem.setAttribute("id", "grid-item");
      //   gridItem.textContent = `ITEM${j + 1}`;
      gridColumn.append(gridItem);
    }
  }

  const grids = document.querySelectorAll("#grid-item");
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", (e) => {
      // e.target.setAttribute("class", "colorize");
      e.target.style.backgroundColor = `rgba(${getRandomInt(
        255
      )}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
      let gridOpacity = parseFloat(e.target.style.opacity);
      console.log(gridOpacity);
      e.target.style.opacity = isNaN(gridOpacity)
        ? "0.1"
        : `${gridOpacity < 1 && gridOpacity + 0.1}`;
    });
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

createGrid(DEFAULT_GRID_SIZE);
