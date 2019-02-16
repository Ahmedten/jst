/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
   color: "pink",
   isOpen: true,
   open: ()=> {
       if (umbrella.isOpen === true) {
           return "The umbrella is already opened!";
       } else {
           umbrella.isOpen = true;
           return "Julia opens the umbrella!";
       }
   },
   close :()=>{
       if (umbrella.isOpen ===true){
           umbrella.isOpen = false;
           return "Julia closes the umbrella"
       }else{
           return "the umbrella is already closed"
       }
   }
};

console.log(umbrella.close());
console.log(umbrella.isOpen);