
//prime problem


let count = 0;
let num=13;

for( let i=1; i <= num; i++ ){
   
    if  ( num%i === 0 ) {

         count++;

        }

} if (count == 2) {

        console.log ("This is a Prime Number"); 


} else {

     console.log ("This is not a Prime Number");
}




 //palindrome problem

 let str="nauhhfkefyion";

 let bag = "";
 
 for ( let i = 0; i < str.length; i++ ) {
     
             if (str[i] == str[str.length-1-i]) {
 
                 bag = bag + str[i];
                 
                   
               
             } 
 
 } if (bag == str) {
 
    console.log (str, ":"," is a Palindrome")
 
    
   
 } else console.log (str, ":" , "is not a Palindrome");
 
 