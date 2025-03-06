_ = require('underscore');

var cubeArray = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'];
var cube = new Object();
cube.display = function() {
	console.log('             _____             ');
	console.log('            |' + cubeArray[0] + ' ' + cubeArray[1] + ' ' + cubeArray[2] + '|');
	console.log('            |' + cubeArray[3] + ' ' + cubeArray[4] + ' ' + cubeArray[5] + '|');
	console.log('            |' + cubeArray[6] + ' ' + cubeArray[7] + ' ' + cubeArray[8] + '|');
	console.log('      ___________________         ');
	console.log('     |' + cubeArray[9] + ' ' + cubeArray[10] + ' ' + cubeArray[11] + ' ' + '|' + cubeArray[18] + ' ' + cubeArray[19] + ' ' + cubeArray[20] + '|' + ' ' + cubeArray[27] + ' ' + cubeArray[28] + ' ' + cubeArray[29] + '|');
	console.log('     |' + cubeArray[12] + ' ' + cubeArray[13] + ' ' + cubeArray[14] + ' ' + '|' + cubeArray[21] + ' ' + cubeArray[22] + ' ' + cubeArray[23] + '|' + ' ' + cubeArray[30] + ' ' + cubeArray[31] + ' ' + cubeArray[32] + '|');
	console.log('     |' + cubeArray[15] + ' ' + cubeArray[16] + ' ' + cubeArray[17] + ' ' + '|' + cubeArray[24] + ' ' + cubeArray[25] + ' ' + cubeArray[26] + '|' + ' ' + cubeArray[33] + ' ' + cubeArray[34] + ' ' + cubeArray[35] + '|');
	console.log('      ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯         ');
	console.log('            |' + cubeArray[36] + ' ' + cubeArray[37] + ' ' + cubeArray[38] + '|');
	console.log('            |' + cubeArray[39] + ' ' + cubeArray[40] + ' ' + cubeArray[41] + '|');
	console.log('            |' + cubeArray[42] + ' ' + cubeArray[43] + ' ' + cubeArray[44] + '|');
	console.log('             -----             ');
	console.log('            |' + cubeArray[45] + ' ' + cubeArray[46] + ' ' + cubeArray[47] + '|');
	console.log('            |' + cubeArray[48] + ' ' + cubeArray[49] + ' ' + cubeArray[50] + '|');
	console.log('            |' + cubeArray[51] + ' ' + cubeArray[52] + ' ' + cubeArray[53] + '|');
	console.log('             ⎯⎯⎯⎯⎯            ');
	
	
};

