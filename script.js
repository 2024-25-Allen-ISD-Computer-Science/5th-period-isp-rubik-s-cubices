var activeColor = '';

function changeActiveColorToRed() {
	activeColor = 'red';
}

function changeActiveColorToBlue() {
	activeColor = 'blue';
}

function changeActiveColorToWhite() {
	activeColor = 'white';
}

function changeActiveColorToGreen() {
	activeColor = 'lime';
}

function changeActiveColorToYellow() {
	activeColor = 'yellow';
}

function changeActiveColorToOrange() {
	activeColor = 'orange';
}

function changeColor(event) {
    // Array of valid class names
    const validColors = ["red", "blue", "white", "green", "yellow", "orange"];

    // Get the class name of the clicked element
    const className = event.target.className;

    // Check if the class name is in the validColors array
    if (validColors.includes(className) && event.target.style.cssText) {
        event.target.style.backgroundColor = activeColor;
    }
}

const rubiksCube = [
    ['W','R','B'],
    ['W','R'],
    ['W','R','G'],
    ['W','B'],
    ['W'],
    ['W','G'],
    ['W','B','O'],
    ['W','O'],
    ['W','G','O'],
    ['R','B'],
    ['R'],
    ['R','G'],
    ['B'],
    ['G'],
    ['B','O'],
    ['O'],
    ['G','O'],
    ['R','B','Y'],
    ['R','Y'],
    ['R','G','Y'],
    ['B','Y'],
    ['Y'],
    ['G','Y'],
    ['B','O','Y'],
    ['O','Y'],
    ['G','O','Y']
    ];
const mapping = [
    [['','',''],[rubiksCube[17][0],rubiksCube[18][0],rubiksCube[19][0]],['','',''],['','','']],
    [['','',''],[rubiksCube[9][0],rubiksCube[10][0],rubiksCube[11][0]],['','',''],['','','']],
    [['','',''],[rubiksCube[0][1],rubiksCube[1][1],rubiksCube[2][1]],['','',''],['','','']],
    [[rubiksCube[17][1],rubiksCube[9][1],rubiksCube[0][2]],[rubiksCube[0][0],rubiksCube[1][0],rubiksCube[2][0]],[rubiksCube[2][2],rubiksCube[11][1],rubiksCube[19][1]],[rubiksCube[19][2],rubiksCube[18][1],rubiksCube[17][2]]],
    [[rubiksCube[20][0],rubiksCube[12][0],rubiksCube[3][1]],[rubiksCube[3][0],rubiksCube[4][0],rubiksCube[5][0]],[rubiksCube[5][1],rubiksCube[13][0],rubiksCube[22][0]],[rubiksCube[22][1],rubiksCube[21][0],rubiksCube[20][1]]],
    [[rubiksCube[23][0],rubiksCube[14][0],rubiksCube[6][1]],[rubiksCube[6][0],rubiksCube[7][0],rubiksCube[8][0]],[rubiksCube[8][1],rubiksCube[16][0],rubiksCube[25][0]],[rubiksCube[25][2],rubiksCube[24][1],rubiksCube[23][2]]],
    [['','',''],[rubiksCube[6][2],rubiksCube[7][1],rubiksCube[8][2]],['','',''],['','','']],
    [['','',''],[rubiksCube[14][1],rubiksCube[15][0],rubiksCube[16][1]],['','',''],['','','']],
    [['','',''],[rubiksCube[23][1],rubiksCube[24][0],rubiksCube[25][1]],['','',''],['','','']]
    ]
    
/*for (let i = 0; i < mapping.length; i++) {
  console.log(mapping[i]);
}*/

console.log(mapping);
