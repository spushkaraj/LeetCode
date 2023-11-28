class Solution {
    public void solveSudoku(char[][] board) {
        solve(board);
    }

    public boolean solve(char[][] board){
        for(int row=0; row<board.length; row++){
            for(int col=0; col<board[row].length; col++){
                if(board[row][col] == '.'){
                    for(char ch='1'; ch<='9'; ch++){
                        if(isValid(board, row, col, ch)){
                            board[row][col] = ch;

                            if(solve(board)){
                                return true;
                            } else {
                                board[row][col] = '.';
                            }
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    public boolean isValid(char[][] board, int row, int col, char ch){
        for(int i=0; i<9; i++){
            // checking for the row if ch is present
            if(board[row][i] == ch) return false;
            
            // checking for the col if ch is present
            if(board[i][col] == ch) return false;
            
            // checking for the sub-matrix if ch is present
            if(board[3 * (row/3) + (i/3)][3 * (col/3) + (i%3)] == ch) return false;
        }

        return true;
    }
}