// Utility function for animations
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Basic variables
var colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'],
  pieces = document.getElementsByClassName('piece');

// Cube state management
class CubeString {
  constructor() {
      this.cube_state = "wwwwwwwwwgggggggggrrrrrrrrrbbbbbbbbboooooooooyyyyyyyyy".split("");
  }
  
  rotate(anti, a, b, c, d) {
      if (!anti) {
          let temp = this.cube_state[a];
          this.cube_state[a] = this.cube_state[b];
          this.cube_state[b] = this.cube_state[c];
          this.cube_state[c] = this.cube_state[d];
          this.cube_state[d] = temp;
      } else {
          let temp = this.cube_state[a];
          this.cube_state[a] = this.cube_state[d];
          this.cube_state[d] = this.cube_state[c];
          this.cube_state[c] = this.cube_state[b];
          this.cube_state[b] = temp;
      }
  }
  
  move(m, anti = false) {
      if (m == 'U') {
          this.rotate(anti, 0, 2, 8, 6); // front corner
          this.rotate(anti, 1, 5, 7, 3); // front edge
          this.rotate(anti, 36, 27, 18, 9); // corner 1
          this.rotate(anti, 29, 20, 11, 38); // corner 2
          this.rotate(anti, 28, 19, 10, 37); // edge 1
      } else if (m == "F") {
          this.rotate(anti, 9, 11, 17, 15); // plus 9
          this.rotate(anti, 10, 14, 16, 12); // plus 9
          this.rotate(anti, 38, 8, 24, 45);
          this.rotate(anti, 6, 18, 47, 44);
          this.rotate(anti, 7, 21, 46, 41);
      } else if (m == "R") {
          this.rotate(anti, 18, 20, 26, 24);
          this.rotate(anti, 19, 23, 25, 21);
          this.rotate(anti, 11, 2, 33, 47);
          this.rotate(anti, 8, 27, 53, 17);
          this.rotate(anti, 5, 30, 50, 14);
      } else if (m == "B") {
          this.rotate(anti, 27, 29, 35, 33);
          this.rotate(anti, 28, 32, 34, 30);
          this.rotate(anti, 20, 0, 42, 53);
          this.rotate(anti, 2, 36, 51, 26);
          this.rotate(anti, 1, 39, 52, 23);
      } else if (m == "L") {
          this.rotate(anti, 36, 38, 44, 42);
          this.rotate(anti, 37, 41, 43, 39);
          this.rotate(anti, 29, 6, 15, 51);
          this.rotate(anti, 0, 9, 45, 35);
          this.rotate(anti, 3, 12, 48, 32);
      } else if (m == "D") {
          this.rotate(anti, 45, 47, 53, 51);
          this.rotate(anti, 46, 50, 52, 48);
          this.rotate(anti, 44, 17, 26, 35);
          this.rotate(anti, 15, 24, 33, 42);
          this.rotate(anti, 16, 25, 34, 43);
      } else if (m == "x") {
          this.move("R", anti);
          this.move("L", !anti);
          this.rotate(anti, 13, 4, 31, 49);
          this.rotate(anti, 10, 1, 34, 46);
          this.rotate(anti, 16, 7, 28, 52);
      } else if (m == "y") {
          this.move("U", anti);
          this.move("D", !anti);
          this.rotate(anti, 13, 40, 31, 22);
          this.rotate(anti, 12, 39, 30, 21);
          this.rotate(anti, 14, 41, 32, 23);
      } else if (m == "z") {
          this.move("F", anti);
          this.move("B", !anti);
          this.rotate(anti, 40, 4, 22, 49);
          this.rotate(anti, 37, 5, 25, 48);
          this.rotate(anti, 43, 3, 19, 50);
      } else if (m == "M") {
          this.move("x", !anti);
          this.move("L", !anti);
          this.move("R", anti);
      } else if (m == "E") {
          this.move("y", !anti);
          this.move("D", anti);
          this.move("U", !anti);
      } else if (m == "S") {
          this.move("z", !anti);
          this.move("B", !anti);
          this.move("F", anti);
      } else if (m == "u") {
          this.move("D", anti);
          this.move("y", anti);
      } else if (m == "f") {
          this.move("B", anti);
          this.move("z", anti);
      } else if (m == "r") {
          this.move("L", anti);
          this.move("x", anti);
      } else if (m == "b") {
          this.move("F", anti);
          this.move("z", !anti);
      } else if (m == "l") {
          this.move("R", anti);
          this.move("x", !anti);
      } else if (m == "d") {
          this.move("U", anti);
          this.move("y", !anti);
      }
  }
}

// Global instance of cube state
let cube_string = new CubeString();

