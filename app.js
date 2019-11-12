let sudoku = document.getElementById("sudoku");
let table = '<table border="1" width="500">';

/* Generete random number between 1-9 */ 
const randNumber = (number) => {
   number = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
   return number;
}
/* Check if there are same numbers in row */ 
const checkRowNumbers = (arr) => {
    for( let r=0; r < arr.length; r++){
        for (let c=0; c < arr.length; c++){
           if(arr[r][c] == arr[r][c]){

            }
            return arr[c];
        }
    }             
}

let numbers = ["","","","","","","","",""];
let arry = [[3,3,5],[4,1,3],[2,1,2],[5,3,2],[6,7,0],[2,5,1],[1,4,2],[2,9,8]];
console.log(checkRowNumbers(arry));

/* Creates 9*9 sudoku table */
for (let i=0; i < numbers.length; i++){
    table = table + '<tr>';
        for (let j=0; j < numbers.length; j++){
            table = table + '<td>' + randNumber(numbers[j]) + '</td>';
        }
    table = table + '</tr>';
}

table = table + '</table>';
sudoku.innerHTML = table;


