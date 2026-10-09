import java.util.*;

class ArrayRev {
    public static void main(String[] args){
        Scanner sc =new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr=new int[n];

        for(int i =0;i<n;i++){
            arr[i]=sc.nextInt();
        }

        int[] arrRev = new int[n];

        for(int i = n-1;i>=0;i--){
            arrRev[n-1-i]=arr[i];
        }

        System.out.println(Arrays.toString(arrRev));
        System.out.println(Arrays.toString(arr));

        sc.close();    
    }
}