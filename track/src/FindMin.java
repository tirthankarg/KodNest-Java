import java.util.Scanner;
public class FindMin {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int m=sc.nextInt();
        int n=sc.nextInt();

        int[][] arr =new int[m][n];

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                arr[i][j]=sc.nextInt();
            }
        }


        for(int i=0;i<m;i++){
            int min = arr[i][0];
            for(int j=1;j<n;j++){
                min =Math.min(min,arr[i][j]);
            }
            System.out.println("Row " +(i+1)+ " min element: "+ min);
        }


    }
}
