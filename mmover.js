const robot = require("robotjs");

// Set the mouse movement interval (in milliseconds)
const MOUSE_MOVE_INTERVAL = 10000;

// Get the screen size
const screenSize = robot.getScreenSize();

// Move the mouse to a random position on the screen every MOUSE_MOVE_INTERVAL milliseconds
setInterval(() => {
  // Generate random coordinates within the screen size
  const x = Math.floor(Math.random() * screenSize.width);
  const y = Math.floor(Math.random() * screenSize.height);

  // Move the mouse to the random coordinates
  robot.moveMouse(x, y);
}, MOUSE_MOVE_INTERVAL);
