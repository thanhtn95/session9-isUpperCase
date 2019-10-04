function isFirstCharUpperCase(str) {
     let regexp =/^[A-Z]/;
     if(regexp.test(str)){
         alert("String's first character is uppercase");
     }else {
         alert("String's first character isn't uppercase");
     }
}
isFirstCharUpperCase("Nguyen van Nam");
isFirstCharUpperCase("NGUYEN VAN NAM");
isFirstCharUpperCase("nguyen van Nam");