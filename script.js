let originalBoard;
const size = 9;
/* randArr have 4 different solved sudoku table */
let randArr = [
[
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
],
[
    [3,6,2,8,4,1,9,7,5],
    [9,4,7,3,6,5,8,2,1],
    [8,5,1,9,2,7,6,4,3],
    [7,9,4,6,8,3,5,1,2],
    [6,8,5,7,1,2,4,3,9],
    [2,1,3,5,9,4,7,8,6],
    [5,7,9,2,3,8,1,6,4],
    [4,3,8,1,5,6,2,9,7],
    [1,2,6,4,7,9,3,5,8]
],
[
    [4,9,3,6,8,7,5,2,1],
    [8,7,6,5,2,1,9,4,3],
    [5,2,1,9,4,3,8,7,6],
    [9,4,5,2,7,6,3,1,8],
    [7,6,8,3,1,9,4,5,2],
    [3,1,2,8,5,4,7,6,9],
    [6,8,7,4,9,2,1,3,5],
    [2,5,4,1,3,8,6,9,7],
    [1,3,9,7,6,5,2,8,4]
],
[
    [9,7,3,8,6,5,4,2,1],
    [8,6,5,4,2,1,9,7,3],
    [4,2,1,9,7,3,8,6,5],
    [7,9,2,6,5,8,3,1,4],
    [6,5,8,3,1,4,7,9,2],
    [3,1,4,7,9,2,6,5,8],
    [5,8,9,2,4,7,1,3,6],
    [2,4,7,1,3,6,5,8,9],
    [1,3,6,5,8,9,2,4,7]
]];


/* Generete random sudoku table From randArr(Array) that fills inside it 4 different sudoku */ 
function randTable(sudoku){
    for(let i = 0; i < sudoku.length; i++){
        return sudoku[Math.floor(Math.random() * sudoku.length)];
    }
}
/* this var has the randTable random value to generete */
var masterMatrix = randTable(randArr);
/* this var same like above to compare between them later */
var subMasterMatrix = masterMatrix;

/* this function checks where every number is greater than 0 and empty the cell randomly
by insert to a new matrix the values from the random sudoku that randed with random empty cells and
with values from the table that randed */
function NumbersToEmpty(arr,difficulty){
    let newMatrix = [[],[],[],[],[],[],[],[],[]];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            newMatrix[i][j]=arr[i][j];
        }
    }
    let row, col, counter = 0;
    while (counter < difficulty){
        row = Math.floor(Math.random()*9);
        col = Math.floor(Math.random()*9);
        if(newMatrix[row][col] != 0){
            newMatrix[row][col] = '';
            counter++;
        }            
    }
    return newMatrix;
}

/* this function creates by double for loop the visual of the table with inputs get the random id of every input */
function createTable(numbers){
    let table = '<table border="1" width="500">';
        for (let i=0; i < size; i++){
            table = table + '<tr>';
                for (let j=0; j < size; j++){
                    table = table +  `<td><input class="sudokuInput" id="${'' + i + j}" type="text" maxlength="1" value="${NumbersToEmpty(masterMatrix,numbers)[i][j]}"> </td>`;
                }
            table = table + '</tr>';
        }   
    table = table + '</table>';

    return table
}

/* This function get the numbers that we want to empty from the sudoku and the name of the level.
also, it has the html id's to vars for using them to manipulate the CSS  */
function createGameContainer(difficulty, removeNumbers) {
    let section = document.getElementById("chooseLevel");
    let titleH2 = document.getElementById("title");
    titleH2.style.opacity = "0";
    section.style.opacity = "0";

    let sudokuDiv = document.getElementById("sudoku");
    let levelTitle = `<h2 id="title title-position">${difficulty}</h2>`;
    let table = createTable(removeNumbers);
    let solveButton = `<button onclick="solveGame()" class="trytosolve">FINISH ✓</button>`;
    let retryButton = `<button onclick="reset()" class="trytosolve">RETRY ↺</button>`;
    sudokuDiv.innerHTML = table;
    sudokuDiv.innerHTML += solveButton;
    sudokuDiv.innerHTML += retryButton;
    sudokuDiv.style.transform = "scale(1) translateX(-50%)"
    originalBoard = sudokuDiv.innerHTML;
}

/* 3 arrow functions for every level that start with event click to the button of evety level
and get the function createGameContainer to fill the table by the level */
var levelEasy = document.getElementById("easy");
levelEasy.addEventListener("click", ()=> createGameContainer('EASY', 20));

var levelMedium = document.getElementById("medium");
levelMedium.addEventListener("click", ()=> createGameContainer('MEDIUM', 40));

