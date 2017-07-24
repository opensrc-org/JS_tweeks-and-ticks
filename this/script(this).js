/**This file was created by @AshishkrGoyal at 11.30 PM**/
//'this' concept for javascript
function test(){
    console.log(this);
    console.log("Ashish");
}
test();
//this type of binding is also known as implicit binding and here this is the global object in the window scope.
//and this type of method invocation is also known as free method invocation in javascript.
console.log(test===window.test); //true


//Here this will print window object and then it will print Ashish.
//this type of binding also known as default binding and because test is called from window scope so this is bind with window.