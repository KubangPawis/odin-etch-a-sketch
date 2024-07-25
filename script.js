let gridSize = 16;

function createGrid() {
    const sketchGrid = document.querySelector("#sketch-grid");
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
window.onload = createGrid;