var levelHard = document.getElementById("hard");
levelHard.addEventListener("click", ()=> createGameContainer('HARD', 60));

/* this function compare between the sudoku: 1 sudoku is randed with empty cells and with numbers by level.
the second sudoku is the same sudoku that fill complete and this function check if the first sudoku with
the empty cells + the values the user inset is equal between them */
function getMatrix(){
    
    const board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];
    // debugger
    for (let i=0; i < size; i++) {
        // board[i] = [];
        for (let j=0; j < size; j++) {
            // if(board[i][j]){
                board[i][j] += document.getElementById('' + i + j).value;
                board[i][j] = parseInt(board[i][j]);
        }
    }
    console.log(subMasterMatrix);
    console.log(board);
    let counter = 0;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if(board[i][j] == 0){
                if (board[i][j] == subMasterMatrix[i][j]) {
                    counter = 0;
                }
                else {
                    counter++;
                }
            }
        }
    }
        if (counter == 0) {
            return true;
        }
        else {
            return false;
        }
}
/* this function reset the table by return it to the first appearance */
function reset(){
    let sudokuDiv = document.getElementById("sudoku");

    sudokuDiv.innerHTML = originalBoard;
}

/* the function checks the is the getMatrix() is true and pop an alert with result (solve or not) */
function solveGame() {
    const checkIfSolved = getMatrix();
    if(checkIfSolved){
        alert("Congratioanis!!! you solve it");
    }else {
        alert("Sorry Try agein");
    }    
}

/* this is a login function check if user and password equal to "abcd" and "1234" */
function login() {
    debugger
    let pass = document.getElementById('pass').value;
    let user = document.getElementById('user').value;
    let userCorrect = 'abcd';
    let passCorrect = '1234';

    if (user != userCorrect) {
        document.getElementById("userBack").innerHTML = 'username is uncorrect';
    }
    if (pass != passCorrect) {
        document.getElementById("passBack").innerHTML = 'password is uncorrect';
    }
    if ((user == userCorrect) && (pass == passCorrect)) {
        let loginDiv = document.getElementById("loginDiv");
        let titleH2 = document.getElementById("title");
        let section = document.getElementById("chooseLevel");
        loginDiv.style.display = "none";
        section.style.opacity = "1";
        section.style.display = "flex";
        section.style.transform = "translateY(0)";
        titleH2.style.opacity = "1";
    }
} 






/* This function gets sudoku to solve with 0 in the empty cells and solve it

function solveSudoku(sudoku){
    // Vars that we will use them in the function 
    let impossibleIndex = {},impossibleNumbers,whileCounter = 81;
    while(whileCounter > 0){
        whileCounter = 0;
         //the Both for loops [i] and [j] start to run on the Matrix 
        for (let col=0; col < sudoku.length; col++){
            for (let row=0; row < sudoku.length; row++){
                 //Check where 0 is appear, Where is number > 0 impossibleIndex Object get the arrays to new objects 
                if(sudoku[col][row] === 0){
                    let impossibleIndex = {};
                    for (let i=0; i < 9; i++){
                        if(sudoku[col][i] > 0){
                            impossibleIndex[sudoku[col][i]] = true;
                        }
                        if(sudoku[i][row] > 0){
                            impossibleIndex[sudoku[i][row]] = true; 
                        }
                    }
                    //  this loop checks the box 3*3 inside the sudoku and check if true to insert arrays to imbossileIndex Objects 
                    for(let colBox = Math.floor(col / 3) * 3; colBox < Math.floor(col / 3) * 3 + 3; colBox++){
                        for(let rowBox = Math.floor(row / 3) * 3; rowBox < Math.floor(row / 3) * 3 + 3; rowBox++){
                            if(sudoku[colBox][rowBox]){
                                impossibleIndex[sudoku[colBox][rowBox]] = true;
                            }
                        } 
                    }
                    //  inseting to impossibleNumbers var how mant keys every objects fills and when objects 
                    // fills 8 keys it's converting it's index to string to check how many negetive values are there.
                    // than, it's loop the while loop until it has not negetive values 

                    impossibleNumbers = Object.keys(impossibleIndex);
                    console.log(impossibleNumbers);
                    if(impossibleNumbers.length == 8){
                        for(let i = 1; i < 10; i++){                            
                            if(impossibleNumbers.indexOf(i.toString()) < 0){                                
                                sudoku[col][row] = i;
                            }  
                        }                                
                    }else {
                        whileCounter++;
                    }  
                }
            }
        }
    }
    return sudoku;
}

var sudokuDemo = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];
*/