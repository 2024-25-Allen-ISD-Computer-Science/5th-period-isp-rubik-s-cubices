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
