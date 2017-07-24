function test() {
    console.log(this);
    //console.log("Ashish");
}

let obj = {
    firstName: "Ashish",
    lastName: function () {
        console.log(this);
    }
};

//test();
obj.lastName();
console.log(obj.firstName);