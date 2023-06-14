//Factorial Calculator
//one parameter: positive whole number
//return the factorial of the number
//ex: 5! = 5 x 4 x 3 x 2 x 1  = 120
//https://www.mathsisfun.com/numbers/factorial.html
//Pyramid Printer
//This challenge consists of multiple levels
//Use console.log() inside of the function to print the results
//no return value
//One parameter: height
//Level 1:
//Create a right triangle of characters:
//example:
        //X
        //XX
        //XXX
        //XXXX
        //XXXXX
        //XXXXXX
        //XXXXXXX

function triangle (height) {
    let myTriangle = "X"
    for  (let i = 0; i < height; i++){
       console.log (myTriangle)
       myTriangle += "X"
   }
};

// triangle(10)

//Level 2:
//Create an isosceles triangle of characters:
//ex:
//   X
//  XXX
// XXXXX
//XXXXXXX

function triangle1 (height) {
    let myTriangle = "X"
    let space = "";
    for (let i = 1; i < height; i++){
       space += " "
   }

   for (let i = 0; i < height; i++){
    console.log (space + myTriangle)
    myTriangle += "XX"
    space = space.slice(1)

   }

};

triangle1(10)

//Level 3:
//Create a hollow isosceles triangle of characters:
//ex:
//    X
//   X X
//  X   X
// X     X
//X       X


function triangle1 (height) {
    let innerMe = " "
    let space = "";
    for (let i = 1; i < height; i++){
       space += " "
   }
   for (let i=0; i < height; i++) {
    if (i === 0) {
        console.log(space + "x")
    }else if(i === 1) {
        console.log(space + "x" + innerMe + "x")
    }else {
        innerMe += "  "
        console.log(space + "x" + innerMe + "x")
    }
        space = space.slice(1)
   }
};

//Level 4:
//Make the bottom layer solid
//ex:
//    X
//   X X
//  X   X
// X     X
//XXXXXXXXX
// 
//Bonus: add a parameter for character;

function triangle1 (height) {
    let innerMe = " "
    let space = "";
    let ex = "xxx";
    for (let i = 1; i < height; i++){
       space += " "
   }
   for (let i=0; i < height; i++) {
    if (i === 0) {
        console.log(space + "x")
    }else if(i === 1) {
        console.log(space + "x" + innerMe + "x")
    }else if(i === height - 1) {
        console.log(ex)
    }else {
        innerMe += "  "
        console.log(space + "x" + innerMe + "x")
    }
        space = space.slice(1)
        if(i !== 0)ex += 'xx'
   }
};
