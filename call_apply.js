/*
const func = function () {
    console.log(this.length);
};

func(); //undefined because it is default binding and  this here is window obj.

func.call([1,2,3,4]); //4
func.apply([1,2,3,4]); //4*/



var dog = {
    noise: "arf",
    speak: function () {
        console.log(this.noise)
    }
};

var cat = {
    noise: "meow"
};

dog.speak.call(cat);
/*dog.speak();*/

/*cat.speak = dog.speak;
cat.speak();*/

