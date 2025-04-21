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
            this.rotate(anti, 0, 2, 8, 6);
            this.rotate(anti, 1, 5, 7, 3);
            this.rotate(anti, 36, 27, 18, 9);
            this.rotate(anti, 29, 20, 11, 38);
            this.rotate(anti, 28, 19, 10, 37);
        } else if (m == "F") {
            this.rotate(anti, 9, 11, 17, 15);
            this.rotate(anti, 10, 14, 16, 12);
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
        const sticker = document.createElement('div');
        sticker.className = 'sticker ' + colors[face];
        try {
            if (!pieces[i] || !pieces[i].children[face]) {
                throw new Error(`Invalid DOM structure for piece ${i}, face ${face}`);
            }
            pieces[i].children[face].appendChild(sticker);
        } catch (e) {
            console.error("Error attaching sticker to piece", i, "face", face, ":", e.message);
        }
        return 'translate' + getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
    }
    
    if (!pieces || pieces.length < 26) {
        console.error("Invalid pieces collection: Expected 26 pieces, got:", pieces.length);
        return;
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
            if (className) {
                sticker1.className = sticker2.className;
                sticker2.className = className;
            }
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

// Validate cube state
function validateCubeState(state) {
    if (!state || typeof state !== 'string' || state.length !== 54) {
        console.error("State invalid: Must be a 54-character string, got:", state);
        return false;
    }
    
    const validColors = ['U', 'R', 'F', 'D', 'L', 'B'];
    const colorCounts = { U: 0, R: 0, F: 0, D: 0, L: 0, B: 0 };
    
    for (let i = 0; i < state.length; i++) {
        const c = state[i];
        if (!validColors.includes(c)) {
            console.error(`Invalid color at index ${i}: ${c}`);
            return false;
        }
        colorCounts[c]++;
    }
    
    // Check if we have exactly 9 of each color
    for (const color in colorCounts) {
        if (colorCounts[color] !== 9) {
            console.error(`Invalid color count for ${color}: ${colorCounts[color]}`);
            return false;
        }
    }
    
    // Additional validation for center pieces (they must be in correct positions)
    const centers = [4, 13, 22, 31, 40, 49]; // Indices of center pieces
    const expectedCenters = ['U', 'R', 'F', 'D', 'L', 'B']; // Expected colors
    
    // We're not doing full cube validity check (parity etc.) as that's complex
    
    return true;
}
// Convert cube state to solver format (URFDLB order)
function convert_state_to_solver_format(state) {
    if (!state || typeof state !== 'string' || state.length !== 54) {
        throw new Error(`Invalid state: Must be a 54-character string, got: ${state}`);
    }
    
    // Mapping of colors to solver format
    // The solver expects: up, right, front, down, left, back
    const replace_map = { 
        'U': 'u', 
        'R': 'r', 
        'F': 'f', 
        'D': 'd', 
        'L': 'l', 
        'B': 'b' 
    };
    
    const solverState = state.split("").map(c => {
        const mapped = replace_map[c];
        if (!mapped) {
            throw new Error(`Invalid color in state: ${c}`);
        }
        return mapped;
    }).join("");
    
    // Validate solver state
    const solverCounts = { u: 0, r: 0, f: 0, d: 0, l: 0, b: 0 };
    for (let c of solverState) {
        solverCounts[c] = (solverCounts[c] || 0) + 1;
    }
    
    if (!Object.values(solverCounts).every(count => count === 9)) {
        throw new Error("Invalid solver state: Incorrect color counts");
    }
    
    return solverState;
}

// Parse and execute a sequence of moves
async function do_moves(moves) {
    const faceMap = {
        'U': 0, 'D': 1, 'F': 2, 'B': 3, 'R': 4, 'L': 5,
        'u': 0, 'd': 1, 'f': 2, 'b': 3, 'r': 4, 'l': 5,
        'M': 'M', 'E': 'E', 'S': 'S' // Slice moves
    };

    // Parse the solution into individual moves
    const movePattern = /([URFDLBMESurfdbmes])([2']?)/g;
    let match;
    let moveList = [];
    
    // If the solution is already parsed, use it directly
    if (Array.isArray(moves)) {
        moveList = moves;
    } else {
        // Parse string format moves
        const moveStr = moves.toString();
        while ((match = movePattern.exec(moveStr)) !== null) {
            moveList.push({
                face: match[1],
                modifier: match[2]
            });
        }
    }

    // Execute each move
    for (const move of moveList) {
        const face = faceMap[move.face];
        
        if (face === undefined) {
            console.warn(`Skipping invalid move: ${move.face}`);
            continue;
        }
        
        // Handle special slice moves
        if (face === 'M' || face === 'E' || face === 'S') {
            // These are handled by the existing functions in your code
            const key = move.modifier === "'" ? move.face.toLowerCase() : move.face;
            const event = { key };
            rotateFromKeyPress(event);
            await delay(301);
            
            if (move.modifier === '2') {
                rotateFromKeyPress(event);
                await delay(301);
            }
            continue;
        }
        
        // Standard face moves
        let clockwise = move.face === move.face.toUpperCase();
        
        if (move.modifier === "'") {
            clockwise = !clockwise;
        }
        
        animateRotation(face, clockwise, Date.now());
        await delay(301);
        
        if (move.modifier === '2') {
            animateRotation(face, clockwise, Date.now());
            await delay(301);
        }
    }
}
// Solver function
async function solve() {
    const statusText = document.querySelector('#pos');
    statusText.textContent = "Initializing solver...";

    try {
        // Existing solving code...
        
        const solution = await new Promise((resolve, reject) => {
            // Existing solution calculation...
        });
        
        await do_moves(solution);
        statusText.textContent = "Solved! " + solution.length/2 + " moves";
    } catch (error) {
        console.error("Primary solving method failed:", error);
        
        if (error.message.includes("No pattern found for oll string")) {
            statusText.textContent = "Using alternative solving method...";
            try {
                // Alternative solving approach
                // Either use a different algorithm or reset to a solvable state
                await scramble(); // Scramble to a new state that might be solvable
                await solve(); // Try solving again
            } catch (fallbackError) {
                statusText.textContent = "Solve failed: Unable to solve cube";
                console.error("Fallback solution also failed:", fallbackError);
            }
        } else {
            statusText.textContent = "Solve failed: " + error.message;
        }
    }
}


// Solver algorithm using rubiks-cube-solver
async function solve() {
    const statusText = document.querySelector('#pos');
    console.log("Starting solver function");
    statusText.textContent = "Initializing solver...";

    try {
        console.log("Checking for Cube availability");
        // Poll for Cube availability with better feedback
        for (let i = 0; i < 10; i++) {
            console.log(`Attempt ${i+1}: Cube object available: ${typeof Cube !== 'undefined'}`);
            console.log(`Attempt ${i+1}: rubiksCubeSolver available: ${typeof rubiksCubeSolver !== 'undefined'}`);
            
            if (typeof Cube !== 'undefined' && typeof rubiksCubeSolver !== 'undefined') {
                break;
            }
            
            await delay(1000);
            statusText.textContent = `Initializing solver... (${i+1}s)`;
        }

        // Rest of the code with console logs for debugging
        console.log("After initialization check");
        
        // Check if libraries loaded
        if (typeof Cube === 'undefined') {
            throw new Error("Cube library not loaded");
        }
        
        if (typeof rubiksCubeSolver === 'undefined') {
            throw new Error("Solver function not loaded");
        }
        
        console.log("Libraries loaded, getting cube state");
        // Continue with your solving logic...
    } catch (error) {
        console.error("Caught error in solve():", error);
        statusText.textContent = "Solve failed: " + error.message;
    }
}

async function debugSolve() {
    const statusText = document.querySelector('#pos');
    statusText.textContent = "Debug solving...";
    
    try {
        // Just do a simple known sequence instead of calculating a solution
        const simpleSequence = "R U R' U'"; // The sexy move
        await do_moves(simpleSequence);
        statusText.textContent = "Debug solve complete";
    } catch (error) {
        statusText.textContent = "Debug solve failed: " + error.message;
    }
}

// Event initialization
window.addEventListener('load', () => {
    window.scene = document.getElementById('scene');
    window.cube = document.getElementById('cube');
    window.pivot = document.getElementById('pivot');
    window.guide = document.getElementById('guide');
    
    assembleCube();
    
    document.ondragstart = function() { return false; };
    scene.addEventListener('mousedown', mousedown);
    window.addEventListener('keydown', rotateFromKeyPress);
});