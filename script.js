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

function resetCube() {
  loadFunction();
}

function loadFunction() {
    document.getElementById('redoneone').style.backgroundColor = 'red';
    document.getElementById('redonetwo').style.backgroundColor = 'red';
    document.getElementById('redonethree').style.backgroundColor = 'red';
    document.getElementById('redtwoone').style.backgroundColor = 'red';
    document.getElementById('redtwotwo').style.backgroundColor = 'red';
    document.getElementById('redtwothree').style.backgroundColor = 'red';
    document.getElementById('redthreeone').style.backgroundColor = 'red';
    document.getElementById('redthreetwo').style.backgroundColor = 'red';
    document.getElementById('redthreethree').style.backgroundColor = 'red';
    
    document.getElementById('blueoneone').style.backgroundColor = 'blue';
    document.getElementById('blueonetwo').style.backgroundColor = 'blue';
    document.getElementById('blueonethree').style.backgroundColor = 'blue';
    document.getElementById('bluetwoone').style.backgroundColor = 'blue';
    document.getElementById('bluetwotwo').style.backgroundColor = 'blue';
    document.getElementById('bluetwothree').style.backgroundColor = 'blue';
    document.getElementById('bluethreeone').style.backgroundColor = 'blue';
    document.getElementById('bluethreetwo').style.backgroundColor = 'blue';
    document.getElementById('bluethreethree').style.backgroundColor = 'blue';
    
    document.getElementById('whiteoneone').style.backgroundColor = 'white';
    document.getElementById('whiteonetwo').style.backgroundColor = 'white';
    document.getElementById('whiteonethree').style.backgroundColor = 'white';
    document.getElementById('whitetwoone').style.backgroundColor = 'white';
    document.getElementById('whitetwotwo').style.backgroundColor = 'white';
    document.getElementById('whitetwothree').style.backgroundColor = 'white';
    document.getElementById('whitethreeone').style.backgroundColor = 'white';
    document.getElementById('whitethreetwo').style.backgroundColor = 'white';
    document.getElementById('whitethreethree').style.backgroundColor = 'white';
    
    document.getElementById('greenoneone').style.backgroundColor = 'lime';
    document.getElementById('greenonetwo').style.backgroundColor = 'lime';
    document.getElementById('greenonethree').style.backgroundColor = 'lime';
    document.getElementById('greentwoone').style.backgroundColor = 'lime';
    document.getElementById('greentwotwo').style.backgroundColor = 'lime';
    document.getElementById('greentwothree').style.backgroundColor = 'lime';
    document.getElementById('greenthreeone').style.backgroundColor = 'lime';
    document.getElementById('greenthreetwo').style.backgroundColor = 'lime';
    document.getElementById('greenthreethree').style.backgroundColor = 'lime';
    
    document.getElementById('yellowoneone').style.backgroundColor = 'yellow';
    document.getElementById('yellowonetwo').style.backgroundColor = 'yellow';
    document.getElementById('yellowonethree').style.backgroundColor = 'yellow';
    document.getElementById('yellowtwoone').style.backgroundColor = 'yellow';
    document.getElementById('yellowtwotwo').style.backgroundColor = 'yellow';
    document.getElementById('yellowtwothree').style.backgroundColor = 'yellow';
    document.getElementById('yellowthreeone').style.backgroundColor = 'yellow';
    document.getElementById('yellowthreetwo').style.backgroundColor = 'yellow';
    document.getElementById('yellowthreethree').style.backgroundColor = 'yellow';
    
    document.getElementById('orangeoneone').style.backgroundColor = 'orange';
    document.getElementById('orangeonetwo').style.backgroundColor = 'orange';
    document.getElementById('orangeonethree').style.backgroundColor = 'orange';
    document.getElementById('orangetwoone').style.backgroundColor = 'orange';
    document.getElementById('orangetwotwo').style.backgroundColor = 'orange';
    document.getElementById('orangetwothree').style.backgroundColor = 'orange';
    document.getElementById('orangethreeone').style.backgroundColor = 'orange';
    document.getElementById('orangethreetwo').style.backgroundColor = 'orange';
    document.getElementById('orangethreethree').style.backgroundColor = 'orange';
    
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
function turnCubeLeftOne(){
    
    var blueBackground = document.getElementById('blueoneone').style.backgroundColor;
    var blueBackgroundTwo = document.getElementById('blueonetwo').style.backgroundColor;
    var blueBackgroundThree = document.getElementById('blueonethree').style.backgroundColor;
    
    var element = document.getElementById('whiteoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('blueoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('blueonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('blueonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('blueoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowoneone').style.backgroundColor = blueBackground;
    
    var element = document.getElementById('blueonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonetwo').style.backgroundColor = blueBackgroundTwo;
    
    var element = document.getElementById('blueonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonethree').style.backgroundColor = blueBackgroundThree;
    
}

function turnCubeLeftTwo(){
    
    var blueBackground = document.getElementById('bluetwoone').style.backgroundColor;
    var blueBackgroundTwo = document.getElementById('bluetwotwo').style.backgroundColor;
    var blueBackgroundThree = document.getElementById('bluetwothree').style.backgroundColor;
    
    var element = document.getElementById('whitetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluetwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluetwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluetwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greentwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greentwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greentwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greentwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greentwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greentwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwoone').style.backgroundColor = blueBackground;
    
    var element = document.getElementById('bluetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwotwo').style.backgroundColor = blueBackgroundTwo;
    
    var element = document.getElementById('bluetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwothree').style.backgroundColor = blueBackgroundThree;
    
}

function turnCubeLeftThree(){
    
    var blueBackground = document.getElementById('bluethreeone').style.backgroundColor;
    var blueBackgroundTwo = document.getElementById('bluethreetwo').style.backgroundColor;
    var blueBackgroundThree = document.getElementById('bluethreethree').style.backgroundColor;
    
    var element = document.getElementById('whitethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluethreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluethreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluethreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenthreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenthreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenthreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreeone').style.backgroundColor = blueBackground;
    
    var element = document.getElementById('bluethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreetwo').style.backgroundColor = blueBackgroundTwo;
    
    var element = document.getElementById('bluethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreethree').style.backgroundColor = blueBackgroundThree;
    
}

function turnCubeRightOne(){
    
    var yellowBackground = document.getElementById('yellowoneone').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowonetwo').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowonethree').style.backgroundColor;
    
    var element = document.getElementById('greenoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('blueoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('blueonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('blueonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('blueoneone').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('yellowonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('blueonetwo').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('yellowonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('blueonethree').style.backgroundColor = yellowBackgroundThree;
    
    var element = document.getElementById('redoneone');
    var redOne = element.style.backgroundColor;
    
    var element = document.getElementById('redonetwo');
    var redTwo = element.style.backgroundColor;
    
    var element = document.getElementById('redonethree');
    var redThree = element.style.backgroundColor;
    
    var element = document.getElementById('redtwoone');
    var redFour = element.style.backgroundColor;
    
    var element = document.getElementById('redtwotwo');
    var redFive = element.style.backgroundColor;
    
    var element = document.getElementById('redtwothree');
    var redSix = element.style.backgroundColor;
    
    var element = document.getElementById('redthreeone');
    var redSeven = element.style.backgroundColor;
    
    var element = document.getElementById('redthreetwo');
    var redEight = element.style.backgroundColor;
    
    var element = document.getElementById('redthreethree');
    var redNine = element.style.backgroundColor;
    
    document.getElementById('redoneone').style.backgroundColor = redThree;
    document.getElementById('redtwoone').style.backgroundColor = redTwo;
    document.getElementById('redthreeone').style.backgroundColor = redThree;
    
}

function turnCubeRightTwo(){
    
    var yellowBackground = document.getElementById('yellowtwoone').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwotwo').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowtwothree').style.backgroundColor;
    
    var element = document.getElementById('greentwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greentwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greentwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greentwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greentwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greentwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluetwoone').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('yellowtwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluetwotwo').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('yellowtwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluetwothree').style.backgroundColor = yellowBackgroundThree;
    
}

function turnCubeRightThree(){
    
    var yellowBackground = document.getElementById('yellowthreeone').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowthreetwo').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreethree').style.backgroundColor;
    
    var element = document.getElementById('greenthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('greenthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenthreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenthreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('greenthreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('bluethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluethreeone').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('yellowthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluethreetwo').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('yellowthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('bluethreethree').style.backgroundColor = yellowBackgroundThree;
    
}
   

function turnCubeUpOne(){
    
    var yellowBackground = document.getElementById('yellowonethree').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwothree').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreethree').style.backgroundColor;
    
    var element = document.getElementById('redoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangeoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangeoneone').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('redtwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redtwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangetwoone').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('redthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redthreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangethreeone').style.backgroundColor = yellowBackgroundThree;
    
    
}

function turnCubeUpTwo(){
    
    var yellowBackground = document.getElementById('yellowonetwo').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwotwo').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreetwo').style.backgroundColor;
    
    var element = document.getElementById('redonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangeonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangeonetwo').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('redtwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redtwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangetwotwo').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('redthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redthreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangethreetwo').style.backgroundColor = yellowBackgroundThree;
}

function turnCubeUpThree(){
    
    var yellowBackground = document.getElementById('yellowoneone').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwoone').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreeone').style.backgroundColor;
    
    var element = document.getElementById('redonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangeonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangeonethree').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('redtwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redtwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangetwothree').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('redthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redthreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('orangethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangethreethree').style.backgroundColor = yellowBackgroundThree;
}


function turnCubeDownOne(){
    
    var yellowBackground = document.getElementById('yellowonethree').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwothree').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreethree').style.backgroundColor;
    
    var element = document.getElementById('orangeoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangeoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redoneone').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('orangetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangetwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redtwoone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redtwoone').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('orangethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangethreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redthreeone').style.backgroundColor = yellowBackgroundThree;
    
}

function turnCubeDownTwo(){
    
    var yellowBackground = document.getElementById('yellowonetwo').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwotwo').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreetwo').style.backgroundColor;
    
    var element = document.getElementById('orangeonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangeonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redonetwo').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('orangetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangetwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redtwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwotwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowtwotwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redtwotwo').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('orangethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowonetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangethreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redthreetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreetwo').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowonetwo');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redthreetwo').style.backgroundColor = yellowBackgroundThree;
}

function turnCubeDownThree(){
    
    var yellowBackground = document.getElementById('yellowoneone').style.backgroundColor;
    var yellowBackgroundTwo = document.getElementById('yellowtwoone').style.backgroundColor;
    var yellowBackgroundThree = document.getElementById('yellowthreeone').style.backgroundColor;
    
    var element = document.getElementById('orangeonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowthreeone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whiteonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangeonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redonethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whiteonethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redonethree').style.backgroundColor = yellowBackground;
    
    var element = document.getElementById('orangetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowtwoone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitetwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangetwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redtwothree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitetwothree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowthreeone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redtwothree').style.backgroundColor = yellowBackgroundTwo;
    
    var element = document.getElementById('orangethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('yellowoneone').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('whitethreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('orangethreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('redthreethree');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('whitethreethree').style.backgroundColor = backgroundColor;
    
    var element = document.getElementById('yellowoneone');
    var backgroundColor = element.style.backgroundColor;
    document.getElementById('redthreethree').style.backgroundColor = yellowBackgroundThree;
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
