var activeColor = '';
var activeLetter = '';

var numWhites = 0;
var numReds = 0;
var numBlues = 0;
var numGreens = 0;
var numOranges = 0;
var numYellows = 0;

function changeActiveColorToRed() {
	activeColor = 'red';
	activeLetter = 'R';
}

function changeActiveColorToBlue() {
	activeColor = 'blue';
	activeLetter = 'B';
}

function changeActiveColorToWhite() {
	activeColor = 'white';
	activeLetter = 'W';
}

function changeActiveColorToGreen() {
	activeColor = 'lime';
	activeLetter = 'G';
}

function changeActiveColorToYellow() {
	activeColor = 'yellow';
	activeLetter = 'Y';
}

function changeActiveColorToOrange() {
	activeColor = 'orange';
	activeLetter = 'O';
}

function changeColor(event) {
    // Array of valid class names
    const validColors = ["red", "blue", "white", "green", "yellow", "orange"];

    // Get the class name of the clicked element
    const className = event.target.className;

    // Check if the class name is in the validColors array
    if (validColors.includes(className) && event.target.style.cssText) {
        event.target.style.backgroundColor = activeColor;
		event.target.textContent = activeLetter;
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

//console.log(mapping);



function checkNumbers() {
    numWhites = 0;
    numReds = 0;
    numBlues = 0;
    numGreens = 0;
    numOranges = 0;
    numYellows = 0;

    const cells = document.querySelectorAll('#main td');

    cells.forEach(cell => {
        const color = window.getComputedStyle(cell).backgroundColor;
        
        switch(color) {
            case 'rgb(255, 0, 0)':
                numReds++;
                break;
            case 'rgb(0, 0, 255)':
                numBlues++;
                break;
            case 'rgb(0, 255, 0)':
                numGreens++;
                break;
            case 'rgb(255, 165, 0)':
                numOranges++;
                break;
            case 'rgb(255, 255, 0)':
                numYellows++;
                break;
            case 'rgb(255, 255, 255)':
                numWhites++;
                break;
        }
    });

    console.log("White faces:", numWhites);
    console.log("Red faces:", numReds);
    console.log("Blue faces:", numBlues);
    console.log("Green faces:", numGreens);
    console.log("Orange faces:", numOranges);
    console.log("Yellow faces :", numYellows);
	
	console.log("");
	if(numWhites == 9 && numReds == 9 && numBlues == 9 && numGreens == 9 && numOranges == 9 && numYellows == 9){
		console.log("Number of each color is correct!");
	} else {
		if (numWhites != 9){
			if (numWhites > 9) {
				console.log("You have too many white faces!")
			} else {
				console.log("You don't have enough white faces!")
			}
		} if (numReds != 9){
			if (numReds > 9) {
				console.log("You have too many red faces!")
			} else {
				console.log("You don't have enough red faces!")
			}
		} if (numBlues != 9){
			if (numBlues > 9) {
				console.log("You have too many blue faces!")
			} else {
				console.log("You don't have enough blue faces!")
			}
		} if (numGreens != 9){
			if (numGreens > 9) {
				console.log("You have too many green faces!")
			} else {
				console.log("You don't have enough green faces!")
			}
		} if (numOranges != 9){
			if (numOranges > 9) {
				console.log("You have too many orange faces!")
			} else {
				console.log("You don't have enough orange faces!")
			}
		} if (numYellows != 9){
			if (numYellows > 9) {
				console.log("You have too many yellow faces!")
			} else {
				console.log("You don't have enough yellow faces!")
			}
		}
	}
}

//const placeholder = [];

/*for (let i=1; i<=56; i++){
	var txt = "a"+i;
	console.log(document.getElementById("a1").textContent);
}*/

//print(placeholder);
