const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const gridbox = document.createElement("div");
    gridbox.classList.add("gridbox");   
    container.appendChild(gridbox);

    for (let j = 0; j < 16; j++) {
        const gridsubbox = document.createElement("div");
        gridsubbox.classList.add("gridsubbox");
        
        gridsubbox.addEventListener("mouseenter", () => {
            gridsubbox.classList.add("hovercolor");
        });
        
        gridbox.appendChild(gridsubbox);
    }
}