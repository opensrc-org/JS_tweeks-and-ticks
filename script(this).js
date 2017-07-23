/**This file was created by @AshishkrGoyal at 11.30 PM**/
//'this' concept for javascript
function test(){
    console.log(this);
    console.log("Ashish");
}
test();


//Here this will print window object and then it will print Ashish.
//this type of binding also known as default binding and because test is called from window scope so this is bind with window.