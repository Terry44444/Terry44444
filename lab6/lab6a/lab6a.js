function is_leap(a_year){
    //stub function - the code has to be replaced
    if(a_year % 4 != 0){
       return false;
        } else {
            if (a_year % 100 !=0){
                return true;
            } else {
                if (a_year % 400 != 0) {
                    return false;
                }else{
                    return true;
                }
                }
            }
        }
      




console.log(is_leap(2000)) //expected - 0 or false