cube.turn = function(face) {
	new_cube = _.clone(cubeArray);
	var length = face.length;
	var faces = face.split('');
	for(i = 0; i < length; i++){
		
		if(faces[i] === 'f') {				//Front Clockwise

			cubeArray[18] = new_cube[24];  //Face Corners
			cubeArray[24] = new_cube[26];
			cubeArray[26] = new_cube[20];
			cubeArray[20] = new_cube[18];

			cubeArray[19] = new_cube[21];  //Face Edges
			cubeArray[21] = new_cube[25];
			cubeArray[25] = new_cube[23];
			cubeArray[23] = new_cube[19];

			cubeArray[14] = new_cube[37];  //Side Edges
			cubeArray[37] = new_cube[30];
			cubeArray[30] = new_cube[7];
			cubeArray[7] = new_cube[14];

			cubeArray[6] = new_cube[17];   //Side Corners Right
			cubeArray[17] = new_cube[38];
			cubeArray[38] = new_cube[27];
			cubeArray[27] = new_cube[6];

			cubeArray[8] = new_cube[11];   //Side Corners Left
			cubeArray[11] = new_cube[36];
			cubeArray[36] = new_cube[33];
			cubeArray[33] = new_cube[8];
			
			new_cube = _.clone(cubeArray);
		}
		if(faces[i] === 'F') {				//Front Counter Clockwise

			cubeArray[18] = new_cube[20];  //Face Corners
			cubeArray[20] = new_cube[26];  
			cubeArray[26] = new_cube[24];  
			cubeArray[24] = new_cube[18];  

			cubeArray[19] = new_cube[23];  //Face Edges
			cubeArray[23] = new_cube[25];  
			cubeArray[25] = new_cube[21];  
			cubeArray[21] = new_cube[19];  

			cubeArray[14] = new_cube[7];   //Side Edges
			cubeArray[7] = new_cube[30];   
			cubeArray[30] = new_cube[37];  
			cubeArray[37] = new_cube[14];  

			cubeArray[6] = new_cube[27];   //Side Corners Right
			cubeArray[27] = new_cube[38];  
			cubeArray[38] = new_cube[17];  
			cubeArray[17] = new_cube[6];   

			cubeArray[8] = new_cube[33];   //Side Corners Left
			cubeArray[33] = new_cube[36];
			cubeArray[36] = new_cube[11];
			cubeArray[11] = new_cube[8];
			
			new_cube = _.clone(cubeArray);
		}
		if(faces[i] === 'l') {				//Left Clockwise

			cubeArray[9] = new_cube[15];  //Face Corners
			cubeArray[15] = new_cube[17];
			cubeArray[17] = new_cube[11];
			cubeArray[11] = new_cube[9];

			cubeArray[10] = new_cube[12];  //Face Edges
			cubeArray[12] = new_cube[16];
			cubeArray[16] = new_cube[14];
			cubeArray[14] = new_cube[10];

			cubeArray[21] = new_cube[3];  //Side Edges
			cubeArray[3] = new_cube[48];
			cubeArray[48] = new_cube[39];
			cubeArray[39] = new_cube[21];

			cubeArray[18] = new_cube[0];   //Side Corners Right
			cubeArray[0] = new_cube[45];
			cubeArray[45] = new_cube[36];
			cubeArray[36] = new_cube[18];

			cubeArray[24] = new_cube[6];   //Side Corners Left
			cubeArray[6] = new_cube[51];
			cubeArray[51] = new_cube[42];
			cubeArray[42] = new_cube[24];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'L') {				//Left Counter Clockwise

			cubeArray[9] = new_cube[11];  //Face Corners
			cubeArray[11] = new_cube[17];
			cubeArray[17] = new_cube[15];
			cubeArray[15] = new_cube[9];

			cubeArray[10] = new_cube[14];  //Face Edges
			cubeArray[14] = new_cube[16];
			cubeArray[16] = new_cube[12];
			cubeArray[12] = new_cube[10];

			cubeArray[21] = new_cube[39];  //Side Edges
			cubeArray[39] = new_cube[48];
			cubeArray[48] = new_cube[3];
			cubeArray[3] = new_cube[21];

			cubeArray[18] = new_cube[36];   //Side Corners Right
			cubeArray[36] = new_cube[45];
			cubeArray[45] = new_cube[0];
			cubeArray[0] = new_cube[18];

			cubeArray[24] = new_cube[42];   //Side Corners Left
			cubeArray[42] = new_cube[51];
			cubeArray[51] = new_cube[6];
			cubeArray[6] = new_cube[24];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'd') {				//Down Clockwise

			cubeArray[36] = new_cube[42];  //Face Corners
			cubeArray[42] = new_cube[44];
			cubeArray[44] = new_cube[38];
			cubeArray[38] = new_cube[36];

			cubeArray[37] = new_cube[39];  //Face Edges
			cubeArray[39] = new_cube[43];
			cubeArray[43] = new_cube[41];
			cubeArray[41] = new_cube[37];

			cubeArray[34] = new_cube[25];  //Side Edges
			cubeArray[25] = new_cube[16];
			cubeArray[16] = new_cube[46];
			cubeArray[46] = new_cube[34];

			cubeArray[35] = new_cube[26];   //Side Corners Right
			cubeArray[26] = new_cube[17];
			cubeArray[17] = new_cube[45];
			cubeArray[45] = new_cube[35];

			cubeArray[15] = new_cube[47];   //Side Corners Left
			cubeArray[47] = new_cube[33];
			cubeArray[33] = new_cube[24];
			cubeArray[24] = new_cube[15];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'D') {				//Down Counter Clockwise

			cubeArray[36] = new_cube[38];  //Face Corners
			cubeArray[38] = new_cube[44];
			cubeArray[44] = new_cube[42];
			cubeArray[42] = new_cube[36];

			cubeArray[37] = new_cube[41];  //Face Edges
			cubeArray[41] = new_cube[43];
			cubeArray[43] = new_cube[39];
			cubeArray[39] = new_cube[37];

			cubeArray[34] = new_cube[46];  //Side Edges
			cubeArray[46] = new_cube[16];
			cubeArray[16] = new_cube[25];
			cubeArray[25] = new_cube[34];

			cubeArray[35] = new_cube[45];   //Side Corners Right
			cubeArray[45] = new_cube[17];
			cubeArray[17] = new_cube[26];
			cubeArray[26] = new_cube[35];

			cubeArray[15] = new_cube[24];   //Side Corners Left
			cubeArray[24] = new_cube[33];
			cubeArray[33] = new_cube[47];
			cubeArray[47] = new_cube[15];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'r') {				//Right Clockwise

			cubeArray[27] = new_cube[33];  //Face Corners
			cubeArray[33] = new_cube[35];
			cubeArray[35] = new_cube[29];
			cubeArray[29] = new_cube[27];

			cubeArray[28] = new_cube[30];  //Face Edges
			cubeArray[30] = new_cube[34];
			cubeArray[34] = new_cube[32];
			cubeArray[32] = new_cube[28];

			cubeArray[5] = new_cube[23];  //Side Edges
			cubeArray[23] = new_cube[41];
			cubeArray[41] = new_cube[50];
			cubeArray[50] = new_cube[5];

			cubeArray[8] = new_cube[26];   //Side Corners Right
			cubeArray[26] = new_cube[44];
			cubeArray[44] = new_cube[53];
			cubeArray[53] = new_cube[8];

			cubeArray[2] = new_cube[20];   //Side Corners Left
			cubeArray[20] = new_cube[38];
			cubeArray[38] = new_cube[47];
			cubeArray[47] = new_cube[2];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'R') {				//Right Counter Clockwise

			cubeArray[27] = new_cube[29];  //Face Corners
			cubeArray[29] = new_cube[35];
			cubeArray[35] = new_cube[33];
			cubeArray[33] = new_cube[27];

			cubeArray[28] = new_cube[32];  //Face Edges
			cubeArray[32] = new_cube[34];
			cubeArray[34] = new_cube[30];
			cubeArray[30] = new_cube[28];

			cubeArray[5] = new_cube[50];  //Side Edges
			cubeArray[50] = new_cube[41];
			cubeArray[41] = new_cube[23];
			cubeArray[23] = new_cube[5];

			cubeArray[8] = new_cube[53];   //Side Corners Right
			cubeArray[53] = new_cube[44];
			cubeArray[44] = new_cube[26];
			cubeArray[26] = new_cube[8];

			cubeArray[2] = new_cube[47];   //Side Corners Left
			cubeArray[47] = new_cube[38];
			cubeArray[38] = new_cube[20];
			cubeArray[20] = new_cube[2];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'u') {				//Up Clockwise

			cubeArray[0] = new_cube[6];  //Face Corners
			cubeArray[6] = new_cube[8];
			cubeArray[8] = new_cube[2];
			cubeArray[2] = new_cube[0];

			cubeArray[1] = new_cube[3];  //Face Edges
			cubeArray[3] = new_cube[7];
			cubeArray[7] = new_cube[5];
			cubeArray[5] = new_cube[1];

			cubeArray[10] = new_cube[19];  //Side Edges
			cubeArray[19] = new_cube[28];
			cubeArray[28] = new_cube[52];
			cubeArray[52] = new_cube[10];

			cubeArray[11] = new_cube[20];   //Side Corners Right
			cubeArray[20] = new_cube[29];
			cubeArray[29] = new_cube[51];
			cubeArray[51] = new_cube[11];

			cubeArray[9] = new_cube[18];   //Side Corners Left
			cubeArray[18] = new_cube[27];
			cubeArray[27] = new_cube[53];
			cubeArray[53] = new_cube[9];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'U') {				//Up Counter Clockwise

			cubeArray[0] = new_cube[2];  //Face Corners
			cubeArray[2] = new_cube[8];
			cubeArray[8] = new_cube[6];
			cubeArray[6] = new_cube[0];

			cubeArray[1] = new_cube[5];  //Face Edges
			cubeArray[5] = new_cube[7];
			cubeArray[7] = new_cube[3];
			cubeArray[3] = new_cube[1];

			cubeArray[10] = new_cube[52];  //Side Edges
			cubeArray[52] = new_cube[28];
			cubeArray[28] = new_cube[19];
			cubeArray[19] = new_cube[10];

			cubeArray[11] = new_cube[51];   //Side Corners Right
			cubeArray[51] = new_cube[29];
			cubeArray[29] = new_cube[20];
			cubeArray[20] = new_cube[11];

			cubeArray[9] = new_cube[53];   //Side Corners Left
			cubeArray[53] = new_cube[27];
			cubeArray[27] = new_cube[18];
			cubeArray[18] = new_cube[9];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'b') {				//Back Clockwise

			cubeArray[45] = new_cube[51];  //Face Corners
			cubeArray[51] = new_cube[53];
			cubeArray[53] = new_cube[47];
			cubeArray[47] = new_cube[45];

			cubeArray[46] = new_cube[48];  //Face Edges
			cubeArray[48] = new_cube[52];
			cubeArray[52] = new_cube[50];
			cubeArray[50] = new_cube[46];

			cubeArray[32] = new_cube[43];  //Side Edges
			cubeArray[43] = new_cube[12];
			cubeArray[12] = new_cube[1];
			cubeArray[1] = new_cube[32];

			cubeArray[42] = new_cube[9];   //Side Corners Right
			cubeArray[9] = new_cube[2];
			cubeArray[2] = new_cube[35];
			cubeArray[35] = new_cube[42];

			cubeArray[44] = new_cube[15];   //Side Corners Left
			cubeArray[15] = new_cube[0];
			cubeArray[0] = new_cube[29];
			cubeArray[29] = new_cube[44];
			
			new_cube = _.clone(cubeArray);
		}

		if(faces[i] === 'B') {				//Back Counter Clockwise

			cubeArray[45] = new_cube[47];  //Face Corners
			cubeArray[47] = new_cube[53];
			cubeArray[53] = new_cube[51];
			cubeArray[51] = new_cube[45];

			cubeArray[46] = new_cube[50];  //Face Edges
			cubeArray[50] = new_cube[52];
			cubeArray[52] = new_cube[48];
			cubeArray[48] = new_cube[46];

			cubeArray[32] = new_cube[1];  //Side Edges
			cubeArray[1] = new_cube[12];
			cubeArray[12] = new_cube[43];
			cubeArray[43] = new_cube[32];

			cubeArray[42] = new_cube[35];   //Side Corners Right
			cubeArray[35] = new_cube[2];
			cubeArray[2] = new_cube[9];
			cubeArray[9] = new_cube[42];

			cubeArray[44] = new_cube[29];   //Side Corners Left
			cubeArray[29] = new_cube[0];
			cubeArray[0] = new_cube[15];
			cubeArray[15] = new_cube[44];
			
			new_cube = _.clone(cubeArray);
		}
	}
	
};	

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var colors = ['blue', 'green', 'white', 'yellow', 'red', 'orange'],
  pieces = document.getElementsByClassName('piece');
  
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
      if (passed >= 300)
      return swapPieces(face, 3 - 2 * cw);
      requestAnimationFrame(rotatePieces);
    })();
  }
  
  // Events
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
  
  document.ondragstart = function () {return false;};
  window.addEventListener('load', assembleCube);
  scene.addEventListener('mousedown', mousedown);
  
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
    cube.turn(event.key);
    cube.display();
}


window.addEventListener("keydown", rotateFromKeyPress);

async function scramble(){
var oneMove;
var twoMove;

for (let i = 0; i < 30; i++) {
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

function reset(){
  window.location.reload();
}
