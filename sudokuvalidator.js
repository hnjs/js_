/*
Write a function validSolution that accepts a 2D array representing a Sudoku board, 
and returns true if it is a valid solution, or false otherwise. The cells of the sudoku 
board may also contain 0's, which will represent empty cells. Boards containing one or 
more zeroes are considered to be invalid solutions.
*/

function getSquares(board) {
    var rows = [], row = [], count = 0;
    board[0].map(function(_, i) {
        board.reduce(function(_, _, j) {
            row = row.concat(board[j].slice(i*3,i*3+3))
            count++;
            if (count == 3) {
                if (row.length > 0) {rows.push(row);}
                count = 0; row = [];
            }
        }, [])
    })
    return rows;
}

function validSolution(board){
    var result;
    
    result = genRows(board).every(function(row) {
        return isValid(row);
    });
    
    return result;
}

function isValid(array) {
    if (array.indexOf(0) != -1) {return false;}
    var uniqueArray = array.filter(unique);
    if (array.length !== uniqueArray.length) {return false;}
    return true;
}

function unique(item, index, array) {
    return array.indexOf(item) === index;
}

function genRows(board) {
    var rows = [].concat(board);
    board[0].forEach(function(_, i) {
        rows.push(board.reduce(function(row, val) {
            return row.concat(val[i]);
        }, []));
    });
    
    return rows.concat(getSquares(board));
}