// Returns j-th adjacent face of i-th face
function mx(i, j) {
  return ([2, 4, 3, 5][j % 4 | 0] + i % 2 * ((j | 0) % 4 * 2 + 3) + 2 * (i / 2 | 0)) % 6;
}

function getAxis(face) {
  return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
}

// Moves each of 26 pieces to their places, assigns IDs and attaches stickers
function assembleCube() {
  function moveto(face) {
      id = id + (1 << face);
      pieces[i].children[face].appendChild(document.createElement('div')).
      setAttribute('class', 'sticker ' + colors[face]);
      return 'translate' + getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
  }
  for (var id, x, i = 0; id = 0, i < 26; i++) {
      x = mx(i, i % 18);
      pieces[i].style.transform = 'rotateX(0deg)' + moveto(i % 6) + (
      i > 5 ? moveto(x) + (i > 17 ? moveto(mx(x, x + 2)) : '') : '');
      pieces[i].setAttribute('id', 'piece' + id);
  }
}

function getPieceBy(face, index, corner) {
  return document.getElementById('piece' + (
  (1 << face) + (1 << mx(face, index)) + (1 << mx(face, index + 1)) * corner));
}

// Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
function swapPieces(face, times) {
  for (var i = 0; i < 6 * times; i++) {
      var piece1 = getPieceBy(face, i / 2, i % 2),
      piece2 = getPieceBy(face, i / 2 + 1, i % 2);
      for (var j = 0; j < 5; j++) {
          var sticker1 = piece1.children[j < 4 ? mx(face, j) : face].firstChild,
          sticker2 = piece2.children[j < 4 ? mx(face, j + 1) : face].firstChild,
          className = sticker1 ? sticker1.className : '';
          if (className)
          sticker1.className = sticker2.className,
          sticker2.className = className;
      }
  }
  
  // Update cube_string when a face is rotated
  if (face === 0) cube_string.move('U', times === 1);
  else if (face === 1) cube_string.move('D', times === 1);
  else if (face === 2) cube_string.move('F', times === 1);
  else if (face === 3) cube_string.move('B', times === 1);
  else if (face === 4) cube_string.move('R', times === 1);
  else if (face === 5) cube_string.move('L', times === 1);
}

// Animates rotation of the face (by clockwise if cw), and then swaps stickers
function animateRotation(face, cw, currentTime) {
  var k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1),
  qubes = Array(9).fill(pieces[face]).map(function (value, index) {
      return index ? getPieceBy(face, index / 2, index % 2) : value;
  });
  
  (function rotatePieces() {
      var passed = Date.now() - currentTime,
      style = 'rotate' + getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)';
      qubes.forEach(function (piece) {
          piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
      });
      if (passed >= 300) {
          swapPieces(face, 3 - 2 * cw);
          return;
      }
      requestAnimationFrame(rotatePieces);
  })();
}

// Mouse events
function mousedown(md_e) {
  var startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number),
  element = md_e.target.closest('.element'),
  face = [].indexOf.call((element || cube).parentNode.children, element);
  
  function mousemove(mm_e) {
      if (element) {
          var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
          if (gid && gid.input.includes('anchor')) {
              mouseup();
              var e = element.parentNode.children[mx(face, Number(gid) + 3)].hasChildNodes();
              animateRotation(mx(face, Number(gid) + 1 + 2 * e), e, Date.now());
          }
      } else pivot.style.transform =
      'rotateX(' + (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + 'deg)' +
      'rotateY(' + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + 'deg)';
  }
  
  function mouseup() {
      document.body.appendChild(guide);
      scene.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
      scene.addEventListener('mousedown', mousedown);
  }

  (element || document.body).appendChild(guide);
  scene.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
  scene.removeEventListener('mousedown', mousedown);
}

// Keyboard controls
function rotateFromKeyPress(event) {
  switch (event.key) {
      case "u":
          animateRotation(0, true, Date.now());
          break;
      case "U":
          animateRotation(0, false, Date.now());
          break;
      case "d":
          animateRotation(1, true, Date.now());
          break;
      case "D":
          animateRotation(1, false, Date.now());
          break;
      case "f":
          animateRotation(2, true, Date.now());
          break;
      case "F":
          animateRotation(2, false, Date.now());
          break;
      case "b":
          animateRotation(3, true, Date.now());
          break;
      case "B":
          animateRotation(3, false, Date.now());
          break;
      case "r":
          animateRotation(4, true, Date.now());
          break;
      case "R":
          animateRotation(4, false, Date.now());
          break;
      case "l":
          animateRotation(5, true, Date.now());
          break;
      case "L":
          animateRotation(5, false, Date.now());
          break;
      case "m":
          animateRotation(4, true, Date.now());
          animateRotation(5, false, Date.now());
          break;
      case "M":
          animateRotation(4, false, Date.now());
          animateRotation(5, true, Date.now());
          break;
      case "e":
          animateRotation(0, true, Date.now());
          animateRotation(1, false, Date.now());
          break;
      case "E":
          animateRotation(0, false, Date.now());
          animateRotation(1, true, Date.now());
          break;
      case "s":
          animateRotation(2, true, Date.now());
          animateRotation(3, false, Date.now());
          break;
      case "S":
          animateRotation(2, false, Date.now());
          animateRotation(3, true, Date.now());
          break;
      default:
  }
}

