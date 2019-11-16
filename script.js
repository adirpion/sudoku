let sudokuDiv = document.getElementById("sudoku");
let table = '<table border="1" width="500">';
const size = 9;
const innerBoxSize = size / 3;

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

    for (let i=0; i < size; i++){
        table = table + '<tr>';
            for (let j=0; j < size; j++){
                table = table + `<td><input maxlength="1" type="text" value="${solveSudoku(sudoku)[i][j]}"> </td>`;
            }
        table = table + '</tr>';
    }
 

table = table + '</table>';
sudokuDiv.innerHTML = table;
