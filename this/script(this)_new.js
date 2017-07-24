function ConstructorExample() {
    console.log(this); //blank object
    this.value = 10;
    console.log(this); //an obj with having value prop with value = 10;
}

//ConstructorExample();
new ConstructorExample();

//when a function constructor is called with new keyword a blank object is created always and it is represented with 'this'