/*
Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.

TIP: Make sure to test your code with different values. For example,

average(2, 6) should return 4
average(2, 3, 3, 5, 7, 10) should return 5
average(7, 1432, 12, 13, 100) should return 312.8
average() should return 0
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    const count = nums.length;
    if (count !==0){
    let total = 0;
    for (let num of nums){
        total +=num;
    }
        return total/count;
    }else {
        return 0;
    }
}

// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));
// console.log(average());

// function video (){
//     console.log(this.average);
// }

// video();



/////////////////////////////////////////////////////////////

// constructor
function IceCream() {
    this.scoops = 0;
    //  console.log(this);
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++;
    //   console.log('scoop added!'+this);
    }, 500);
  };
  
  const dessert = new IceCream();
//   dessert.addScoop();
///////////////////////////////////////////////////////////////////////////////

  function greeting( [name = "Ahmed",greet = "Welcome"]=[]){
      console.log(`${greet} ${name}! `);
  }
// greeting();
//////////////////////////////////////////////////////////////////////////////
function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
  }


//   console.log(houseDescriptor(["Red",["blue","green"]]));

  /////////////////////////////////////////////////////////////////////////////

  function createSundae({scoops = 1, toppings = ['Hot Fudge']}={}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }
  
//   console.log(createSundae());
//   console.log(createSundae({})); // Your sundae has 1 scoop with Hot Fudge toppings.
//   console.log(createSundae({scoops: 5})); // Your sundae has 2 scoops with Hot Fudge toppings.
//   console.log(createSundae({scoops: 2, toppings: ['Sprinkles']})); // Your sundae has 2 scoops with Sprinkles toppings.
//   console.log(createSundae({toppings: ['Cookie Dough',"Choclate"]})); // Your sundae has 1 scoop with Cookie Dough toppings.


  /////////////////////////////////////////////////////////////////////////////////////////

  function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
  }

  console.log(houseDescriptor());
  console.log(houseDescriptor({houseColor :"Blue",shutterColors:["white","Danger"]}));
  


