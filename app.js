let sudoku = document.getElementById("sudoku");
let table = '<table border="1" width="500">';
const size = 9;
const innerBoxSize = size / 3;

/* Generete random number between 1-9 */ 
const randNumber = (number) => {
   number = Math.floor(Math.random() * size);
   return number;
}

const row = [1,2,3,4,5,6,7,8,9];
/* Creates row with rand numbers between 1-9 with validation */
const createRow = (arr) => {
    row.forEach((number) => {
        while(!hasNumber(arr, number) && !isArrFull(arr)){
            const randomIndex = randNumber(number);
            const randomCell = arr[randomIndex];

            if (!randomCell.value){
                randomCell.value = number;

                if(false && isValidBox(randomCell)) { /*  && isValidCross(randomCell) */
                    randomCell.value = null;
                }
            }
        }
    });           
}

/* Check if the number exist inside the array */
const hasNumber = (arr, number) => {
    for( let i = 0; i < arr.length ; i++){
        const cell = arr[i];
        if(cell.value === number) {
            return true;
        }
    }
    return false;
}

/* Check if the array is full of numbers */
const isArrFull = (arr) => {
    for (let i=0; i < size; i++){
        if(!arr[i].value){
            return false;
        }
    }
    return true;
}

/* Check the box 3*3 */
const isValidBox = (cell) => {
    const centerBoxIndex = {
        i: getCenterIndex(cell.i),
        j: getCenterIndex(cell.j),
    }

    const innerBoxCells = [];
    const boxStartI = centerBoxIndex.i - 1;
    const boxStartJ = centerBoxIndex.j - 1;

    for (let i=boxStartI; i < boxStartI + innerBoxSize; i++){
        for (let j=boxStartJ; j < boxStartJ + innerBoxSize; j++){
            if(i === cell.i && j === cell.j) {
                continue;
            }
            innerBoxCells.push(numbers[i][j]);
        }
    }

    return !hasNumber(innerBoxCells, cell.value);
}

const isValidCross = (cell) => {
    if (hasNumber(numbers[cell.i], cell.value)) {
        return false;
    }

    const arrSyntethic = getSyntethicRow(j);

    if (hasNumber(arrSyntethic, cell.value)) {
        return false;
    }

    return true;
}

const getCenterIndex = (index) => {
    const innerIndex = index % innerBoxSize;

    const center =  innerIndex === 1;
    if (center) {
        return index;
    }
    
    const negetive =  innerIndex < 1;
    if (negetive) {
        return index + 1;
    }

    const positive =  innerIndex > 1;
    if (positive) {
        return index - 1;
    }
}

/* This empty array will placed the sudoku */ 
let numbers = [];
/* This loop creates the empty numbers[] array in the place [i][j] as object for later using */
for (let i=0; i < size; i++){
    numbers[i] = [];
    for (let j=0; j < size; j++){
        numbers[i][j] = {
           /*the number*/ value: null,
           /*number position i*/  i,
           /*number position j*/  j
        };
    }
}

/* Creates new Synthetic array from the numbers */
const getSyntethicRow = (rowIndex) => {
    const arrSyntethic = [];
    for(let k=0; k < size; k++){
        arrSyntethic[k] = {
            value: numbers[k][rowIndex].value,
        };
    }
    return arrSyntethic;
}

/* This loop generete the row and col as random numbers */
for (let i=0; i < size; i++){
    for (let j=0; j < size; j++){
        if(i === j){
            createRow(numbers[i]);

            for(let k=0; k < size; k++){
                    const arrSyntethic = getSyntethicRow(j);                
                    numbers[k][j].value = arrSyntethic[k].value;
                    createRow(arrSyntethic);
            }            
        }
    }
}

/* This loop creates the visual table inside the #sudoku div */ 
for (let i=0; i < size; i++){
    table = table + '<tr>';
        for (let j=0; j < size; j++){
            table = table + `<td><input maxlength="1" type="text" value="${numbers[i][j].value}"> </td>`;
        }
    table = table + '</tr>';
}

table = table + '</table>';
sudoku.innerHTML = table;


