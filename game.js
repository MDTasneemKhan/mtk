// Get the canvas and its 2D drawing context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player object
const player = {
    x: 400,  // Starting position in the middle
    y: 300,
    width: 20,
    height: 20,
    speed: 5,
    color: 'blue'
};

// Keys object to track which keys are pressed
const keys = {};

// Listen for key presses
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Game loop function
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move player based on keys
    if (keys['w'] || keys['W']) {
        player.y -= player.speed;  // Move up
    }
    if (keys['s'] || keys['S']) {
        player.y += player.speed;  // Move down
    }
    if (keys['a'] || keys['A']) {
        player.x -= player.speed;  // Move left
    }
    if (keys['d'] || keys['D']) {
        player.x += player.speed;  // Move right
    }

    // Keep player inside the canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

    // Draw the player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();