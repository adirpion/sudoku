const size = 9;
const innerBoxSize = size / 3;
let counter = 20;

/* Generete random number between 1-9 */ 
const randNumber = (number) => {
   number = Math.floor(Math.random() * size) + 1;
   return number;
}


/* This function check if the sudoku solved */
function solveSudoku(sudoku){
    let impossibleIndex = {},impossibleNumbers,whileCounter = 81;
    while(whileCounter > 0){
        whileCounter = 0;
        for (let col=0; col < sudoku.length; col++){
            for (let row=0; row < sudoku.length; row++){
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
                    for(let colBox = Math.floor(col / 3) * 3; colBox < Math.floor(col / 3) * 3 + 3; colBox++){
                        for(let rowBox = Math.floor(row / 3) * 3; rowBox < Math.floor(row / 3) * 3 + 3; rowBox++){
                            if(sudoku[colBox][rowBox]){
                                impossibleIndex[sudoku[colBox][rowBox]] = true;
                            }
                        } 
                    }
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
var sudoku = [
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
var sudoku2 = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
];

function removeEasy(sudoku){
    
    //debugger
    counter = 0;
    while(counter < 40){
        for (var i=0; i < sudoku.length; i++){
            for(var j=0; j < sudoku.length; j++){
                //Math.floor(Math.random()*sudoku.length)+1, 1, "")     
            }        
        }   
    }
    return temp;
    console.log(item);
}    
let temp = sudoku2.map( (item) => {
   for(let i=0; i < item.length; i++){
        for(let j=0; j < item.length; j++){
            if(item % 2 == 0){
                item = ""; 
            }         
        } 
    }  
    return item;             
});

console.log(temp);
//console.log(removeEasy(sudoku2));

var levelEasy = document.getElementById("easy");
levelEasy.addEventListener("click", function(){
let sudokuDiv = document.getElementById("sudoku");
let table = '<table border="1" width="500">';
    for (let i=0; i < size; i++){
        table = table + '<tr>';
            for (let j=0; j < size; j++){
                table = table + `<td><input maxlength="1" type="text" value="${solveSudoku(sudoku)[i][j]}"> </td>`;
            }
        table = table + '</tr>';
    }
    
table = table + '</table>';
let button = `<button onclick="" class="solved">Solved</button>`;
sudokuDiv.innerHTML = table;
sudokuDiv.innerHTML += button;
});


/*
var levelEasy = document.getElementById("easy");
levelEasy.addEventListener("click", function(){
let sudokuDiv = document.getElementById("sudoku");
let table = '<table border="1" width="500">';
    for (let i=0; i < size; i++){
        table = table + '<tr>';
            for (let j=0; j < size; j++){
                table = table + `<td><input maxlength="1" type="text" value="${solveSudoku(sudoku)[i][j]}"> </td>`;
            }
        table = table + '</tr>';
    }
    
table = table + '</table>';
let button = `<button onclick="${}" class="solved">Solved</button>`;
sudokuDiv.innerHTML = table;
sudokuDiv.innerHTML += button;
}); */

 


