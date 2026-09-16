public class ifelse {
    public static void main(String[] args) {
        boolean ticket = true;
        int age = 2;

        
        if(ticket){
            if(age>=18){
              System.out.println("allow");
              
            }else{
              System.out.println("not allow for age < 18");

            }
        }else{
            
            System.out.println("buy ticket");
        }

        
        if(ticket && age>=18){
            System.out.println("allow");
        }else {
            System.out.println("not allow");
        }
    }
    
}
