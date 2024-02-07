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

    function moveBee(x, y) {
        // Calculate the new position of the bee
        const newX = beePosition.x + x;
        const newY = beePosition.y + y;

        // Check if the new position is valid and not occupied by a bush
        const isValidMove = newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && !isOccupiedByBush(newX, newY);

        if (isValidMove) {
            beePosition = { x: newX, y: newY }; // Update the bee position

            // Check if the bee reached the flower position
            if (isNewPositionEqualToFlower(newX, newY)) {
                alert('You won!'); // Show win message
                resetBeePosition(); // Reset bee position
            }

            updateGrid(); // Update the grid after moving the bee
        }
    }

    // Function to check if a position is occupied by a bush
    function isOccupiedByBush(x, y) {
        return bushPositions.some(position => position.x === x && position.y === y);
    }

    // Function to check if a new position is equal to the flower position
    function isNewPositionEqualToFlower(x, y) {
        return x === flowerPosition.x && y === flowerPosition.y;
    }

    // Function to reset the bee position
    function resetBeePosition() {
        beePosition = { x: 0, y: 0 };
    }

    // Function to update the grid
    function updateGrid() {
        gameBoard.innerHTML = '';
        createGrid();
    }

    // Create the grid when the DOM is loaded
    createGrid();
});
