//it is the example for precedence ordering of this keyword binding.

let obj1 = {
    value: 'hi',
    print: function () {
        console.log(this);
    }
};

let obj2 = {
    value: 17
};
//console.log(obj1.print);
//console.log(obj1.print());
//obj1.print();

//obj1.print.call(obj2);
obj1.print.call(obj2);
new obj1.print();