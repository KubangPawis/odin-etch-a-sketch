let gridSize = 16;

function createGrid() {
    const sketchGrid = document.createElement("div");
    sketchGrid.id = "sketch-grid";
    sketchGrid.addEventListener("mouseover", hoverPaintEffect);

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.toggle("grid-row");

        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.toggle("grid-box");
            gridRow.appendChild(gridBox);
        }
        sketchGrid.appendChild(gridRow);
    }
    const wrapper = document.querySelector("#wrapper");
    wrapper.prepend(sketchGrid);
}

function hoverPaintEffect(e) {
    const clickedGridBox = e.target;
    let currentBoxOpacity = Number(window.getComputedStyle(clickedGridBox).opacity);
    console.log("Box Opacity: " + currentBoxOpacity);

    if (!clickedGridBox.classList.contains("hovered-grid-box")) {
        clickedGridBox.classList.toggle("hovered-grid-box");
    } else {
        clickedGridBox.style.opacity = currentBoxOpacity + 0.10;
    }
}

function regenerateGrid() {
    gridSize = Number(prompt("Enter your desired sketch grid size:"));
    console.log("New grid size: " + gridSize);

    if (gridSize && gridSize <= 40 && gridSize > 0) {
        const sketchGrid = document.querySelector("#sketch-grid");
        const wrapper = document.querySelector("#wrapper");
        wrapper.removeChild(sketchGrid);
        createGrid();
    } else if (gridSize > 40) {
        alert("Grid size CANNOT be set to a value greater than 40. Please try again!");
    } else {
        alert("Invalid input!");
    }
}

function initializeButtonEvents() {
    const buttonList = document.querySelectorAll("button");
    buttonList.forEach((button) => {
        button.addEventListener("click", (e) => {
            const button = e.target;
            console.log(button);

            switch (button.id) {
                case "btn-generate-grid":
                    regenerateGrid();
            }
        });
    });
}

function init() {
    createGrid();
    initializeButtonEvents();
}

window.onload = init;