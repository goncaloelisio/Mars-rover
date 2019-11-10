// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
// Obstacles
//==========================

var obstacle1 = {
  x: 3,
  y: 4
};

var obstacle2 = {
  x: 5,
  y: 2
};

var obstacle3 = {
  x: 8,
  y: 5
};

var obstacle4 = {
  x: 7,
  y: 3
};

var obstacles = [obstacle1, obstacle2, obstacle3, obstacle4];

// =========================================
// Grid 10x10 and the obstacles in the grid
// =========================================

function displayGrid() {

  var gridline = "";
  var tempGridLine = "";

  for (var l = 0; l <= 10; l++) {
    gridline += " ___ ___ ___ ___ ___ ___ ___ ___ ___ ___";
    console.log(gridline);
    gridline = "";
    if (l === 10) {
      gridline += " ___ ___ ___ ___ ___ ___ ___ ___ ___ ___";
    } else {
      for (var c = 0; c <= 10; c++) {
        for (var i = 0; obstacles.length > i; i++) {
          
            if (obstacles[i].x  === c && obstacles[i].y === l) { 
              tempGridLine = "|***";
              
          }
        }
        if(tempGridLine === ""){
          if (rover.x === c && rover.y === l) {
            tempGridLine = "| X ";
          } else {
            tempGridLine = "|   ";
          }
        }

        gridline += tempGridLine;
        
        tempGridLine = "";

      } 
      console.log(gridline);
      gridline = "";
    }
  }
}


// ======================
// Turn to the left
// ======================

function turnLeft() {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!");
}

// ======================
// Turn to the right
// ======================

function turnRight() {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
}

// ==========================
// Moving the Rover forward
// ==========================

function moveForward() {

  console.log("moveForward was called");

  switch (rover.direction) {
    case "W":
      rover.x -= 1;
      displayGrid();
      break;
    case "N":
      rover.y -= 1;
      displayGrid();
      break;
    case "S":
      rover.y += 1;
      displayGrid();
      break;
    case "E":
      rover.x += 1;
      displayGrid();
      break;
  }

  rover.travelLog.push(" Position x: " + rover.x + " position y: " + rover.y);
}

// ===============================
// Moving the Rover to backwards
// ===============================

function moveBackward() {

  console.log("moveBackward was called");

  switch (rover.direction) {
    case "W":
      rover.x += 1;
      displayGrid();
      break;
    case "N":
      rover.y += 1;
      displayGrid();
      break;
    case "S":
      rover.y -= 1;
      displayGrid();
      break;
    case "E":
      rover.x -= 1;
      displayGrid();
      break;
  }

rover.travelLog.push(" Position x: " + rover.x + " position y: " + rover.y);
}

// ===========================================================
// Checking if the Rover can move forward in the x direction
// ===========================================================

function canRoverMoveInX() {
  switch (rover.x) {
    case 0:
      if (rover.direction === "E") {
        
        moveForward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;
    case 9:
      if (rover.direction === "W") {
        moveForward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;
    default:
      moveForward();
  }
}

// ===========================================================
// Checking if the Rover can move forward in the y direction
// ===========================================================

function canRoverMoveInY() {
  switch (rover.y) {
    case 0:
      if (rover.direction === "S") {
        moveForward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;

    case 9:
      if (rover.direction === "N") {
        moveForward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;

    default:
      moveForward();
  }
}

// ============================================================
// Checking if the Rover can move backward in the x direction
// ============================================================

function canRoverMoveBackInX() {
  switch (rover.x) {
    case 0:
      if (rover.direction === "W" && validateObstaclesForXForward()) {
        moveForward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;
    case 9:
      if (rover.direction === "E") {
        moveBackward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;
    default:
      moveBackward();
  }
}

// ============================================================
// Checking if the Rover can move backward in the y direction
// ============================================================

function canRoverMoveBackInY() {
  switch (rover.y) {
    case 0:
      if (rover.direction === "N") {
        moveBackward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;

    case 9:
      if (rover.direction === "S") {
        moveBackward();
      } else {
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;

    default:
      moveBackward();
  }
}

// ================================================================
// Checking if the Rover can move forward according the direction
// ================================================================

function canRoverMove() {
  if (rover.direction === "N" || rover.direction === "S") {
    canRoverMoveInY();
  } else {
    canRoverMoveInX();
  }
}

// ================================================================
// Checking if the Rover can move backward according the direction
// ================================================================

function canRoverMoveBack() {
  if (rover.direction === "N" || rover.direction === "S") {
    canRoverMoveBackInY();
  } else {
    canRoverMoveBackInX();
  }
}

// ============================================
// Execution and validation of the commands
// ============================================

function commands(command) {
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
      case "f":
        canRoverMove();
        break;
      case "r":
        turnRight();
        canRoverMove();
        break;
      case "l":
        turnLeft();
        canRoverMove();
        break;
      case "b":
        canRoverMoveBack();
        break;
      default:
        console.log("Please, enter a valid command, i.e. l, b, r or f");
        break;
    }
  }
}

// ====================
// The Travel Log
// ====================

function printLogs() {
  for (var i = 0; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i]);
  }
}

// =====================
// Moving the Rover
// =====================

function marsRoverInit() {
  var cmd = prompt("Please enter the path"); // cmd = "rrffl"
  displayGrid();
  commands(cmd);
  printLogs();
}

marsRoverInit();