// Scramble the cube with random moves
async function scramble() {
  var oneMove;
  var twoMove;

  for (let i = 0; i < 20; i++) {
      var random = Math.floor(Math.random() * 6);
      var face = Math.random() < 0.5;

      const invalidMoves = {
          0: [0, 1],
          1: [1, 0],
          2: [2, 3],
          3: [3, 2],
          4: [4, 5],
          5: [5, 4],
      };

      if (!invalidMoves[random].includes(oneMove) && !invalidMoves[random].includes(twoMove)) {
          animateRotation(random, face, Date.now());
          await delay(301);
          twoMove = oneMove;
          oneMove = random;
      } else {
          i--;
      }
  }
}

// Reset the cube to its initial state
function reset() {
  window.location.reload();
}

// ------ SOLVER CODE ------

// Convert cube state to solver format
function convert_state_to_solver_format(state) {
  const replace_map = { w: 'u', r: 'r', g: 'f', y: 'd', o: 'l', b: 'b' };
  const u = state.slice(9 * 0, 9 * 1);
  const f = state.slice(9 * 1, 9 * 2);
  const r = state.slice(9 * 2, 9 * 3);
  const b = state.slice(9 * 3, 9 * 4);
  const l = state.slice(9 * 4, 9 * 5);
  const d = state.slice(9 * 5, 9 * 6);
  return [...f, ...r, ...u, ...d, ...l, ...b].map(c => replace_map[c]).join("");
}

// Convert solution notation to moves
function convert_solution_to_moves(solution) {
  return solution.replace(/prime/g, "'").replace(/\s/g, "");
}

// Parse and execute a sequence of moves
async function do_moves(moves) {
  const faceMap = { 
      'U': 0, 'D': 1, 'F': 2, 'B': 3, 'R': 4, 'L': 5,
      'u': 0, 'd': 1, 'f': 2, 'b': 3, 'r': 4, 'l': 5
  };
  
  for (let i = 0; i < moves.length; i++) {
      // Skip if not a valid move letter
      if (!"UDFBRLudfbrl".includes(moves[i])) continue;
      
      const face = faceMap[moves[i]];
      let clockwise = moves[i] === moves[i].toUpperCase(); // Lowercase is counterclockwise
      
      // Check for prime notation which reverses direction
      if (i + 1 < moves.length && moves[i + 1] === "'") {
          clockwise = !clockwise;
          i++;
      }
      // Check for 2 notation (double move)
      else if (i + 1 < moves.length && moves[i + 1] === "2") {
          animateRotation(face, clockwise, Date.now());
          await delay(301);
          animateRotation(face, clockwise, Date.now());
          await delay(301);
          i++;
          continue;
      }
      
      animateRotation(face, clockwise, Date.now());
      await delay(301);
  }
}

// Solver integration
async function solve() {
  try {
      const statusText = document.querySelector('#pos');
      statusText.textContent = "Analyzing cube state...";
      
      // Import the solver dynamically
      await import('https://cdn.jsdelivr.net/npm/rubiks-cube-solver@1.2.0/+esm')
          .then(async (solver) => {
              // Get current cube state
              const currentState = cube_string.cube_state.join("");
              const solverState = convert_state_to_solver_format(currentState);
              
              statusText.textContent = "Calculating solution...";
              
              try {
                  const solution = solver.default(solverState);
                  statusText.textContent = "Solving...";
                  
                  // Convert solution to a sequence of moves
                  const moves = convert_solution_to_moves(solution);
                  
                  // Execute the moves
                  await do_moves(moves);
                  
                  statusText.textContent = "Solved!";
              } catch (error) {
                  statusText.textContent = "Couldn't solve cube. Try again.";
                  console.error("Solving error:", error);
              }
          });
  } catch (error) {
      document.querySelector('#pos').textContent = "Failed to load solver.";
      console.error("Error importing solver:", error);
  }
}

// Event initialization
window.addEventListener('load', () => {
  // Initialize elements
  window.scene = document.getElementById('scene');
  window.cube = document.getElementById('cube');
  window.pivot = document.getElementById('pivot');
  window.guide = document.getElementById('guide');
  
  assembleCube();
  
  // Add event listeners
  document.ondragstart = function() { return false; };
  scene.addEventListener('mousedown', mousedown);
  window.addEventListener('keydown', rotateFromKeyPress);
});
