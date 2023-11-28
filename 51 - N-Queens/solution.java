import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();

        char[][] board = new char[n][n];

        int[] left = new int[n];
        int[] upperDiag = new int[((2*n)-1)];
        int[] lowerDiag = new int[((2*n)-1)];

        solve(0, board, result, left, upperDiag, lowerDiag);

        return result;
    }

    public void solve(int col, char[][] board, List<List<String>>result, int[] left, int[] uD, int[] lD){
        if(col == board.length){
            List<String> ans = getBoard(board);
            result.add(ans);
        }

        for(int row=0; row<board.length; row++){
            if(left[row] == 0 && 
                uD[board.length-1+col-row] == 0 && 
                lD[col+row] == 0
            ){
                board[row][col] = 'Q';
                left[row] = 1;
                uD[board.length-1+col-row] = 1;
                lD[col+row] = 1;
                solve(col+1, board, result, left, uD, lD);
                board[row][col] = '.';
                left[row] = 0;
                uD[board.length-1+col-row] = 0;
                lD[col+row] = 0;
            }
        }
    }

    public List<String> getBoard(char[][] board){
        List<String> ans = new ArrayList<>();

        for(int i=0; i<board.length; i++){
            StringBuilder str = new StringBuilder();
            for(int j=0; j<board[i].length; j++){
                if(board[i][j] != 'Q'){
                    str.append(".");
                } else {
                    str.append("Q");
                }
            }
            ans.add(str.toString());
        }

        return ans;
    }

}