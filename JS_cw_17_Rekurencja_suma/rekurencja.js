function suma(n) {
    if(n == 0){
      return 0;
    } else if(n==1){
      return 1;
    } else {
      return parseInt(n) + suma(n-1);
     }
  }