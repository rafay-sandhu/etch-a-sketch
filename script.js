const container = document.querySelector(".container");
const btn = document.querySelector("button");

function createGrid(grid_box_number) {

    container.innerHTML = "";

    for (let i = 0; i < grid_box_number; i++) {
        const gridbox = document.createElement("div");
        gridbox.classList.add("gridbox");   
        container.appendChild(gridbox);

        for (let j = 0; j < grid_box_number; j++) {
            const gridsubbox = document.createElement("div");
            gridsubbox.classList.add("gridsubbox");

            gridsubbox.addEventListener("mouseenter", (e) => {
                if (e.buttons == 1) {
                    gridsubbox.classList.add("hovercolor");
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    gridsubbox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }
            });
            
            gridbox.appendChild(gridsubbox);
        }
    }
}

createGrid(16);

btn.addEventListener("click", function() {
    let input_value;
    while(true) {
        let raw_input = prompt("Please enter the number of boxes for the grid:");
        
        if (raw_input === null) {
            return;
        }

        input_value = Number(raw_input);
        if (!isNaN(input_value) && input_value > 0 && input_value < 101) {
            break;
        }
    }
    createGrid(input_value);
})