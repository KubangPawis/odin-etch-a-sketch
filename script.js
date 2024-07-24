let numberOfRows = 16;
let numberOfColumns = 16;

function init() {
    const sketchGrid = document.querySelector("#sketch-grid");

    for (let i = 0; i < numberOfRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.toggle("grid-row");

        for (let j = 0; j < numberOfColumns; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.toggle("grid-box");
            gridRow.appendChild(gridBox);
        }
        sketchGrid.appendChild(gridRow);
    }
}

window.onload = init;