
// You should implement your task here.

module.exports = function towelSort (matrix) {
  // Checking for empty input
  if (!matrix)
     return []

  let towel=[];

  for (let i=0;i<matrix.length;i++){
    // taking every even subarray and adding to our new one
    if (i%2==0)
      towel=towel.concat(matrix[i]);

    else
    // every odd one should be reversed and then added
       towel=towel.concat(matrix[i].reverse());
  
    }
  return towel
}
