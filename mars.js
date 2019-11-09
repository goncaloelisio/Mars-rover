// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================

// Grid 10x10
//==========================

function displayGrid() {
  var gridline = "";

  for (var l = 0; l <= 10; l++) {
    gridline += " ___ ___ ___ ___ ___ ___ ___ ___ ___ ___";
    console.log(gridline);
    gridline = "";
    if (l === 10) {
      gridline += " ___ ___ ___ ___ ___ ___ ___ ___ ___ ___";
    } else {
      for (var c = 0; c <= 10; c++) {
        if (rover.x === c && rover.y === l) {
          gridline += "| X ";
        } else {
          gridline += "|   ";
        }
        //console.log("Linhas: " + l + " Colunas: " + c);
      }
      console.log(gridline);
      gridline = "";
    }
  }
}

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

function moveForward() {
  
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
    
  
  console.log("moveForward was called");
  rover.travelLog.push(" Position x: " + rover.x + " position y: " + rover.y);
}


function canRoverMoveInX() {
  switch (rover.x) {
    case 0:
      if(rover.direction === "E"){
      moveForward();
      }else{
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;
    case 9:
      if(rover.direction === "W"){
        moveForward();
        }else{
          console.log("You can go out of the grid");
          console.log("Actual position x = " + rover.x + " y = " + rover.y);
        }
      break;
    default:
      moveForward();  
  }
}

function canRoverMoveInY() {
  switch (rover.y) {
    case 0:
      if(rover.direction === "S"){
      moveForward();
      }else{
        console.log("You can go out of the grid");
        console.log("Actual position x = " + rover.x + " y = " + rover.y);
      }
      break;
      
    case 9:
      if(rover.direction === "N"){
        moveForward();
        }else{
          console.log("You can go out of the grid");
          console.log("Actual position x = " + rover.x + " y = " + rover.y);
        }
      break;

    default: 
      moveForward();  
  }
}

function canRoverMove(){
  if(rover.direction==="N"||rover.direction==="S"){
    canRoverMoveInY();
  }else{
    canRoverMoveInX();
  }
}

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
      default:
        console.log("Please, enter a valid command, i.e. l, r or f");
        break;
    }
  }
}


function marsRoverInit() {
  var cmd = "rrf"; //prompt("Please enter the path");
  displayGrid();
  commands(cmd);

}

marsRoverInit();