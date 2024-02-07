document.addEventListener('DOMContentLoaded', () => {
    // Get the game board container
    const gameBoard = document.getElementById('gameBoard');

    // Define the size of the grid
    const gridSize = 5;

    // Define the position of the flower
    const flowerPosition = { x: 4, y: 4 };

    // Define the positions of the bushes
    const bushPositions = [{ x: 2, y: 2 }, { x: 3, y: 1 }];

    // Initialize the position of the bee
    let beePosition = { x: 0, y: 0 };

    // Function to create the grid
    function createGrid() {
        // Loop through rows
        for (let y = 0; y < gridSize; y++) {
            // Loop through columns
            for (let x = 0; x < gridSize; x++) {
                // Create a cell element
                const cell = document.createElement('div');
                cell.classList.add('cell');

                // Add classes based on cell content
                if (x === beePosition.x && y === beePosition.y) {
                    cell.classList.add('bee');
                } else if (x === flowerPosition.x && y === flowerPosition.y) {
                    cell.classList.add('flower');
                } else if (bushPositions.some(position => position.x === x && position.y === y)) {
                    cell.classList.add('bush');
                }

                // Append the cell to the game board
                gameBoard.appendChild(cell);
            }
        }
    }

    // Create the grid when the DOM is loaded
    createGrid();
});
