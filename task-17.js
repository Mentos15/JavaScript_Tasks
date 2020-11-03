//https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    
  let countRow = matrix.length;
  for (let i = 0; i < countRow / 2; i++) { 
    for (let j = i; j < countRow - i - 1; j++) { 

        let swap = matrix[i][j]; 
        matrix[i][j] = matrix[countRow - 1 - j][i]; 
        matrix[countRow - 1 - j][i] = matrix[countRow - 1 - i][countRow - 1 - j]; 
        matrix[countRow - 1 - i][countRow - 1 - j] = matrix[j][countRow - 1 - i]; 
        matrix[j][countRow - 1 - i] = swap; 
    } 
  }
  return matrix;
}

