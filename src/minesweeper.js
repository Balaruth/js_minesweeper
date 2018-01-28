const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows.length; rowIndex++) {
    let row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns.length; columnIndex++) {
        row.push(' ');
      } board.push(row);
  } return board;
};

generatePlayerBoard(3, 3);

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows.length; rowIndex++) {
    let row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns.length; columnIndex++) {
        row.push(null);
      } board.push(row);
  } return board;
      numberOfBombsPlaced = 0
      // while loop can potentially place bombs on existing bombs. To be fixed
        while (numberOfBombsPlaced < numberOfBombs) {
          let randomRowIndex = Math.floor(Math.random() * numberOfRows);
          let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced+=1;
        }
};
