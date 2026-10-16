import java.util.Scanner;
public class StoreStudent {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int m=sc.nextInt();
        int n=sc.nextInt();

        double[][] school =new double[m][n];

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                school[i][j]=sc.nextDouble();
            }
        }
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                System.out.print(school[i][j]+" ");
            }
            System.out.println();
        }


    }
}
