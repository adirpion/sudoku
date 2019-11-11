let sudoku = document.getElementById("sudoku");
let table = '<table border="1" width="500">';
let randNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
let numbers = [1,2,3,4,5,6,7,8,9];

for (let i=0; i < numbers.length; i++){
    table = table + '<tr>';
    for (let j=0; j < numbers.length; j++){
        if(numbers[i] == numbers[j]){
            table = table + '<td>' + randNumber + '</td>';
        }
        //console.log(numbers[j]);
    }
    table = table + '</tr>';
    //console.log(numbers[i]);
}

table = table + '</table>';
sudoku.innerHTML = table;


