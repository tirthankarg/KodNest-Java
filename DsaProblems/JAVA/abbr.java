public class abbr {
    public boolean validWordAbbreviation(String word, String abbr) {
        int i=0,
            j=0;
        
        while(i<word.length() && j<abbr.length()){
            char w_c = word.charAt(i);
            char a_c=abbr.charAt(j);

            if(Character.isDigit(a_c)){
                if(a_c == '0'){
                    return false;
                }

                int cur =0;

                while(j< abbr.length() && Character.isDigit(abbr.charAt(j))){
                    cur = cur*10 + (abbr.charAt(j) - '0');
                    j++;
                }
                i=i+cur;
            }else{
                if(w_c != a_c){
                    return false;
                }
                i++;
                j++;
            }
        }

        return i == word.length() && j == abbr.length();
    }

    public static void main(String[] args) {
        abbr app = new abbr();
        boolean result = app.validWordAbbreviation("internationalization", "i18n");
        System.out.println(result);
    }
}