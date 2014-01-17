/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n, returnType){
  var solution = []; //fixme
  var emptyBoard = new window.Board({n:n}).rows();

  var deeplyCopyArray = function(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        newArray.push(deeplyCopyArray(array[i]))
      } else {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };


  var placeRook = function(existingBoard, currentColumn){
    for (var row = 0; row < n; row++) {     
      var newBoard = deeplyCopyArray(existingBoard);
      newBoard[currentColumn][row] = true;
      if(!testBoard.hasAnyRooksConflicts()){
        if (currentColumn < n - 1){
          placeRook(newBoard, currentColumn+1);
        } else {
          var testBoard = new window.Board(newBoard);
          solution.push(newBoard);
        } 
      }
    }
  };
  
placeRook(emptyBoard, 0);
return solution[0];
}; 



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};  



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
