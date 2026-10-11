public class Loop {
    public static void main(String[] args) {
        int i =1;
        int j =1;
        int k =1;
        int l =1;

        // using break statement to exit the loop when i == 3 
        while(i<=5){
            if(i==3){
                break;
            }
            System.out.println(i);
            i++;
        }
        
        System.out.println("------------------");
        
        // using continue statement to skip the print of 3 
        while(j<=5){
            if(j==3){
                j++;
                continue;
            }
            System.out.println(j);
            j++;
        }
        System.out.println("------------------");
        
        // using do while loop 
        do { 
            
            if(k==3){
                k++;
                continue;
            }
            System.out.println(k);
            k++;
            
        } while (k<=5);
        
        System.out.println("------------------");
        
        do { 

            if(l==3){
                break;
            }
            System.out.println(l);
            l++;

        } while (l<=5);
    }

}

